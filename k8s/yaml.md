# yaml 配置

## version

`必须有` `apps/v1` `kubectl api-versions`

## kind

资源类型:`Pod` `Deployment`等

## metadata

- name
- namespace 默认 default
- labels

## spec

资源详细信息

- initContainers: init 容器,依次启动
- containers : 容器集合

  - name
  - image
  - imagePullPolicy:always never ifnotpresent
  - command: 容器启动命令
  - args
  - workingDir
  - volumeMounts: 存储卷, name path 等等
  - ports: 端口集合
    - name: 端口名称
    - containerPort: 容器监听端口
    - hostPort: 主机监听端口,默认与 containerPort 一致
    - protocol: tcp/udp
  - env: 环境变量
  - resources: 资源限制

- restartPolicy: pod 重启策略 always onfailure never
- nodeSelector: k/v 标签, node 过滤标签
- imagePullSecrets: pull image 时的 secret
- hostNetwork: 是否使用宿主机网络 默认 false
