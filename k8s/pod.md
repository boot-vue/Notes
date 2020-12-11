# pod

## 生命周期

```bash
pause启动(完成网络与volume初始化)
init初始化(依次,上一个成功才开始下一个)  start(postStart)  run  stop(preStop)   readines:就绪检测 liveness: 存活检测

init初始化失败,会按照容器重启策略重启

正在初始化的状态为pending

initContainers name不能重复
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
    - name: myapp-container
      image: busybox
      command: ["sh", "-c", "echo The app is running! && sleep 3600"]
  initContainers:
    - name: init-myservice
      image: busybox
      command:
        [
          "sh",
          "-c",
          "until nslookup myservice; do echo waiting for myservice; sleep 2; done;",
        ]
    - name: init-mydb
      image: busybox
      command:
        [
          "sh",
          "-c",
          "until nslookup mydb; do echo waiting for mydb; sleep 2; done;",
        ]
```

## 状态检测

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: readiness
  name: readiness-http
spec:
  containers:
    - name: readiness-http
      image: nginx
      ports:
        - name: http
          containerPort: 80
      readinessProbe:
        httpGet:
          path: /health
          port: http
          scheme: HTTP
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: liveness
  name: liveness-http
spec:
  containers:
    - name: liveness-http
      image: nginx
      ports:
        - name: http
          containerPort: 80
      lifecycle:
        postStart:
          exec:
            command:
              [
                "/bin/sh",
                "-c",
                "echo liveness-http test > /usr/share/nginx/html/health",
              ]
      livenessProbe:
        httpGet:
          path: /health
          port: http
          scheme: HTTP
```

## 类型

`自主pod`:退出了就拉倒
`控制器管理的pod`:按控制器策略创建
