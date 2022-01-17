---
title: 对象
date: 2019-04-09
tags:
- javascript
---

# Object

#### Object.defineProperty(obj, prop, descriptor)

`Object.defineProperty(obj, prop, descriptor)`:该方法用于给对象上定义一个新属性，或者修改该对象上的现有属性，并返回该对象。此方法一共有3个参数，第一个参数是目标对象的。第二个参数是需要定义或者修改的属性名。第三个参数是定义或者修改属性的描述符（descriptor）及具体的修改规则。

```javascript
  const person = {
    name: "张山",
    age:10
  }

  Object.defineProperty(person, "age", {
    writable: true
  })

```

* `configurable`: 如果该属性是 configurable:true，就可以使用Object.defineProperty(··)来修改描述符, 为false 时, 则不可用`delete` 删除 

```javascript
delete person.age   //无效
```
* `writable`: 决定了是否可以修改属性的值 , true 可修改, false: 不可修改
* `enumerable`: 决定了该属性是否可枚举。没什么说的，设置为false，for in循环无法遍历这个属性。

#### Object.freeze(obj)

`Object.freeze(obj)`:该方法是用来冻结一个对象，也就是阻止添加新属性; 防止现有属性被删除; 并防止现有属性或其可枚举性，可配置性或可写性更改。该方法返回冻结状态下的对象。该方法期待一个为对象的参数。
其实这个方法相当于对当前对象调用Object.seal()并且将所有的'数据访问'属性标记为`writable:false` `configurable:false`。

#### Object.seal(obj)

`Object.seal(obj)`:该方法创建一个密封的对象，实际上是对该对象调用`Object.preventExtensions(··)`并把所有现有属性标记为`configurable:false`。

#### Object.preventExtensions(obj)

`Object.preventExtensions(obj)`：如果你想禁止一个对象添加新属性并且保留自己的已有属性，就可以使用该方法。