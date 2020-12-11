# 工作负载

## Replication Controllers

废弃

## Replica Sets

支持 selector, 管理 pods 的创建调度

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
  labels:
    app: guestbook
    tier: frontend
spec:
  # modify replicas according to your case
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
        - name: php-redis
          image: gcr.io/google_samples/gb-frontend:v3
```

## Deployment

通过 replica sets 管理 pods, 回滚 更新等等

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.14.2
          ports:
            - containerPort: 80
```

## Daemon Sets

所有 node 或某些 node 节点都运行某一个 pod

## Stateful Sets

有状态服务,podname hostname 重新调度后不会改变
有序部署 伸缩

## Cron Jobs

定时任务

## Jobs

批处理任务,执行失败的可以重新执行

## hpa

自动伸缩
