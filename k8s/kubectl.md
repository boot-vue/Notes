# kubectl

`kubectl` create 与 apply : apply 更新 create 新建,已存在报错

`kubectl get pods -o wide -n xkube-system` : namespace

`kubectl logs xxxxx -n kube-system`: 查看某个 pod 日志

`kubectl describe pod xxxx -n kube-system`:查看 pod 详细信息

`kubectl get svc/deploy/secrets/pods -n xxxx -o yanl`
