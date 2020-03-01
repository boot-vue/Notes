# Spring Cloud ☁️ (alibaba)

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
@RabbionClient(name="xxx",configuration="xxxxclass")

xxxclass: IRule(自定义)   // 放到 spring boot扫描包之外, 防止父子上下文重叠扫描(事务失效)

// 配置文件方式
xxxx:
  ribbon:
    NFLoadBalancerRuleClassName: xxxclass
```
