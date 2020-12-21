# Flink

> 事件驱动 高吞吐 低延迟 时间有序

## DateSet

`离线数据批处理`

```java
public class Demo {
    public static void main(String[] args) throws Exception {
        ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();

        DataSource<String> dataSource = env.readTextFile("D:\\Codes\\flink-demo\\src\\main\\resources\\data.txt");

        AggregateOperator<Tuple2<String, Integer>> operator = dataSource.flatMap(new xx()).groupBy(0).sum(1);
        operator.print();
    }

    private static class xx implements FlatMapFunction<String, Tuple2<String, Integer>> {
        @Override
        public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
            String[] strings = s.split(" ");

            for (String string : strings) {
                collector.collect(new Tuple2<>(string, 1));
            }
        }
    }
}

// (xx,1)
// (oo,1)
// (uu,1)
// (kk,2)
// (xxx,1)
// (world,2)
// (yy,1)
// (vv,1)
// (hello,4)
```

java 少用`lambda` ,会导致 flink 自动类型推断异常

## DateStream

`流式数据`

```java
       StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
       // env.setParallelism(1);
        DataStreamSource<String> dataSource = env.readTextFile("D:\\Codes\\flink-demo\\src\\main\\resources\\data.txt");

        SingleOutputStreamOperator<Tuple2<String, Integer>> operator = dataSource.flatMap(new xx())
                .keyBy(t -> t.getField(0)).sum(1);
        operator.print();

        env.execute();

// 3> (kk,1)
// 4> (hello,1)
// 1> (xx,1)
// 4> (yy,1)
// 8> (vv,1)
// 8> (xxx,1)
// 3> (uu,1)
// 10> (oo,1)
// 3> (kk,2)
// 7> (world,1)
// 4> (hello,2)
// 7> (world,2)
// 4> (hello,3)
// 4> (hello,4)

```

## job manager

作业管理: 作业图 逻辑数据流图 所有的 jar 资源

向`resource manager`申请资源 check points 检查

## task manager

工作进程(jvm 进程): 分配 `slots` 执行任务

## redource manager

管理 task manager 资源`slots`

## dispatcher

`web ui` 作业/任务管理接口

应用-->dispatcher-->提交给 jobmanager--->向 resource manager 申请资源-->交给 task manager 处理

## Parallelism

`并行度` 并行子任务个数, 不同子任务可以在同一个 slot 执行, 必须是有前后执行顺序的

同时执行的子任务必须分配在不同的 slot

`slot`间内存资源互相隔离

`slotSharingGroup()` 不同组的要分配不同的 slot

## dataflow

source-->transformation-->sink

## 任务链

并行度相同的 one-to-one 合并

## API

`createLocalEnvironment` `createRemoteEnvironment` `getExecutionEnvironment`

- data source : `collection` `file` `csv` `kafka` `socket` .....

  `addSource(new FlinkKafkaConsumer<String>("topic",new SimpleStringSchema(),kafkaProperties))`

- transform: `flatmap` `map` `filter` `keyBy`分组 聚合

  `rich function` : 可以获取到运行上下文

  `max` 与 `maxBy`: max 只更新聚合字段值,其它属性值不变, maxBy 整个对象都会更新

  `reduce`: `T reduce(T v1,T v2)` 前后状态比较

  `SplitStream`: `split` `select` 分割成多个数据流分离处理

  ```java
  SplitStream<People> splitStream = source.map(new MapFunction<String, People>() {
            @Override
            public People map(String value) throws Exception {
                return new Gson().fromJson(value, People.class);
            }
        }).split(new OutputSelector<People>() { // split可以将一个流，通过打Tag的方式，split成多个流
            @Override
            public Iterable<String> select(People value) {
                List<String> list = new ArrayList<>();
                if (value.sex().equals("male")) {
                    list.add("male");
                } else {
                    list.add("female");
                }
                return list;
            }
        });

        // SplitStream流 通过select("tag")获取DataStream流
        DataStream<People> male = splitStream.select("male");
        male.print("male:");

        DataStream<People> female = splitStream.select("female");
        female.print("female:");

  ```

  `Connect` `CoMap`: 合并两个 dataStream, 类型可以不同 `union`可以合并多个数据流,数据类型要相同

  ```java
  ConnectedStreams<Integer, String> connected = first.connect(second);
  CoMapFunction[IN1, IN2, OUT]

  CoFlatMapFunction[IN1, IN2, OUT]

  ```

- sink

  `addSink`: 计算结果输出

- window

  无限流数据切割为有限流, 分发到有限大小`bucket`中

  `time window`: 滚动`tumbling` 滑动`sliding` 会话`session`:timeout 时间间隙,没有新数据开始新窗口

  `count window`: 滚动 滑动

  `window size` `slide size` 滑动窗口数据会重叠

  使用: `keyBy`-->`timewindow()`-->`聚合` 窗口结束后`state`结果输出

  `增量聚合`

  `全窗口函数`:`bucket`收集数据,计算的时候再遍历数据 `apply(WindowFunction)`
