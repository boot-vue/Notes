# 服务发现

pod 资源的抽象 label-selector 对 pod 逻辑分组

## port

- ClusterPort 集群内
- NodePort 每个 node 节点都绑定端口对外服务
- LoadBalancer
- ExternalName 集群外部服务引入到集群内部来

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```

## headless service

有状态服务使用

## ExternalName

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: prod
spec:
  type: ExternalName
  externalName: my.database.example.com
```

## ingress 负载均衡器

[nginx-ingress](https://github.com/kubernetes/ingress-nginx)
