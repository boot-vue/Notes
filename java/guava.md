# 呱呱呱~

## Utils

1. joiner

> Joiner.on('#).slipNulls().join(list)

2. splitter

```java
Splitter.on('*').trimResults().omitEmptyStrings().split("....")
Splitter.fixedLength(3).split("xxxoooccc")
```

3.  preconditions

```java
Preconditions.checkNotNull(xxx,"msg....")
Preconditions.checkArgument()
Preconditions.checkState()
```

4. strings

```java
Strings.emptyToNull()
Strings.nullToEmpty()
Strings.commonPrefix("Hello","Hxx");// H\
CharMatcher.is("").countIn("....")
CharMatcher.breakingWhitespace().collapseFreom("....","*")
```

5. stopWatch

```java
StopWatch.createStarted()
......
time= stopWatch.stop()
```

## Functional

> j8 就不错

1. Consumer

   > 只有一个 accept 方法, 无返回值

   ```java
    User user = new User("zs");

    Consumer<User> userConsumer = user -> user.setName("张三");};
    userConsumer.accept(user);
    logger.info(user.getName());//张三
   ```

2. Function

   > apply: 有输入有输出

3. Predicate

   > test: true/false

4. Supplier

   > 容器 get: 返回值

## Collections

## Cache

## EventBus

```java
new EventBus(SubscriberExceptionHandler)
e.register(xxxListener)

e.post(...)  // 发送消息

// 订阅
@Subscribe
public xxx handle(xxx e)


// deadEvent  Subscribe 方法参数必须是DeadEvent
```

## IO

> 有啥

## Concurrent
