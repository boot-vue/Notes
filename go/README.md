# GoLang 🦔

## time

> 2006-01-02 15:04:05

## IO

```go
os filepath path buferio ioutil
Reader Writer
```

## Goroutine

> go test()

<code>runtime sync</code>

互斥锁 读写锁 waitgroup

## Channel

> var xx chan int , xx=make(chan int)

> xx <- data , data,ok := <- xx

发送方可以关闭通道 close(xx)

```go
for n:= range cc{
    ...
}
```

## grpc

> protoc -I proto/ protp/helloworld.proto --go_out=plugins=grpc:proto

你猜这是什么意思
