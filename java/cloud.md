# Spring Cloud ☁️ (alibaba)

## Nacos

服务注册/发现  配置中心

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

2. 重写ribbon负载均衡规则

   ```java
    extends AbstarctRibbonLoadBlancer

    nacosDiscoveryProperties-->namingService--->selectOneHealthy... // nacos提供的基于权重的负载均衡规则
   ```
