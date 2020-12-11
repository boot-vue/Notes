# Helm

> 包管理工具, heml3 移除了 tiller

## chart

应用信息集合,各种配置

## release

chart 的实例

## 自定义 chart

1. `Chart.yaml`

```yaml
# name version必须有
name: xxxx
version: 1.0.0
```

2. 创建 k8s yaml 文件

`./templates/deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
#  ...
```

`./templates/service.yaml`

```yaml
# service yaml配置
```

3. 启动

```bash
helm create xxx  # 创建chart目录和chart用到的公共文件目录结构

helm lint xxx   # 检查配置

helm install --set name=xxx .

helm install -n xxx -namespace vvv .

helm list

helm upgrade xxxx
```

## Values

`valuse.yaml` 定义变量信息

```yaml
xxx: test
```

`k8s.yaml`中引用: {{<code>.Values.xxx</code>}}
