---
title: babel
---

Babel是代码转换器，比如将ES6转成ES5，或者将JSX转成JS等。借助Babel，开发者可以提前用上新的JS特性，这对生产力的提升大有帮助。

## Babel Plugin

实现Babel代码转换功能的核心，就是Babel插件（plugin）。

`原始代码 --> [Babel Plugin] --> 转换后的代码`


## Babel Preset

 `preset` 是一系列 `babel plugin` 的集合


## Plugin与Preset执行顺序

可以同时使用多个Plugin和Preset，此时，它们的执行顺序非常重要。

1. 先执行完所有Plugin，再执行Preset。
2. 多个Plugin，按照声明次序顺序执行。
3. 多个Preset，按照声明次序逆序执行。


```json
{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}