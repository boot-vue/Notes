# Kotlin 🍓

```kotlin
fun var Array<T>
val: 常量
类型推断
```

## String

模板字符串: <code>""" \${xxx}</code>

> trimMargin()

## class

> private、 protected、 internal 和 public

```kotlin

class Person constructor(firstName: String) { /*……*/ }
class Person(firstName: String) { /*……*/ }
class Customer public @Inject constructor(name: String) { /*……*/ }

// init初始代码块
class InitOrderDemo(name: String) {
    val firstProperty = "First property: $name".also(::println)

    init {
        println("First initializer block that prints ${name}")
    }

    val secondProperty = "Second property: ${name.length}".also(::println)

    init {
        println("Second initializer block that prints ${name.length}")
    }
}
```
