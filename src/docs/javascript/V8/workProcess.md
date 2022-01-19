---
categories:
 - 前端
---

# V8 引擎的工作流程

## **V8是什么**

在深入了解一件事物之前， 我们需要知道它是什么

`v8`是一个由`Google`开源的采用`C++`编写的高性能`JavaScript`和`WebAssembly`引擎，应用在`Chrome`和`Node.js` 等中。它实现了`ECMAScript` 和`WebAssembly`， 运行在`windows7`及以上、`macOS 10.12+` 以及使用`x64、IA-32、ARM`或`MIPS`处理器的`linux`系统上。

V8可以独立运行，也可以嵌入到任何`c++`应用程序中

## V8 由来

`V8`最初是由`Lars Bak`团队开发的，以汽车的V8发动机（有八个气缸的V型发动机）进行命名，预示着这将是一款性能极高的`JavaScrip`t引擎，在2008年9月2号同`chrome`一同开源发布。

## 为什么需要V8

我们写的`JavaScript`代码最终是要在机器中被执行的，但机器无法直接识别这些高级语言。需要经过一系列的处理，将高级语言转换成机器可以识别的的指令，也就是二进制码，交给机器执行。这中间的转换过程就是`V8`的具体工作。

## V8组成

首先来看一下`V8`的内部组成。`V8`的内部有很多模块，其中最重要的4个如下：

- **Parser**: 解析器，负责将源代码解析成`AST`，词法分析 和 语法分析
- **Ignition**: 解释器，负责将`AST`转换成字节码并执行，同时会标记热点代码
- **TurboFan**: 编译器，负责将热点代码编译成机器码并执行（JIT）
- **Orinoco**: 垃圾回收器，负责进行内存空间回收

## V8执行JS代码的过程

V8执行Js代码的整体流程如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a95d98fa-d851-48c3-9e49-f5ec4ad2f353/Untitled.png)

JavaScript本质上是一种解释型语言，与编译型语言不同的是它需要一遍执行一边解析，而编译型语言在执行时已经完成编译，可直接执行，有更快的执行速度。

**1.Parser生成抽象语法树**

在获取到代码文件后，Parser就会开始并行在单独的线程上解析代码。这意味着解析可以在下载完成后仅几毫秒内完成，并生成AST。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e14a937-7f6b-4c62-a5f9-797028462b4b/Untitled.png)

从图中可以看出解析后的AST是把代码结构化成树状结构表示的，这样做是为了更好的让编译器或者解释器理解。

1. 词法分析（lexical analysis）：主要是将字符流（char stream） 转换成标记流（token stream），字符流就是我们一行一行的代码，token是指语法上不能再分的、最小的单个字符或者字符串。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/961207e1-149c-4360-9cee-aff827ed15f3/Untitled.png)
    

```jsx
var name = "ivweb"
//转成token后为

[
    {
        "type": "Keyword",
        "value": "var"
    },
    {
        "type": "Identifier",
        "value": "name"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "String",
        "value": "\"ivweb\""
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]
```

从上面可以看出，var name = "ivweb"; 这样一段代码，会有关键字"var"、标识符"name"、赋值运算符"="、字符串"ivweb"、分隔符";"，共5个token。

b. 语法分析：将前面生成的token流根据语法规则，形成一个有元素层级嵌套的语法规则树，这个树就是AST。在此过程中，如果源代码不符合语法规则，则会终止，并抛出“语法错误”。

1. **Ignition生成字节码**
    
    
    Ignition解释器负责将AST转换成字节码（Bytecode）并执行。字节码是介于AST和机器码之间的一种代码，与特定类型的机器代码无关，需要通过解释器转换成机器码才可以执行。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be83d3d2-0349-44a9-925b-ed38d64aab07/Untitled.png)
    

> 看到这里想必大家都有疑惑，既然字节码也需要转换成机器码才能运行，那一开始为什么不直接将AST转换成机器码直接运行呢？转换成机器码直接运行速度肯定更快，那为什么还要加一个中间过程呢？
> 

其实在`V8`的`5.9`版本之前是没有字节码的，而是直接将JS代码编译成机器码并将机器码存储到内存中，这样就占用了大量的内存，而早期的手机内存都不高，过度的占用会导致手机性能大大的下降；而且直接编译成机器码导致编译时间长，启动速度慢；再者直接将JS代码转换成机器码需要针对不同的`CPU`架构编写不同的指令集，复杂度很高。

`5.9`版本以后引入了字节码，可以解决上述内存占用大、启动时间长、代码复杂度高这几个问题。

下图是Ignition解释器的工作流程图。AST需要先通过字节码生成器，再经过一系列的优化之后才能生成字节码。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2f1dbaa-6c83-479c-b582-79c74c5ab186/Untitled.png)

通过上图可以看出，Ignition把前一步得到的AST通过字节码生成器经过一些列的优化生成字节码。在这个过程中：

- **Register Optimizer：** 主要是避免寄存器不必要的加载和存储；
- **Peephole Optimizer：** 寻找直接码中可以复用的部分，并进行合并；
- **Dead-code Elimination：** 删除无用的代码，减少字节码的大小

通过上面三个过程的优化进一步减小字节码的大小并提高性能，最后Ignition执行优化后的字节码。

1. **执行代码及优化**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e700585f-32ff-4dd2-9256-39c8f2645e36/Untitled.png)

Ignition执行上一步生成的字节码，并记录代码运行的次数等信息，如果同一段代码执行了很多次，就会被标记为**“HotSpot”（热点代码）**，然后把这段代码发送给**编译器TurboFan**，然后TurboFan把它编译为更高效的机器码储存起来，等到下次再执行到这段代码时，就会用现在的机器码替换原来的字节码进行执行，这样大大提升了代码的执行效率。

当一段代码不再是热点代码后，`TurboFan`会进行去优化的过程，将优化编译后的机器码还原成字节码，将代码的执行权利交还给`Ignition`。

### 总结:

现在我们来总结一下V8的执行过程：

1. 源代码经过`Parser`解析器，经过词法分析和语法分析生成`AST`
2. `AST`经过`Ignition`解释器生成字节码并执行
3. 在执行过程中，如果发现热点代码，将热点代码交给`TurboFan`编译器生成机器码并执行
4. 如果热点代码不再满足要求，进行去优化处理

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/035c64fb-6f77-46dd-b2cd-f2fa71de9cc8/Untitled.png)

这种字节码与解释器和编译器结合的技术，就是我们通常所说的即时编译(JIT)。