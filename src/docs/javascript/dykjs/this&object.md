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