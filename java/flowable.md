# flowable

> 流程定义 ----> 流程部署 -----> 流程实例

## SpringBoot 整合

```
resource下 processes 目录下的bpmn会自动部署

详细配置参考 文档
```

开启 history 没有禁用 CMMN DMN 等等 数据库表大概这么老些

![数据库](./imgs/flowable.png)

## RepositoryService

```java
// 流程定义
 repositoryService.createProcessDefinitionQuery()
                .list().forEach(e -> {
            System.out.println(e.getId() + "  " + e.getName());
        });

// holiday01:1:e48a522f-ea8d-11ea-a043-0c5415d4c074  holiday01
```

## RuntimeService

```java
// 启动一个新的流程实例
ProcessInstance processInstance = runtimeService.startProcessInstanceById(holiday.getId());
```

## TaskService

```java
// 流程实例阶段  任务管理
List<Task> taskList = taskService.createTaskQuery()
                .processDefinitionId(holiday.getId())
                .taskAssignee("zs").list();

        taskList.forEach(e -> {
            System.out.println(e.toString());
        });

// Task[id=747da45e-ea91-11ea-9b21-0c5415d4c074, name=add form]
```
