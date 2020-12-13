# K8S 📘

[YAML 配置](https://k8syaml.com/)

[k8s 文档](https://kubernetes.io/zh/)

[rancher 文档](https://docs.rancher.cn/rancher2/)

`docker配置`

```json
{
  "registry-mirrors": ["https://你猜z4rhze.mirror.aliyuncs.com"],
  "log-driver": "json-file",
  "log-opts": { "max-size": "500m", "max-file": "3" },
  "exec-opts": ["native.cgroupdriver=systemd"]
}
```

`/etc/systemd/system/docker.service.d/http-proxy.conf`

```
[Service]
Environment="HTTP_PROXY=http://192.168.100.1:5081/"
Environment="HTTPS_PROXY=http://192.168.100.1:5081/"
Environment="NO_PROXY=localhost,127.0.0.1,你猜z4rhze.mirror.aliyuncs.com,registry.aliyuncs.com"
```
