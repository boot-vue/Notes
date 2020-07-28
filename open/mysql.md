# MySQL ☢️

## 主从同步

主节点:

配置文件:

```
server_id=1  唯一
log-bin=mysql-log
binlog-ignore-db=mysql  忽略同步
binlog-ignore-db=test

binlog-do-db=xxx  要同步的数据库

binlog_format=STATEMENT  binlog格式
```

statement :记录写操作
row: 记录每一行数据变化
mixed: 自动选择

> 创建一个用户, 赋予 replaction slave 权限

> CHANGE MASTER TO MASTER_DELAY = 1800；单位为秒   延迟从库同步时间

> show master status;

从节点:

配置文件

```
server-id=2


relay-log=mysql-relay

log-bin=xxx

master-hoet=1.1.1.1 主节点
master-user=xxx
master-password=cccc
master-port=3306

replicate-do-db=xxx  可以不指定
replicate-do-db=xxx

replicate-ignore-db=xxx
```

> stop slave;

> reset master;

> show slave status;

> stop slave sql_thread; start slave sql_thread;

## MySQL 分区

1. range: 给定一个连续区间的范围值进行分区

```sql
-- 语法
create table <table> (
    // 字段
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1
partition by range (分区字段) (
  partition <分区名称> values less than (Value),
  partition <分区名称> values less than (Value),
  ...
  partition <分区名称> values less than maxvalue
);
```

2. list: 设置若干个固定值进行分区，如果某个字段的值在这个设置的值列表中就会被分配到该分区

```sql
-- 语法
create table <table> (
    // 字段
) ENGINE=数据库引擎  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1
partition by LIST (分区字段或者基于该字段的返回的整数值的表达式) (
  partition <分区名称> values IN (Value1，Value2, Value3),
  ...
  partition <分区名称> values IN (Value4, Value5),
);
```

3. columns 分区: columns 分区分为 range columns 和 list columns 两种，支持整数(tinyint 到 bigint， 不支持 decimal 和 float)、日期(date、datetime)、字符串(char、varchar、binary、varbinary)三大数据类型

```sql
partition by range columns(a, b) (
   partition p01 values less than (0, 10),
   partition p02 values less than (10, 10),
   partition p03 values less than (10, 20),
   partition p04 values less than (10, 35),
   partition p05 values less than (10, maxvalue),
   partition p06 values less than (maxvalue, maxvalue),
);
```

4. hash 分区: 对分区键应用一个散列函数，以此确定数据应当放在 N 个分区中的哪个分区

```sql
-- HASH
create table <table> (
    // 字段
) ENGINE=innodb  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1
PARTITION BY HASH(expr)
PARTITIONS <num>;
```

5. key 分区: key 分区不允许使用用于自定义的表达式，需要使用 mysql 服务器提供的 hash 函数，同时 hash 分区只支持整数分区，而 key 分区支持使用 blob or text 类型外的其他类型的列作为分区键

```sql
partition by key(expr) partitions num;

-- 不指定默认首选主键作为分区键，在没有主键的情况下会选择非空唯一键作为分区键
partition by key() partitions num;

-- linear key
partition by linear key(expr)
```

## PXC 同步

pecona 只支持 innodb 引擎 数据强一致性 实时同步数据

pxc 集群启动时 要从最后一个退出的节点启动, 最后退出的节点会被标记为主节点, `grastate.dat` 文件 safe_to_bootstrap=1 表示这个节点是最后退出的节点, 要作为主节点启动 文件位置在 mysql data 目录

> pxc 5.7.21 ,高版本有问题,待研究

主节点容器:

```bash
docker run -d -p xxx:3306 \
-e MYSQL_ROOT_PASSWORD=root \
-e CLUSTER_NAME=master \
-e XTRABACKUP_PASSWORD=root \
-v xxx:/var/lib/mysql --privileged \
--name=node1 --net=xxxx pxc
```

从节点容器:

```bash
docker run -d -p xxx:3306 -e MYSQL_PASSWORD=root \
-e CLUSTER_NAME=master \
-e XTARBACKUP_PASSWORD=root \
-e CLUSTER_JOIN=node1 \
-v xxx:/var/lib/mysql --privileged \
--name=node2 --net=xxx pxc
```

数据分片, 数据切分到不同的 pxc 集群上

## MyCat

> 听说 2.0 用 yml?

`server.xml`
配置 mycat 虚拟用户与数据库, 可以配置多个

pxc 只需要负载均衡 replication 需要读写分离

```xml
<mycat:server>
  <user name="admin" defaultAccount="true">
    <property name="password">admin</property>
    <property name="schemas">mycat</property>
  </user>
</mycat:server>
```

`schema.xml`

```xml
<dataHost name="mycat" maxCon="2000" minCon="100"
balance="0" writeType="1" dbType="mysql" dbDriver="native"
switchType="1" slaveThreshold="100">
  <heartbeat>select 1</heartbeat>
  <!--节点-->
  <writeHost host="xx" url="xxx:3306" user="root" password="root">
    <!--readHost balance需要为3-->
  </writeHost>
</dataHost>
```

`dataNode` 指定 mycat 使用的数据库

`schema` 指定虚拟库, `table` 指定切分的表

`rule.xml`

分片规则

## Percona

### XtraBackup

## ShardingSphere

## 字符集

```bash
[mysqld]
pid-file	= /var/run/mysqld/mysqld.pid
socket		= /var/run/mysqld/mysqld.sock
datadir		= /var/lib/mysql
#log-error	= /var/log/mysql/error.log
# By default we only accept connections from localhost
#bind-address	= 127.0.0.1
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
character-set-server=utf8mb4
collation-server=utf8mb4_general_ci
max_connections=1000

[client]
default-character-set=utf8mb4
default-collation=utf8mb4_general_ci

```
