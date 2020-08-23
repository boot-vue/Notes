# Gradle

## 流程

> init --> config --(afterEvaluate)--> execution

## project

```groovy
getAllprojects()
getSubprojets()
getParent()
getRootproject()

project('p name'){Project project->
    // .... 可以指定某个project的配置  plugin group version dependencies.....
}

// root+sub project的配置
allprojects{

}

// sub project的配置
subprojects{

}

// 使用外部命令

task(name:'xxx'){
    doLast{
        def src= '....'
        def dest= '....'
        def command="mv ${src} ${dest}"
        exec{
            try{
                executable 'bash'
                args '-c',command
                println '.....'
            }catch(GradleException e){
                // ....
            }
        }
    }
}
```

### property

```groovy
// 可以写在root  project的 build.gradle配置中
// 使用 : this.xxx   this.mmm 或者 (this.rootProject.xxx)都可以
ext{
    xxx='yyy'
    mmm=12
    ooo=[
        kkkk:'pppp'
    ]
}


// 也可以把ext 属性单独放在xxx.gradle中, root project通过 apply from: this.file('xxx.gradle) 引入
// 子project: rootProject.ext.ooo.kkkk


// gradle.properties 定义   xxx=yyy
// build.gradle 直接用 xxx
```

### file

```groovy
getRootDir()
getBuildDir()
getProjectDir()

file('xxx')  // path相对于当前project
files('xxx')

copy{
    from file('xxx')
    into getRootProject().getBuildDir()
    exclude{}
    rename{}
}

fileTree('/cccc'){FileTree t->
    t.visit{FileTreeElement e->
        //  .....
        copy{ }
    }
}
```

### buildscript

```groovy
buildscript{ScriptHandler h->
    // 仓库
    h.repositories{RepositoryHandler rh->
        rh.jcenter()
        rh.mavenCentral()
        rh.mavenLocal()
        rh.maven{
            name 'xxxx'
            url 'llllllll'
            credentials{
                // .....

            }
        }
    }

    // plugin 的依赖(gradle需要的)
    // 是project 的依赖
    h.dependencies{

    }
}
```

### dependencies

```groovy
// project的依赖(项目用到的依赖)
dependencies{
    implementation // 不向上传递依赖
    api // 传递依赖
    compileOnly //不参与打包
    runtimeOnly // 运行时
    testImplementation
    debugImplementation
    releaseImplementation
}
```

## task

```groovy
task xxx(group:'xxx',description:'xxxx',type: ttt,dependsOn:[ccc,vvvv]){
  // 输入
  inputs.properties(....)

  // 输出
  outputs.file xxxx

  // 类似dependsOn
  mustRunAfter oooo
  shouldRunAfter oooo
}


task xxx{
    doLast{
        // ....
    }
}
// 等价于
task xxx << {}
```

## other

### Settings

> settings.gradle

### SourceSet

> src resources manifest 等等配置....

### Plugin

> 一组 task

```groovy
// 自定义插件
// Xxxx.groovy
class Xxxx implements Plugin<Project>{

    @Override
    void apply(Project project){  // 引入插件的时候会被调用执行
        project.extensions.create('yyInfo',YyyyExtension)  // 外部可以向插件传递参数
    }
}

// 插件参数  YyyyExtension.groovy

class YyyyExtension{
    string name;
    int age;
    string address;
}

// 插件  自定义的task
class ZzzTask extends DefaultTask{

    @TaskAction // gradle执行阶段执行
    void test(){
        // project.extensions.yyInfo.name
        // ..........
    }
}


// resources 下 xxx.properties 声明插件
implemention-class=package.Xxxx

// --------------------------------------------------
// 使用插件
apply plugin: 'package.Xxx'

yyInfo {
    name=''
    age=0
    address=''
}
```
