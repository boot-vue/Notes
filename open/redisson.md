# Redisson

嘿嘿嘿


## Redis

```bash
redis-cli > info clients
redis-cli > client list
redis-cli > config get timeout

1) "timeout"
2) "0" #0表示不开启空闲清除
设置空闲清理时间

redis-cli > config set timeout 600
```