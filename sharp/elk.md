# ELK

## 增删改查

> 7 之后的版本无需指定 type : /{index}/\_doc/{id}, /{index}/\_doc, or /{index}/\_create/{id}

```bash

PUT /demo
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}

# 查询过滤字段
GET /demo/_doc/{id}?_source=name,age

# put 需要指定 id(已存在, 会覆盖数据)    post : elastic自动生成id
PUT /demo/_doc/1
{
  "name":"张三",
  "age":20,
  "sex":0
}

# post 可以指定修改哪些字段

POST /demo/_update/1
{
 "doc":{
   "name":"李四"
 }
}


# 删除
DELETE /{index}/_doc/{id}

```

示例:

```json
{
  "_index" : "demo",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 3,
  "_seq_no" : 2,
  "_primary_term" : 1,
  "found" : true,
  "_source" : {
    "name" : "张三",
    "age" : 20,
    "sex" : 0
  }
}


{
  "demo" : {
    "aliases" : { },
    "mappings" : {
      "properties" : {
        "age" : {
          "type" : "long"
        },
        "name" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "sex" : {
          "type" : "long"
        }
      }
    },
    "settings" : {
      "index" : {
        "creation_date" : "1583412394789",
        "number_of_shards" : "1",
        "number_of_replicas" : "0",
        "uuid" : "xGN8ZeQRTlqBUg65FSDXag",
        "version" : {
          "created" : "7060199"
        },
        "provided_name" : "demo"
      }
    }
  }
}

```

## 批量处理

1. 批量查询 : \_mget
2. 批量增删改: \_bulk

```bash
    {action: {metadata}}
    {requestbody}
```

## 版本控制

> 乐观锁 修改数据指定\_version=xx , 与当前 index version 版本不一致修改会失败
> 修改成功 index 的 version 自动+1 , 如果又指定了 version_type=external, 那么\_version 要比当前版本号大才会修改成功

## mapping

> 字段对应的类型

## Filebeat

> input-->filter--->output modules
```bash
filebeat modules list
filebeat modules enable xxxx
# 模块配置文件 modeule.d/xxx.yml
```

## Logstash

> input-->filter--->output
