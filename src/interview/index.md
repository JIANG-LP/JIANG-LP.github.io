# 面试总结

## 基础

### HTML

#### 1.块级元素、行内元素、空元素、行内块元素

- 块级元素：可设置宽高边距，占满整行，会自动换行  
  div、 p、 h1 、h6、ol、ul、dl、table、form、address、blockquote
- 行内元素：无法设置宽高边距，不会占满整行，不会自动换行  
  a span img input select
- 空元素：没有内容的 HTML 元素被称为空元素，空元素是在开始标签中关闭的  
  br hr img input link meta
- 行内块元素：  
  img input

#### 2.html 语义化

- ① 用正确的标签做正确的事情；

- ②html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;

- ③ 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;

- ④ 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

#### 3.src 和 href 的区别

- src: 指向外部资源的位置，请求 src 资源时会将其下载并应用到文档内；  
  当浏览器解析到 src ，会暂停其他资源的下载和处理（图片不会暂停其他资源下载和处理），直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。
- href: 指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。  
  若在文档中添加 href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。

#### 4.<!DOCTYPE>的作用

- 告诉浏览器用什么文档标准来解析这个文档。如果不放入<！doctype html>标签，HTML5 不会工作。浏览器将不能识别出它是 HTML 文档，同时 HTML5 的标签将不能正常工作。

#### 5.h5 新特性

- 更多的语义化标签：header、footer、nav、hgroup、article、section、time 等；
- 对媒体支持：使用 audio 和 video 标签避免先前以插件的方式播放音频、视频带来的麻烦；
- Canvas 绘图：实现在 HTML 页面中绘制图形和图像，且所有的绘图内容都是使用 js 来控制的；
- SVG 绘图技术：矢量图技术，可以无限缩放；
- 实时通信：HTML5 提供了对 Web Sockets 的支持；
- Geolocation： 地理定位，使用浏览器获得客户端所在的地理坐标；
- 客户端本地存储：会话级客户端存储 sessionStorage 和跨会话级客户端存储 localStorage；
- 拖放 API：在 HTML 页面中实现 GUI 程序中的“拖”和“放”操作，提供了七个新事件；
- 文件离线储存：浏览器就会根据 manifest 文件的内容下载相应的资源，并进行离线存储。
- 移除的元素：  
  纯表现的元素：basefont，big，center，font, s，strike，tt，u;  
  对可用性产生负面影响的元素：frame，frameset，noframes；

#### 6.web 标准和 w3c 标准

- web 标准：分为结构、表现和行为
- W3C 标准：提出了更规范的要求
  1、结构方面：标签字母要小写，标签要闭合，标签要正确嵌套
  2、css 和 js 方面：尽量使用外链写法，少用行内样式，属性名要见名知义

#### 7.Label 的作用

- label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
  解析：两种用法：一种是 id 绑定，一种是嵌套。

#### 8.Web Storage

- sessionStorage：用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储。
- localStorage：用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

#### 9.常见的浏览器端存储的方式

- 1.Cookie：  
  cookie 会随着每次 HTTP 请求头信息一起发送，无形中增加了网络流量，另外，cookie 能存储的数据容量有限，根据浏览器类型不同而不同，IE6 大约只能存储 2K。  
  Cookie 可以实现记录访问者的信息、在页面之间传递信息、自动识别用户。

- 2.sessionStorage：  
   使用于 Firefox2+的火狐浏览器，用这种方式存储的数据仅窗口级别有效，同一个窗口（或者 Tab）页面刷新或者跳转，都能获取到本地存储的数据，当新开窗口或者页面时，原来的数据就失效了。
  缺点：IE 不支持、不能实现数据的持久保存。

- 3.localStorage：  
   localStorage 是 Web Storage 互联网存储规范中的一部分，现在在 Firefox3.5、Safari 4 和 IE8 中得到支持。  
  缺点：低版本浏览器不支持。

#### 10.对浏览器内核的理解

- 主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine)和 JS 引擎。

  渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。  
  JS 引擎则：解析和执行 javascript 来实现网页的动态效果。
  最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

#### 11.元素的 alt 和 title 的异同

- 在 alt 和 title 同时设置的时候，alt 作为图片的替代文字出现，title 是图片的解释文字。

### CSS

#### 1.实现导航栏吸顶

- 1.sticky : 粘性定位

```
      /* 粘性定位 ( IE 浏览器不生效 ) */
      position: sticky; // 粘性定位
      top: 0; // 粘性定位
```

- 2.fixed : 固定定位

```
      /* 固定定位 ( 浏览器放大跑偏 ) */
      position: fixed;
      top: 90px; // 脱离文档流, 不占页面位置
      width: 100%;
      z-index: 999; // 视情况而加
```

- 3.relative + absolute 结合使用

```
// 实现类似于 fixed 固定定位的效果
position: relative; // 父 父相

      // 子 绝对定位
      // 通过给 父父级 .fufu 添加相对定位来实现类似于 fixed 固定定位的效果
      position: absolute;
      top: 0;
      left: 184px;
      width: 100%;
      z-index: 99; // 视项目情况而加
```

#### 2.绘制三角形

- 方法一：设置宽高都为 0。然后把边框设置为一边有颜色，其他三遍透明
- 方法二：设置 border:20px solid transparent;然后再设置 border-top:20px solid red;

  详细：https://blog.csdn.net/weixin_44015669/article/details/115663156?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168206417216800182137356%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168206417216800182137356&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-115663156-null-null.142^v86^insert_down28,239^v2^insert_chatgpt&utm_term=css%20%E7%BB%98%E5%88%B6%E4%B8%89%E8%A7%92%E5%BD%A2&spm=1018.2226.3001.4187

#### 3.伪类 伪元素

- 伪类和伪元素都是用来表示文档树以外的"元素"；
- 伪类和伪元素分别用单冒号:和双冒号::来表示；
- 伪类和伪元素的区别，最关键的点在于如果没有伪元素(或伪类)，是否需要添加元素才能达到目的，如果是则是伪元素，反之则是伪类；

#### 4.盒模型

- css 盒模型包括标准模型和 IE 盒模型。
- 两个都包含 content/padding/border/margin，区别是 IE 盒模型（怪异盒模型）的 width 表示 content+padding+border，标准盒模型的 width 只包含 content。

#### 5.css3 新特性

- 圆角（ border- radius）；

- 阴影（box- shadow）；

- 对文字加特效（text- shadow）；

- 线性渐变（ gradient）；

- 变换（ transform ） 如（ transform:rotate（9deg）scale（0.85,0.90）translate（0px, 30px）skew（-9deg,0deg）；// 旋转、缩放、定位、倾斜。

- 更多的 CSS 选择器；

- 多背景设置；

- 色彩模式，如 rgba；

- 伪元素::selection;

- 媒体查询；

- 多栏布局；

- 图片边框（ border-image）。

#### 6.画一条 0.5px 的线

```
div {
	background:black;//一定是background而非color
	width:100%;
	height:1px;
    <!-- scale缩放 -->
	transform:scaleY(0.5)
}
```

- 给容器设置伪元素，设置绝对定位，宽高是 200% ，边框是 1px；
- 利用线性渐变，一半有颜色，一般透明；

#### 7.浮动清除

- 使用带 clear 属性的空元素在浮动元素后使用一个空元素如`<div class="clear"></div>`，并在 CSS 中赋予.clear{clear:both;}属性即可清理浮动。亦可使用`<br class="clear" />`或`<hr class="clear" />`来进行清理。

none：元素不会向下移动清除之前的浮动。  
left/right：元素被向下移动用于清除之前的左或右浮动。  
both：元素被向下移动用于清除之前的左右浮动。

- 使用 CSS 的 overflow 属性给浮动元素的容器添加 `overflow:hidden;`这样做就隐藏了浮动元素。或 `overflow:auto;`可以清除浮动，这是自动隐藏。

overflow 是当块级元素过大，超过所容纳的空间时进行的操作。

- 给浮动的元素的容器添加浮动给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。
- 使用邻接元素处理什么都不做，给浮动元素后面的元素添加 clear 属性。
- 使用 CSS 的:after 伪元素结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）。

```
   .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
        }

```

#### 8.实现元素的垂直居中

- 1.使用绝对定位 + transform，给子元素添加如下样式

这种方式比较常用，父子元素都不确定宽高的情况也适用。

如果子元素的宽高确定的话，translate 中的值也可以设置为子元素宽高的一半，即 `transform: translate(-100px, -100px);`

```
.work {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
}
```

- 2.使用绝对定位 + margin，给子元素添加如下样式

这种方式适合子元素宽高确定的情况，给 margin-top 设置百分比的大小将不生效，即 margin-top: -50%;不能达到垂直居中的效果

```
.work1 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -100px;
}
```

- 3.使用绝对定位 + margin: auto，给子元素添加如下样式

父子元素宽高都未知时也适用。

```
.work2 {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin:auto;
}
```

- 4.父元素使用 flex 布局，并设置相关的属性值为 center

这种方式要求父元素的高度是确定的，百分比形式的高度将不能生效。

```
.par-work {
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
```

- 5.使用 table-cell 实现

这种方式需要父元素的宽高都是确定的，才能保证子元素在父元素中垂直水平都居中。

```
.par-work2 {
    height: 500px;
    width: 500px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.son-work2 {
    display: inline-block;
}
```

- 6.使用 grid 布局

这种方式适用于父元素高度确定的情况。

```
.par-work3 {
    display: grid;
    height: 500px;
}
.son-work3 {
    align-self: center; /*设置单元格内容的垂直位置*/
    justify-self: center; /*设置单元格内容的水平位置*/
}
```

#### 9. auto 和 100%区别：

- 1.  auto 是在屏幕内操作，如果有边框，则内部的 content 缩小，边框不会超出屏幕，会自动适应屏幕。
- 2.  100%指的的 content+padding，如果添加 border 就会超出屏幕。

#### 10.阴影

- **文本阴影**
  1. text-shadow: 10px 10px 3px yellow , 10px -10px 2px red;
  2. 阴影 text-shadow: 水平方向位移 垂直方向位移 模糊程度 颜色 写多个阴影的时候只需要用“，”隔开就行。
- **盒子阴影**
  1. box-shadow:水平方向位移 垂直方向位移 (阴影大小) 模糊程度 颜色 (内 inset 或外阴影，默认外阴影)。

#### 11.弹性布局

```
1. display:flex;
2. **flex-direction**: column;修改主轴为竖直排列
   1. row;主轴为水平排列
   2. row-reverse；主轴水平反向排列
   3. column-reverse;主轴垂直方向反向排列
3. **justify-content**:调整主轴对齐方向
   1. flex-start  左对齐
   2. center  居中对齐
   3. flex-end   右对齐
   4. space-between  两端对齐
   5. space-around 距离环绕
4. **align-items**:调整侧轴对齐方向。同上
5. **flex-wrap**: wrap;折行显示   如果没有折行显示，使用 display: flex;就会在一行里面显示
6. **align-content**:行间距。属性同上

```

#### 12.移动端布局

- css 像素: 设备的独立像素。
- 物理分辨率: 设备真正的像素。

设备像素比=物理像素/css 像素

#### 13.css 优先级算法怎么计算

```
1. **!important>内联样式>id>class>标签>通配(*)**
2. css权重计算
   1. 内联样式（style） 权重值：1000
   2. id选择器                 100
   3. 类选择器                  10
   4. 标签&伪类元素选择器         1
   5. 通配（> + *)               0

```

#### 14.sass、less

- 1.原理  
  1.1 Less 定义：是一种动态的样式语言,使 CSS 变成一种动态的语言特性，如变量、继承、运算、函数。Less 既可以在客户端上面运行(支持 IE6 以上版本、Webkit、Firefox),也可以在服务端运行(Node.js)

  1.2 SaSS 定义：是一种动态样式语言，SaSS 里面的语法属于缩排语法，对于之前的 css 相比，多出了很多功能，更容易阅读

  1.3 预处理器。Less 和 SaSS 都属于预处理器，它会定义一种新的语言，其总体思想是为 CSS 增加一些编程的特性，将 CSS 作为目标生成文件

- 2.区别  
  2.1 编译环境  
  Sass 是在服务端上面处理的，之前是 Ruby,现在是 Dart-Sass 或者是 Node-Sass，但是 Less 在编译时，需要引入 less.js 来处理 Less 代码输出 CSS 到浏览器上，也可以在开发服务器上将 Less 语法编译成 css 文件，输出 CSS 文件到生产包目录，也有在线编译地址。

  2.2 变量符  
  Less 是@，而 Sass 是$

  2.3 输出设置  
  Less 没有输出设置，而 Sass 有 4 种输出选项，如下
  nested：嵌套缩进的 css 代码
  expanded：展开的多行 css 代码
  compact：简洁格式的 css 代码
  compressed：压缩后的 css 代码

  2.4 Sass 支持条件语句，可以使用 if{}else{},for{}循环等等，而 Less 不支持。

- 3.优点  
  3.1 提供 CSS 缺失的样式层复用机制  
  3.2 减少冗余代码  
  3.3 提高样式代码的可维护性  
  3.4 结构清晰，便于扩展可以方便的屏蔽浏览器私有的语法差异  
  3.5 轻松实现多重继承，完全兼容了 CSS 代码，提高了开发效率。

### JavaScript/Typescript

#### 1.js ts 区别

它们都是脚本语言。JavaScript 是轻量级的解释性脚本语言，可嵌入到 HTML 页面中，在浏览器端执行。而 TypeScript 是 JavaScript 的超集（ts 是微软开发的开源编程语言），即包含 JavaScript 的所有元素，能运行 JavaScript 的代码，并扩展了 JavaScript 的语法。（ts 包含了 js 的库和函数，ts 上可以写任何的 js，调用任何的 js 库，可以在 ts 中使用原生 js 语法）。相比于 JavaScript ，它还增加了静态类型、类、模块、接口和类型注解方面的功能，更易于大项目的开发。

区别：

1、TypeScript 引入了 JavaScript 中没有的“类”概念

2、TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中

3、js 没有重载概念，ts 有可以重载

4、ts 增加了接口 interface、泛型、类、类的多态、继承等

5、ts 对比 js 基础类型上，增加了 void/never/any/元组/枚举/以及一些高级类型

js 有的类型：boolean 类型、number 类型、string 类型、array 类型、undefined、null

ts 新增的类型：tuple 类型（元组类型）、enum 类型（枚举类型）、any 类型（任意类型）

void 类型（没有任何类型）表示定义方法没有返回值  
never 类型：是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值这意味着声明 never 变量只能被 never 类型所赋值

js 变量是没有类型的，即 age=18，age 可以是任何类型的，可以继续给 age 赋值为`age=”aaa”`  
Ts 有明确的类型(即：变量名:number(数值类型)) `eg：let age: number = 18`

ts 需要静态编译，它提供了强类型与更多面向对象的内容。  
ts 最终仍要编译为弱类型，基于对象的原生的 js，再运行。故 ts 相较 java/C#这样天生面向对象语言是有区别和局限的  
ts 是由微软牵头主导的，其语法风格与概念主要来自 C#，理解起来学过 java 的更容易理解

ts 优势

1、类型化思维方式，使开发更严谨，能帮助开发人员检测出错误并修改，提前发现错误，减少改 Bug 时间

2、类型系统提高了代码可读性，便于开发人员做注释，维护和重构代码更加容易

3、补充了接口、枚举等开发大型应用时 JS 缺失的功能

【JS 的类型系统存在"先天缺陷"，绝大部分错误都是类型错误(Uncaught TypeError)】

4、TypeScript 工具使重构更变的容易、快捷

5、类型安全功能能在编码期间检测错误，这为开发人员创建了一个更高效的编码和调试过程

#### 2.闭包

- 闭包：就是能够读取外层函数内部变量的函数。
- 闭包需要满足三个条件：  
  访问所在作用域；  
  函数嵌套；  
  在所在作用域外被调用 。
- 优点： 可以重复使用变量，并且不会造成变量污染 。
- 缺点： 会引起内存泄漏
- 使用闭包的注意点：  
  由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

  闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

#### 3.原型和原型链

- 原型就是一个为对象实例定义了一些公共属性和公共方法的对象模板。
- 原型链

```
对象之间的继承关系通过构造函数的prototype指向父类对象，直到指向Object对象为止形成的指向链条。

通俗讲： 原型链是原型对象创建过程的历史记录。

注：在javascript中，所有的对象都拥有一个__proto__属性指向该对象的原型（prototype) 。
```

#### 4.es6 新特性

https://blog.csdn.net/ZLJ_999/article/details/124122540?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168206751916800227426337%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168206751916800227426337&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-124122540-null-null.142^v86^insert_down28,239^v2^insert_chatgpt&utm_term=es6%E6%96%B0%E7%89%B9%E6%80%A7&spm=1018.2226.3001.4187

#### 面试题汇总

https://blog.csdn.net/chen3647/article/details/125286196?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168206626016800215094911%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168206626016800215094911&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-125286196-null-null.142^v86^insert_down28,239^v2^insert_chatgpt&utm_term=js%E9%9D%A2%E8%AF%95%E9%A2%98&spm=1018.2226.3001.4187

## 框架

### Vue

### React

## 小程序

## 性能
