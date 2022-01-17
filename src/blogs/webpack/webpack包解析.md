### chalk

给日志文字添加文字   

![img](https://camo.githubusercontent.com/036b5e5ae84937a17ce0a1a424aeb6f7eb23863f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6368616c6b2f616e73692d7374796c657340383236313639376339356266333462366337373637653263626539393431613835316435393338352f73637265656e73686f742e737667)



```javascript
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));`
```

### ora

控制台loading加载 动画 , github: <https://github.com/sindresorhus/ora>

![img](https://github.com/sindresorhus/ora/raw/master/screenshot.svg?sanitize=true)

$ npm install ora

```javascript
const ora = require('ora');
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

### rimraf

> A `rm -rf` util for nodejs
>
> API rimraf(f, [opts], callback)