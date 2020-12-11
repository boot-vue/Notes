# kubectl

`kubectl create/apply -f xxx.yaml --record` create 与 apply : apply 更新 create 新建,已存在报错 record 记录每次变化

`kubectl get pods -o wide -n xkube-system` : namespace

`kubectl logs podName -c containerName -n kube-system`: 查看某个 pod 日志

`kubectl describe pod xxxx -n kube-system`:查看 pod 详细信息

`kubectl get/delete namespace/namespaces/ns/services/svc/deploy/secrets/pods -n xxxx -o yaml/wide` : services:svc deployment: deploy ns:namespace

`kubectl scale deployment/deployName --replicas=3` : 伸缩

`kubectl set image deployment/deployName xxx/vvv:latest`:更新 deploy 镜像

`kubectl rollout undo deployment/deployName --to-revesion=2`:回滚到某次的状态 默认上一次

`kubectl rollout status deployment/deployName`:查看回滚状态

`kubectl rollout history deployment/deployName`:查看部署历史

`kubectl explain spec.xx` : 查看 yaml 配置模板

`kubectl exit pod/svc xxx`: 编辑资源 yaml, 修改某些字段可能无效

`kubectl exec podName -c containerName -it -- /bin/bash` :进入 pod 容器内

`kubectl label pod xxx k=v --override=true`: 修改某个资源的 label

`kubectl expose deployment xxxx --port=80 --target-port=80`

- svc 绑定端口 port/对外暴露端口 target-port/容器内端口 默认一致 node-port/外部可以访问的端口
- 默认 type: ClusterIP 集群内访问 NodePort:外部可以访问

`kubectl create configmap xxx --from-file=/xxxx` :configmap

`kubectl get cm/confgmap`

`kubectl taint ndoes xxx k=v:effect`: 设置污点
