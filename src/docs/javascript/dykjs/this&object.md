---
title: 'this和对象原型'
---

## this 的常见误区

### 误区一：指向自身

```javascript
  function foo(num){
    console.log( "foo: " + num );
    // 记录 foo 被调用的次数 
    this.count++;
  }

  foo.count = 0

  for(var i=0; i < 10; i++){
    if(i > 5){
      foo(i)
      // 使用 call(..) 可以确保 this 指向函数对象 foo 本身(显示指定作用域)
      //foo.call(foo, i)
    } 
  }

  // foo: 6 
  // foo: 7 
  // foo: 8 
  // foo: 9

  console.log(foo.count) // 0 WTF?

```

### 误区二：指向它的作用域

这是第二种常见的误解，this指向函数的作用域。 这个问题有点复杂，因为某种情况下他是正确的的，在其他情况下时错误的。

需要明确的是 this 任何情况下都不指向函数的词法作用域。

```javascript
function foo(){
  var a = 2;
  this.bar()
}

function bar(){
  console.log(this.a)
}

foo() // ReferenceError: a is not defined

```
在严格模式下 <code>this.bar()</code> 也是报错。

## this 的全面解析

要知道this指向谁，需要找到它的调用位置, 要找到真正的调用位置, 最重要的是分析其调用栈


### 绑定规则

#### 默认绑定

```javascript
function foo(){
  console.log(this.a) // 默认绑定到全局对象
}
var a= 2
foo()
```
严格默认模式下无法使用默认绑定,此时<code>this</code>的值为<code>undefined</code>

#### 隐式绑定

```javascript

var a = 3
function foo(){
  console.log(this.a) 
}
var obj ={
  a:2,
  foo
}

obj.foo() // 隐式绑定 2
foo() // 默认绑定 3

```
对象属性引用链中只有最顶层或者说最后一层会影响调用位置, 如下例子

```javascript

var a = 3
function foo(){
  console.log(this.a) 
}
var obj1 ={
  a:2,
  foo
}

var obj2 = {
  a:4,
  obj1
}

obj1.foo() // 单层调用链 2
obj2.obj1.foo() // 多层调用链 2

```

隐式丢失

```javascript

var a = 'global

function foo(){
  console.log(this.a)
}

var obj={
  a:2,
  foo
}

var bar = obj.foo //函数别名
bar() // global

```

参数传递也是一种隐式赋值

```javascript

var a = 'global'

function foo(){
  console.log(this.a)
}

var obj={
  a:2,
  foo
}

function doFoo(fn){
  fn()
}


var bar = obj.foo //函数别名
bar() // global
obj.foo() // 2
doFoo( obj.foo) // global

setTimeout(obj.foo, 1000) // global

```

#### 显示绑定

通过 `call` , `apply` 和 `bind` 来显示绑定

```javascript

var a = 3
function foo(){
  console.log(this.a) 
}
var obj ={
  a:2,
  foo
}

obj.foo() // 隐式绑定 2
foo() // 默认绑定 3
foo.call(obj) // 显示绑定

```

#### new绑定

使用`new`来调用函数，会自动执行下面的操作

1. 创建（或者说构造）一个全新对象
2. 这个新对象会被执行[[原型]]连接
3. 这个新对象会被绑定到函数调用的this
4. 如果函数没有返回其他对象， 那么`new`表达式中的函数会自动返回这新对象

```javascript

function foo(a){
  this.a = a
}

var bar = new foo(2)

console.log(bar.a) // 2

```

### 优先级

 显示绑定(硬绑定) > new绑定 > 隐式绑定 > 默认绑定

### 被忽略的this

如果把`null`或者`undefined`作为`this`的绑定对象传入`call`, `apply` 或者 `bind`,这些值在调用时会被忽略，实际应用默认规则