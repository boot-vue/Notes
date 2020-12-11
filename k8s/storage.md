# 存储

## config map

k:文件名 v:文件内容

```
kubectl create configmap xxx --from-file=/xxxx --from-liberal=kk=vv
```

## secret

- service account: 访问 k8s api, 默认挂载到 pod 的`/run/secrets/kubernets.io/serviceaccount/`中
- opaque: base64 编码
- docker config json: 用于 registry 认证

## volume

- emptyDir :暂存,删光 pod 就没了
- hostPath: 挂载主机目录

## pv/pvc

- 回收策略
- 读写策略

statefulset/deployment--->pvc 模板---->选择符合条件的 pv
