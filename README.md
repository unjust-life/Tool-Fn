# Tool-Fn

> 函数式编程风格的工具函数

### 这是什么仓库？干嘛用的？

> 提供常用的JavaScript函数 例如排序、比较、过滤、克隆、柯里化、时间戳转换、md5、懒加载等

> 新标准语法的Polyfill实现源码参考

> 提供各种各样功能的函数源码学习 or 工作时直接Copy代码

> 如果你有一个很有意思的想法，请提交你的code参与这个项目

> 如果你发现仓库内的函数有任何bug，可以提交Issues给仓库的作者

### 快速开始

我该如何给仓库贡献代码？

``` bash
#首先点击仓库右上角的Fork  在自己的账号下克隆一个仓库 然后打开终端输入命令 克隆你Fork的仓库
$ git clone https://github.com/这里填你的仓库地址

#克隆到本地后安装依赖(请确保你的电脑已经安装node)
$ npm install

#接下来你就可以给仓库贡献代码啦 例如你想提交一个十分好用的clone方法用于深拷贝对象

#首先在src/modules文件下新建一个文件夹 (英文驼峰格式)
$ cd src/utils        #进入utils目录    新建一个clone文件夹
$ cd clone            #进入clone文件夹  新建clone.js文件  开始编写你的代码吧(请使用es6模块语法导出)

#写完代码觉得没问题了 请执行检查命令(如果检查不通过直接进行commit 将会被阻止)

$ npm run lint  #对src目录下所有文件执行styleLint检测 提示目前存在的错误

$ npm run fix   #对src目录下所有文件执行styleLint检测 尝试自动修复错误(可以直接用这个)

检查通过后就可以提交你的代码啦 注意提交信息是有格式要求的 参照了开源社区的主流方案 具体格式在下面

提交完毕后就可以在GitHub上发起一个pull request，给项目的代码作出贡献啦

#注意
请按照函数式编程方式提交你的函数
写完函数后在README.md文件中末尾的函数列表中写上你提交函数的简介和参数的定义


```



### 文件目录
``` bash

src/            开发目录
  -utils        工具类函数
  -polyfill     polyfill类函数
  -index.js     模块入口
pages/          文档页面
package-lock    依赖包json文件
package         包信息json文件
README          说明文件

```

### 提交规范

``` bash
提交代码前请确认代码通过lint检查 没有任何error

单次提交一个模块文件/函数

尽可能的避免兼容性问题 如使用了有兼容性问题的语法请注明

commit 提交信息格式 'type(scope): subject'

type: 本次改动类型
-feat()      提交新的代码
-fix()       修复bug
-docs()      文档修改
-chore()     辅助工具或配置的变更
-refactor()  重构
-test()      测试代码

scope 改动范围 不允许为空 使用英文小写字母

subject 改动内容 结尾禁止加标点符号

```

### 函数式编程概念

- 没有"副作用"

所谓"副作用"(side effect)，指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生函数运算以外的其他结果。

函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，尤其是不得修改外部变量的值。

比如 slice 和 splice，这两个函数的作用并无二致——但是注意，它们各自的方式却大不同。我们说 slice 符合纯函数的定义是因为对相同的输入它保证能返回相同的输出。而 splice 却会嚼烂调用它的那个数组，然后再吐出来。这就会产生可观察到的副作用，即这个数组永久地改变了。


- 引用透明性

函数程序通常还加强引用透明性，即如果提供同样的输入，那么函数总是返回同样的结果。就是说，函数不依赖于外部的全局状态。


- 只用"表达式"，不用"语句"

"表达式"（expression）是一个单纯的运算过程，总是有返回值；"语句"（statement）是执行某种操作，没有返回值。函数式编程要求，只使用表达式，不使用语句。也就是说，每一步都是单纯的运算，而且都有返回值。


- DRY（不要重复自己，don't repeat yourself）


- 最小意外原则（Principle of least surprise）


- 单一责任（single responsibility）



### 函数列表
``` bash

-chunk(arr, size)   #arr 需要处理的数组     #size 数组块长度
将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

-clone(data)    #data 原对象
深拷贝一个对象或数组  返回值拷贝后的结果

-curring
函数柯里化 将多变量函数拆解为单变量的多个函数的依次调用，可以从高元函数动态地生成批量的低元的函数。
一个强大的函数工厂。

-imgLoader(url, callback)   #url 图片地址   #callback 回调函数
预加载一个图片，等待加载完成后执行回调函数

-throttle(fn, delay)   #fn 回调函数   #delay 间隔时间
节流函数 如果一个动作持续触发，那么让它在一定的时间间隔后才能再触发。例如每过10秒才能发送一次验证码。

debounce(fn, delay)   #fn 回调函数   #delay 间隔时间
消抖函数 如果一个动作频繁触发，那么只在动作停止一段时间后才触发一次。例如百度实时展现搜索结果。

textBreakReplace(content)
替换文本中的换行符  解决换行符在通过json格式传输的时候会出错的问题

queue(arr)  #arr 接受一个包含可执行函数或时间整数型的数组 当遇到函数时会异步执行 当遇到整数型会进行延迟进行下一项
队列  按先进先出顺序执行数组中的每个函数 可通过设置数字来决定两个函数执行的间隔时间

```

### PolyFill列表(函数的原生js实现)

``` bash

-bind

-forEach


```
