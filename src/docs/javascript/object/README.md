---
title: 概念
---

JavaScript中除基本类型以外的所有值皆为对象, 值得注意的是 <code>null</code> , 虽然<code>typeof null</code> 为 <code>object</code>, 但是它为基本类型。

:::tip
基本类型: <code>string</code> <code>boolean</code> <code>number</code> <code>null</code> <code>undefined</code> <code>symbol</code>
:::

:::tip
内置对象: <code>String</code> <code>Number</code> <code>Boolean</code> <code>Object</code> <code>Function</code> <code>Array</code> <code>Date</code> <code>RegExp</code> <code>Error</code>
:::

除数组外，其他所有对象的属性名永远为<font color='red'>字符串</font>, 即便赋值时为数字也会转为字符串。

String Number Boolean 与 string boolean number 之间存在隐式转换
```javascript
var str = 'hello'
console.log(str.length) // 5
console.log(str.charAt(3)) // l
```
使用以上两种方法，我们都可以直接在字符串字面量上访问属性或者方法，之所以可以这 样做，是因为引擎自动把字面量转换成 String 对象，所以可以访问属性和方法。
## 几种声明方式

```javascript
//文字形式
var obj1 = {
  key: value
  //...
} 
//构造形式
var obj2 = new Object() 
obj2.key = value

var obj3 = Object.create({
  key: value
  //...
}) 

```