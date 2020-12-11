# 调度器

`Scheduler`: 分配 pod 到合适的节点

## 调度过程

1. 预选,排除不符合的节点
2. 符合条件的节点排序

## affinity

`节点亲和性/pod亲和性` 标签匹配

node hostname 标签 : `kubernetes.io/hostname`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-affinity
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: kubernetes.io/e2e-az-name
                operator: In
                values:
                  - e2e-az1
                  - e2e-az2
      preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 1
          preference:
            matchExpressions:
              - key: another-node-label-key
                operator: In
                values:
                  - another-node-label-value
  containers:
    - name: with-node-affinity
      image: k8s.gcr.io/pause:2.0
```

## taint/toleration

`污点/容忍`

k=v(可以为空):effect(noschedule prefernoschedule noExecute)

`kubectl taint ndoes xxx k=v:effect`

```yaml
tolerations:
  - key: "xxx"
    operator: "Equal"
    value: "xxxx"
    effect: "NoSchedule"
    tolerationSeconds: 7200
```

## 指定节点

```yaml
spec:
  nodeName: "xxx"
---
spec:
  nodeSelector:
    key: value # label
```
