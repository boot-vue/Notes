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
