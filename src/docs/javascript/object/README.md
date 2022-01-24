---
title: 概念
---

JavaScript中除基本类型以外的所有值皆为对象, 值得注意的是 <code>null</code> , 虽然<code>typeof null</code> 为 <code>object</code>, 但是它为基本类型。

:::tip
基本类型: <code>string</code> <code>boolean</code> <code>number</code> <code>null</code> <code>undefined</code> <code>symbol</code>
:::

在对象中（数组除外）属性名永远为字符串, <font color='green'>即便为数字也会转为字符串</font>

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