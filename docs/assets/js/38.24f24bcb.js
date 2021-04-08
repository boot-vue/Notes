(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{411:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("p",[t._v("乱七八糟 💣💣💣")]),t._v(" "),a("h2",{attrs:{id:"systemctl-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-服务"}},[t._v("#")]),t._v(" systemctl 服务")]),t._v(" "),a("blockquote",[a("p",[t._v("/usr/lib/systemd/下, 开机不登录就能启动的服务最好放在 /usr/lib/systemd/system 系统服务, .../user: 用户服务 需要用户登录才可以启动")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [Unit]、[Service]和[Install]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主要是服务说明")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("test   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简单描述服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 描述服务类别，表示本服务需要在network服务启动后在启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Before")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx.service      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示需要在某些服务启动之前启动，After和Before字段只涉及启动顺序，不涉及依赖关系")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 核心区域")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("forking     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示后台运行模式。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置服务运行的用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置服务运行的用户组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("control-group   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义systemd如何停止服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PIDFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/test/test.pid    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存放PID的绝对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义服务进程退出后，systemd的重启方式，默认是不重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/test/bin/startup.sh    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务启动命令，命令需要绝对路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/xxxxx\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/xxxxx\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示给服务分配独立的临时空间")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多用户")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Type的类型有：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    simple(默认）：# 以ExecStart字段启动的进程为主进程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    forking:  # ExecStart字段以fork()方式启动，此时父进程将退出，子进程将成为主进程（后台运行）。一般都设置为forking")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    oneshot:  # 类似于simple，但只执行一次，systemd会等它执行完，才启动其他服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    dbus：    # 类似于simple, 但会等待D-Bus信号后启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    notify:   # 类似于simple, 启动结束后会发出通知信号，然后systemd再启动其他服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    idle：    # 类似于simple，但是要等到其他任务都执行完，才会启动该服务。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#EnvironmentFile:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    指定配置文件，和连词号组合使用，可以避免配置文件不存在的异常。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Environment:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    后面接多个不同的shell变量。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    例如：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    Environment=DATA_DIR=/data/elk")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    Environment=LOG_DIR=/var/log/elasticsearch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    Environment=PID_DIR=/var/run/elasticsearch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    EnvironmentFile=-/etc/sysconfig/elasticsearch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连词号（-）：在所有启动设置之前，添加的变量字段，都可以加上连词号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    表示抑制错误，即发生错误时，不影响其他命令的执行。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    比如`EnviromentFile=-/etc/sysconfig/xxx` 表示即使文件不存在，也不会抛异常")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#KillMode的类型：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    control-group(默认)：# 当前控制组里的所有子进程，都会被杀掉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    process: # 只杀主进程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    mixed:   # 主进程将收到SIGTERM信号，子进程收到SIGKILL信号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    none:    # 没有进程会被杀掉，只是执行服务的stop命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Restart的类型：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    no(默认值)： # 退出后无操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    on-success:  # 只有正常退出时（退出状态码为0）,才会重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    on-failure:  # 非正常退出时，重启，包括被信号终止和超时等")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    on-abnormal: # 只有被信号终止或超时，才会重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    on-abort:    # 只有在收到没有捕捉到的信号终止时，才会重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    on-watchdog: # 超时退出时，才会重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    always:      # 不管什么退出原因，都会重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    # 对于守护进程，推荐用on-failure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#RestartSec字段：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    表示systemd重启服务之前，需要等待的秒数：RestartSec: 30")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#各种Exec*字段：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    # Exec* 后面接的命令，仅接受“指令 参数 参数..”格式，不能接受<>|&等特殊字符，很多bash语法也不支持。如果想支持bash语法，需要设置Tyep=oneshot")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecStart：    # 启动服务时执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecReload：   # 重启服务时执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecStop：     # 停止服务时执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecStartPre： # 启动服务前执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecStartPost：# 启动服务后执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    ExecStopPost： # 停止服务后执行的命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#WantedBy字段：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    multi-user.target: # 表示多用户命令行状态，这个设置很重要")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    graphical.target:  # 表示图形用户状体，它依赖于multi-user.target")]),t._v("\n")])])]),a("h2",{attrs:{id:"并发编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发编程"}},[t._v("#")]),t._v(" 并发编程")]),t._v(" "),a("p",[a("code",[t._v("Executors")]),t._v(" 线程池 "),a("code",[t._v("newFixedThreadPool")]),t._v(" "),a("code",[t._v("newCachedThreadPool")]),t._v(" "),a("code",[t._v("newSingleThreadExecutor")]),t._v(" "),a("code",[t._v("newScheduledThreadPool")]),t._v(", 最好通过"),a("code",[t._v("ThreadPoolExecutor")]),t._v("创建线程池")]),t._v(" "),a("p",[t._v("方法: "),a("code",[t._v("execute(Runable)")]),t._v(" "),a("code",[t._v("shutdown()")]),t._v(" "),a("code",[t._v("Future<T> submit(Callable)")])]),t._v(" "),a("p",[a("code",[t._v("Future")]),t._v(" 方法"),a("code",[t._v("isDone()")]),t._v("判断任务是否执行完成, "),a("code",[t._v("get()")]),t._v("获取结果 "),a("code",[t._v("cancel()")]),t._v("取消任务")]),t._v(" "),a("h2",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),a("p",[a("code",[t._v("Function")]),t._v(": apply andThen\n"),a("code",[t._v("Consumer")]),t._v(": accept 方法\n"),a("code",[t._v("Predicate")]),t._v(" test 方法\n"),a("code",[t._v("Supplier")]),t._v(": get 方法")]),t._v(" "),a("h2",{attrs:{id:"rabbit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbit"}},[t._v("#")]),t._v(" Rabbit")]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意:")]),t._v(" "),a("ol",[a("li",[t._v("如果不指定 exchange, 默认走 amqp default exchange, ==routing-key==与==queue==名匹配一致投递")])]),t._v(" "),a("h3",{attrs:{id:"exchange-交换机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exchange-交换机"}},[t._v("#")]),t._v(" exchange 交换机")]),t._v(" "),a("ol",[a("li",[t._v("direct: ==routing-key==必须完全匹配")]),t._v(" "),a("li",[t._v("topic: ==routing-key==模糊匹配")])]),t._v(" "),a("blockquote",[a("p",[t._v("#匹配多个词 *匹配一个词")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("fanout: ==不处==理 routing-key, exchange 与 queue 直接绑定")])]),t._v(" "),a("h3",{attrs:{id:"message-消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-消息"}},[t._v("#")]),t._v(" message 消息")]),t._v(" "),a("ol",[a("li",[t._v("可以携带 properties 属性")]),t._v(" "),a("li",[t._v("==mandotary===true, 发送端会监听到路由不到的消息, 即 returnCallback, =false 时, 路由不到的消息会被自动删除")]),t._v(" "),a("li",[t._v("发送端要处理==confirmCallback== ==returnCallback==, 配置里这两项必须设为 true")]),t._v(" "),a("li")]),t._v(" "),a("h3",{attrs:{id:"死信队列-特殊的-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#死信队列-特殊的-exchange"}},[t._v("#")]),t._v(" 死信队列(特殊的 exchange)")]),t._v(" "),a("ol",[a("li",[t._v("消息被 nack 并且 requeue=false")]),t._v(" "),a("li",[t._v("ttl 消息过期")]),t._v(" "),a("li",[t._v("队列达到最大长度")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("私信: 就是普通的exchange--"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("queue绑定\n\n业务queue 添加额外的参数: x-dead-letter-exchange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("死信交换机\n\n这样业务queue上未消费的消息就路由到了私信交换机上\n")])])]),a("h3",{attrs:{id:"消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费者"}},[t._v("#")]),t._v(" 消费者")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Consumer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RabbitListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bindings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@QueueBinding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.queue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" durable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            exchange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Exchange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.exchange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" durable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoDelete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RabbitHandler")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Channel")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"监听器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听器"}},[t._v("#")]),t._v(" 监听器")]),t._v(" "),a("ol",[a("li",[t._v("simpleMessageListenerContainer")])]),t._v(" "),a("p",[t._v("为队列添加监听事件")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("messageListenerAdapter 消息适配器")]),t._v(" "),a("p",[t._v("处理方法 可以为每个队列指定不同的处理方法")])]),t._v(" "),a("li",[a("p",[t._v("messageConvert 消息转化器 java 对象与 message 对象互转")])])]),t._v(" "),a("h3",{attrs:{id:"高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[t._v("#")]),t._v(" 高可用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("镜像队列 : 配置 1 个 Master, 多个 Slaver")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". master节点 /var/lib/rabbitmq/.erlang.cookie 拷贝到各个节点\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". 启动服务 rabbitmq-server -detached\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". 备用节点停止服务 rabbitmqctl stop_app\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". 备用节点加入到主节点集群中 rabbitmqctl join_cluster rabbit@xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hosts名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(". 备用节点启动 rabbitmqctl start_app\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(". 任意节点设置集群名 rabbitmqctl set_cluster_name xxxx\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(". 查看集群状态 rabbitmqctl cluster_status\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(". 配置镜像队列: rabbitmqctl set_policy ha-all "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"ha-mode":"all}\'')]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("haproxy: 负载均衡")])])]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("ol",[a("li",[t._v("延时插件"),a("code",[t._v("rabbitmq_delayed_message_exchange")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". /usr/lib/rabbitmq/lib/rabbitmq_serverxxx/plugins\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". rabbitmq-plugins "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" xxxx\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". 声明一个x-delayed-type类型的exchange\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". 发送消息时,消息headers需要指定x-delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xx毫秒\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"spring-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务"}},[t._v("#")]),t._v(" Spring 事务")]),t._v(" "),a("p",[t._v("隔离级别:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ISOLATION_DEFAULT\t使用后端数据库默认的隔离级别\nISOLATION_READ_UNCOMMITTED\t允许读取尚未提交的更改。可能导致脏读、幻读或不可重复读\nISOLATION_READ_COMMITTED\t允许从已经提交的并发事务读取。可防止脏读，但幻读和不可重复读仍可能会发生\nISOLATION_REPEATABLE_READ\t对相同字段的多次读取的结果是一致的，除非数据被当前事务本身改变。可防止脏读和不可重复读，但幻读仍可能发生\nISOLATION_SERIALIZABLE\t完全服从ACID的隔离级别，确保不发生脏读、不可重复读和幻读。这在所有隔离级别中也是最慢的，因为它通常是通过完全锁定当前事务所涉及的数据表来完成的, 可以加共享锁(不排他), 一个事务不释放,其它事务只能读数据\n")])])]),a("p",[t._v("传播机制:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PROPAGATION_MANDATORY\t表示该方法必须运行在一个事务中。如果当前没有事务正在发生，将抛出一个异常\nPROPAGATION_NESTED\t表示如果当前正有一个事务在进行中，则该方法应当运行在一个嵌套式事务中。被嵌套的事务可以独立于封装事务进行提交或回滚。如果封装事务不存在，行为就像PROPAGATION_REQUIRES一样。\nPROPAGATION_NEVER\t表示当前的方法不应该在一个事务中运行。如果一个事务正在进行，则会抛出一个异常。\nPROPAGATION_NOT_SUPPORTED\t表示该方法不应该在一个事务中运行。如果一个现有事务正在进行中，它将在该方法的运行期间被挂起。\nPROPAGATION_SUPPORTS\t表示当前方法不需要事务性上下文，但是如果有一个事务已经在运行的话，它也可以在这个事务里运行。\nPROPAGATION_REQUIRES_NEW\t表示当前方法必须在它自己的事务里运行。一个新的事务将被启动，而且如果有一个现有事务在运行的话，则将在这个方法运行期间被挂起。\nPROPAGATION_REQUIRES\t表示当前方法必须在一个事务中运行。如果一个现有事务正在进行中，该方法将在那个事务中运行，否则就要开始一个新事务。\n")])])]),a("h2",{attrs:{id:"springmvc-异步处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springmvc-异步处理"}},[t._v("#")]),t._v(" SpringMvc 异步处理")]),t._v(" "),a("p",[t._v("Callable 多线程模式: 主线程不会被长时间阻塞")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Callable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Callable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" callable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Callable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" callable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("DeferredResult: 接受请求---\x3e处理任务| |处理完毕--\x3e响应结果")]),t._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  必须是第一行\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("maintainer")]),t._v(" 作者信息\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("copy")]),t._v(" 拷贝文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add功能更多"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 你猜都有什么功能"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("run")]),t._v("  构建时的命令\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("expose")]),t._v("  暴露端口"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只是建议"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    实际使用时还需要手动"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p  指定端口映射\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("workdir")]),t._v(" 指定工作目录 容器启动时执行的命令会在该目录下执行\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cmd")]),t._v("  运行时命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  会被使用时容器的命令覆盖\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("entrypoint")]),t._v("  不会被容器运行时命令覆盖\n")])])]),a("blockquote",[a("p",[t._v("ADD COPY ENV EXPOSE FROM LABEL STOPSIGNAL USER VOLUME WORKDIR")])]),t._v(" "),a("ol",[a("li",[t._v("构建 docker 镜像")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker build -t tag名称 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" 指定Dockerfile所在路径\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("登录到 hub")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker login\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("推送")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),a("p",[t._v("gradle 任务: 往 nexus 发布 jar")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Maven仓库的URL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" MAVEN_REPO_RELEASE_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxxx/nexus/content/repositories/releases/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" MAVEN_REPO_SNAPSHOT_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxxxx/nexus/content/repositories/snapshots/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录nexus 的用户名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" NEXUS_USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录nexus 的密码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" NEXUS_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" ARTIFACT_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" TYPE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jar'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//description")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" DESCRIPTION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这里是描述'")]),t._v("\n\nuploadArchives "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configurations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("archives\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mavenDeployer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("snapshotRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MAVEN_REPO_SNAPSHOT_URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NEXUS_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NEXUS_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MAVEN_REPO_RELEASE_URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NEXUS_USERNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NEXUS_PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\\\Users\\\\dd\\\\.m2\\\\repository'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义本地maven仓库的地址")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\\\Users\\\\dd\\\\.gradle\\\\caches\\\\modules-2\\\\files-2.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义本地Gradle仓库的地址")]),t._v("\n            pom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                version version\n                artifactId ARTIFACT_ID\n                groupId group\n                packaging TYPE\n                description DESCRIPTION\n                licenses "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    license "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Apache Software License, Version 2.0'")]),t._v("\n                        url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.apache.org/licenses/LICENSE-2.0.txt'")]),t._v("\n                        distribution "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxx'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);