# MapReduce

> 离线数据处理, 数据源静态, 不适合实时 or 流式计算

## Map

1. 按文件块大小切分数据
2. 并行跑 map task 任务

## Reduce

1. 并行跑 reduce task, 数据依赖上一阶段 map task 的结果

## Code

1. extend Mapper
2. 输入数据是 KV 键值对形式
3. map()方法: 具体的业务逻辑, 每个<K,V>数据只处理一次
4. extend Reduce
5. 输出数据是 KV 键值对形式
6. reduce()方法: 具体的业务逻辑, 每组相同的 K <K,V>只调用一次 reduce()
7. driver: yarn 客户端,提交 job 到 yarn 集群中

::: tip
Mapper
:::

```java
public class TestMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
    private Text k = new Text();
    private IntWritable v = new IntWritable(1);

    @Override
    protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        // 输入
        // xxx sss
        // kkk  lll   mmmm    map默认按行分割 LongWritable key: io读取指针偏移量
        String line = value.toString();
        String[] words = line.split(" ");

        for (String word : words) {
            k.set(word);
            // xxx,1
            // sss,1
            // kkk,1
            context.write(k, v);
        }

    }
}
```

::: tip
Reducer
:::

```java
public class TestReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
    IntWritable v = new IntWritable();

    @Override
    protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
        // xxx,1
        // sss,1
        // kkk,1
        int sum = 0;
        for (IntWritable value : values) {
            sum += value.get();
        }

        v.set(sum);
        context.write(key, v);
    }
}
```

::: tip
Driver
:::

```java
 Configuration conf = new Configuration();

        Job job = Job.getInstance(conf);

        job.setJarByClass(Test.class);

        job.setMapperClass(TestMapper.class);
        job.setReducerClass(TestReducer.class);

        job.setMapOutputKeyClass(Text.class);
        job.setMapOutputValueClass(IntWritable.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        FileInputFormat.setInputPaths(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));

        // 提交job
        job.waitForCompletion(true);
```

## 自定义 Writable

1. extends Writable
2. 必须有无参构造方法
3. write/readFields 字段顺序要一致
4. 重写 toSring()
5. 需要放到 Key 中的必须能排序, 实现 Comparable 接口
