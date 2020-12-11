# 基础概念

- 节点（Node）：一个节点是一个运行 Kubernetes 中的主机。
- 容器组（Pod）：一个 Pod 对应于由若干容器组成的一个容器组，同个组内的容器共享一个存储卷(volume)。
- 容器组生命周期（pos-states）：包含所有容器状态集合，包括容器组状态类型，容器组生命周期，事件，重启策略，以及 replication controllers。
- Replication Controllers：主要负责指定数量的 pod 在同一时间一起运行 废弃
- 服务（services）：一个 Kubernetes 服务是容器组逻辑的高级抽象，同时也对外提供访问容器组的策略。
- 卷（volumes）：一个卷就是一个目录，容器对其有访问权限。
- 标签（labels）：标签是用来连接一组对象的，比如容器组。标签可以被用来组织和选择子对象。
- 接口权限（accessing_the_api）：端口，IP 地址和代理的防火墙规则。
- web 界面（ux）：用户可以通过 web 界面操作 Kubernetes。
- 命令行操作（cli）：kubectl 命令。

# kubeadm 引导集群

> image registry: `registry.aliyuncs.com/google_containers`

> 1master 2 node

| Node           | role                 |
| -------------- | -------------------- |
| 192.168.100.80 | control-plane,master |
| 192.168.100.81 | worker               |
| 192.168.100.82 | worker               |

## 初始化集群

1. 安装`kubeadm` `kubelet` `kubectl` , `kubelet`设为自启动
2. `kubeadm` 初始化`control-plane` `etcd`

```bash
kubeadm config print init-defaults > k8s.yaml
```

```yaml
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
  - groups:
      - system:bootstrappers:kubeadm:default-node-token
    token: abcdef.0123456789abcdef
    ttl: 24h0m0s
    usages:
      - signing
      - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.100.80
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: master
  taints:
    - effect: NoSchedule
      key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: k8s.gcr.io
kind: ClusterConfiguration
kubernetesVersion: v1.20.0
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
  podSubnet: 10.244.0.0/16
scheduler: {}
```

3. 下载必要的组件

```bash
kubeadm config images list --config ./k8s.yaml


# k8s.gcr.io/kube-apiserver:v1.20.0
# k8s.gcr.io/kube-controller-manager:v1.20.0
# k8s.gcr.io/kube-scheduler:v1.20.0
# k8s.gcr.io/kube-proxy:v1.20.0
# k8s.gcr.io/pause:3.2
# k8s.gcr.io/etcd:3.4.13-0
# k8s.gcr.io/coredns:1.7.0


kubeadm config images pull --config ./k8s.yaml
```

4. 初始化`control-plane`

```bash
kubeadm init --config ./k8s.yaml

#  其他节点最后加入
sudo kubeadm join 192.168.100.80:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:8a8e18afb8aaa05d35305bd7d65e50542d5673032fcb0988089a298fe330cea3

```

5. 环境变量

```bash
# 非 root 用户使 `kubectl` 命令   admin.conf从control-plane节点同步到其它worker节点
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

# root用户

  export KUBECONFIG=/etc/kubernetes/admin.conf

```

6. 集群 pod 网关通信组件

> 第三方有多种实现

[flannel](https://github.com/coreos/flannel)

```bash
# 集群主节点执行即可
kubectl apply -f flannel.yaml  # 镜像需要拉取
```

## dashboard

[dashboard](https://github.com/kubernetes/dashboard/)

```bash
# port需要开放
kubectl edit services kubernetes-dashboard -n kubernetes-dashboard

# type: NodePort
```

## 高可用集群

上云吧
