# Spring Cloud ☁️ (alibaba)

## Nacos

服务注册/发现 配置中心

NameSpace-->Group-->Service-->Cluster--->Instance

## Ribbon

| 接口                     | 作用                           |
| ------------------------ | ------------------------------ |
| IClientConfig            | 读取配置                       |
| IRule                    | 负载均衡规则 (轮询,随机.....)  |
| IPing                    | ping 过滤                      |
| ServerList<Server>       | 交给 Ribbon 的实例集合         |
| ServerListFilter<Server> | 过滤掉不符合条件的实例         |
| ILoadBalancer            | Ribbon 负载均衡入口            |
| ServerListUpdater        | 更新交给 Ribbon 实例集合的策略 |

自定义 Ribbon 配置:

```java
@RabbionClient(name="xxx服务",configuration="xxxxclass")
@RabbionClients(defaultConfiguration="xxxxclass") // 全局配置

xxxclass: IRule/ILoadBalancer....(大部分接口配置都可以重写)   // 放到 spring boot扫描包之外, 防止父子上下文重叠扫描(事务失效)

// 配置文件方式
xxxx:
  ribbon:
    NFLoadBalancerRuleClassName: xxxclass
```

1. ribbon 默认懒加载

   ```java
   ribbon:
    eager-load:
      enabled: true
      clients: xxx服务
   ```

2. 重写 ribbon 负载均衡规则

   ```java
    extends AbstarctRibbonLoadBlancer

    nacosDiscoveryProperties-->namingService--->selectOneHealthy... // nacos提供的基于权重的负载均衡规则
   ```

## Feign

> 声明式 HTTP 客户端

```java
@FelgnClient(name="xxx服务")
interface xxx{

   @GetMapping("/test)
   Object test(....);
}
```

1. Feign 默认 httpclient 没提供连接池
2. 日志: none basic headers all <code>@EnableFeignClients(defaultConfigurations=xxxx)可以指定全局配置</code>

```java
feign:
  client:
    xxx服务: // default 为全局配置
      loggerLevel: xxx
```

3. 支持的配置: 拦截器 重试策略 超时....
4. 不同服务的 feignClient 继承公共接口/dto 对象?
5. 使用 apache httpclient: 额外的依赖+配置 <code>feign.htpclient.enable:true</code>

## Sentinel

GitHub[Sentinel](https://github.com/alibaba/Sentinel)

![流控规则](./imgs/sentinel.png)

1. 关联: 关联的资源达到阈值就限流对自己资源的请求
2. 资源: <code>@SentinelResource("xxxx")</code> 或者请求 uri 也可以当作资源
