# 技术文章整理 <!-- omit in toc -->

> 看过的觉得比较好的文章进行分类整理

## 目录 <!-- omit in toc -->

- [前端](#前端)
  - [CSS](#css)
    - [CSS布局](#css布局)
    - [CSS技巧](#css技巧)
    - [CSS进阶](#css进阶)
  - [JavaScript](#javascript)
    - [JavaScript 运行机制](#javascript-运行机制)
    - [JavaScript 技巧](#javascript-技巧)
  - [多媒体](#多媒体)
  - [框架](#框架)
    - [React](#react)
      - [源码](#源码)
- [进阶技能](#进阶技能)
  - [正则](#正则)
  - [算法 & 数据结构](#算法--数据结构)
  - [设计模式](#设计模式)
  - [WebGL](#webgl)
- [面试](#面试)
- [综合](#综合)
- [规范](#规范)
  - [前端](#前端-1)
- [开发工具](#开发工具)
  - [VSCode](#vscode)
  - [浏览器](#浏览器)
    - [Chrome](#chrome)

## 前端

> 前端类别的文章

### CSS

#### CSS布局

> CSS布局相关的文章

1. [CSS布局解决方案（终结版）](https://segmentfault.com/a/1190000013565024)
2. [不需要媒体查询的灵活布局方式 -- **英**](https://blog.logrocket.com/flexible-layouts-without-media-queries/?utm_source=CSS-Weekly&utm_campaign=Issue-407&utm_medium=email#utm_source=CSS-Weekly&utm_campaign=Issue-407&utm_medium=email)

#### CSS技巧

1. [灵活运用CSS开发技巧](https://segmentfault.com/a/1190000020899202)

#### CSS进阶

1. [CSS 的“层”峦“叠”翠 - 一文掌握z-index用法​​​​​​​](https://mp.weixin.qq.com/s/cbeN51u8Rn9Ta7WjRdE9hg)
2. [CSS 中 关于 Overflow ，你需要了解的这些知识点！ -- **译**](https://juejin.im/post/5ecdcbbe6fb9a047ab2c1530)
    * [原文地址](https://ishadeed.com/article/overflow-css/?utm_source=CSS-Weekly&utm_campaign=Issue-405&utm_medium=email)
3. [CSS中的间距，前端开发中各种设置间距的优点缺点及实例 -- **译**](https://zhuanlan.zhihu.com/p/138986842)
    * [原文地址](https://ishadeed.com/article/spacing-in-css/?utm_source=CSS-Weekly&utm_campaign=Issue-407&utm_medium=email)

### JavaScript

> 放置 JavaScript 相关的文章

0. [**JavaScript 20 年** -- **译**](https://github.com/doodlewind/js-20-years-cn)
   * [原文地址](https://zenodo.org/record/3707008)
1. [用个实在例子来教你掌握 Async/Await -- **译**](https://juejin.im/post/5ca2bac16fb9a05e5849471d)
    * [原文地址](https://medium.com/free-code-camp/how-to-master-async-await-with-this-real-world-example-19107e7558ad)
    <details><summary><b>笔记</b></summary>
    <p>
        并没有介绍过多关于 async/await 的内容，也就是说就是一篇 async/await 的简单入门文章
    </p>
    </details>
2. [1000+ 项目中出现最多的 10 个 JavaScript 错误（及如何避免）-- **译**](https://zhuanlan.zhihu.com/p/33404205)
    * [原文地址](https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437)
    <details><summary><b>笔记</b></summary>
    <p>
        文中罗列的一些错误内容，与现在的报错信息有一点差别，具体请以实践结果为例，文中的内容可以作为参考内容
    </p>
    </details>
3. [JavaScript 的 Async/Await 完胜 Promise 的六个理由 -- **译**](https://loveky.github.io/2017/04/09/translate-6-reasons-why-javascripts-async-await-blows-promises-away/)
    * [原文地址](https://medium.com/hackernoon/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
    <details><summary><b>笔记</b></summary>
    <p>
        主要介绍了 async/await 优于 Promise 的六个方面 </br>
        1. 简介干净     - 不必在代码中写 then() 方法来处理响应</br>
        2. 错误处理     - 在使用 try/catch 时无法捕获到 Promise 中执行的错误，如果需要捕获，这需要使用 Promise 的 catch() 方法进行捕获。</br>
        3. 条件语句</br>
        4. 中间值       - 在 Promise 中如果我们需要知道一个 Promise 的执行结果，可能就需要在 then() 方法中进行嵌套了</br>
        5. 错误栈       - 在代码执行错误时，返回的错误信息是不一样的，async/await 会更加的精确</br>
        6. 调试</br>
    </p>
    </details>
4. [JavaScript 大师必须掌握的 12 个知识点 -- **译**](https://segmentfault.com/a/1190000018748741)
    * [原文地址](https://levelup.gitconnected.com/10-things-to-learn-on-the-way-to-become-a-javascript-master-f4fc632b2bb7)
    <details><summary><b>笔记</b></summary>
    <p>
        在文中作者一共列举了12大知识点：
        <ul>
            <li>控制流（Control Flow）</li>
            <li>异常处理</li>
            <li>数据模型（这个还是有一定的作用的）</li>
            <li>异步性</li>
            <li>操作DOM（基础）</li>
            <li>Nodejs/Express</li>
            <li>函数式编程 && 面向对象编程</li>
            <li>前端框架（Vue、React and Angular）</li>
            <li>前端编译/打包（Webpack，Babel，Gulp 和 parcel）</li>
            <li>正则表达式（学了不会吃亏）</li>
        </ul>
    </p>
    </details>
5. [负责任地编写JavaScript代码系列 --**译**](https://wecteam.io/2019/12/13/%E8%B4%9F%E8%B4%A3%E4%BB%BB%E5%9C%B0%E7%BC%96%E5%86%99JavaScript%E4%BB%A3%E7%A0%81%EF%BC%9A%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86/)
  *其他文章可通过底部文章导航查看*
    * [原文地址](https://alistapart.com/article/responsible-javascript-part-1/)
6. [我从来都不懂Javascript闭包 -- **译**](https://zhuanlan.zhihu.com/p/37176380)
    * [原文地址](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
    <details><summary><b>笔记</b></summary>
    <p>
        文中作者使用几个代码示例，来详细的介绍了，JavaScript 引擎是如何一步一步的去执行代码的，通过代码的执行过程来解释什么闭包
    </p>
    </details>
7. [理解异步JavaScript -- **译**](https://juejin.im/post/5c0d148af265da612637fa76)
    * [原文地址](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)
    <details><summary><b>笔记</b></summary>
    <p>
        作者先从 JavaScript 的执行栈开始入手，然后通过几个案例来讲解事件循环（同步事件 > 微队列（.then、.catch、await...）> 异步队列（setTimeout，DOM Event...））
    </p>
    </details>
8. [理解 JavaScript 中的 Promise -- **译**](https://windyard.com/2019/06/25/understanding-promise/index.html)
    * [原文地址](https://medium.com/better-programming/understanding-promises-in-javascript-13d99df067c1)
9.  [什么是 JavaScript 的变量提升 -- **英**](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)
10. [为什么 JavaScript 正在吃掉 HTML -- **英**](https://css-tricks.com/why-javascript-is-eating-html/)
11. [深入 ES6 模块 -- **译**](https://www.zcfy.cc/article/es6-modules-in-depth-4436.html)
    * [原文地址](https://ponyfoo.com/articles/es6-modules-in-depth)
12. [浏览器中的 ECMAScript 模块 -- **译**](https://juejin.im/post/5c321dfc518825265c2fc626)
    * [原文地址](https://jakearchibald.com/2017/es-modules-in-browsers/)
13. [中止信号：如何取消 JavaScript 中的异步任务 -- **译**](https://zhuanlan.zhihu.com/p/124265066)
    * [原文地址](https://ckeditor.com/blog/Aborting-a-signal-how-to-cancel-an-asynchronous-task-in-JavaScript/)
14. [与 JavaScript 模块相关的所有知识点 -- **译**](https://segmentfault.com/a/1190000022383096)
    * [原文地址](https://weblogs.asp.net/dixin/understanding-all-javascript-module-formats-and-tools)
15. [未来的JavaScript记录与元组 -- **译**](https://github.com/75team/w3c/blob/master/articles/20200601_cncuckoo_%E6%9C%AA%E6%9D%A5%E7%9A%84avaScript%E8%AE%B0%E5%BD%95%E4%B8%8E%E5%85%83%E7%BB%84.md)
    * [原文地址](https://2ality.com/2020/05/records-tuples-first-look.html)
16. [ECMAScript 4：缺少的版本 -- **英**](https://evertpot.com/ecmascript-4-the-missing-version/)
17. [案例分析: 研究应用的性能 -- **英**](https://3perf.com/blog/notion/)
18. [JavaScript 错误处理权威指南 -- **译**](https://www.infoq.cn/article/cQQKlPyjLsLwv_BQt9y0)
    * [原文地址](https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6)
19. [JavaScript 中的执行上下文和调用栈是什么？ -- **译**](https://www.zcfy.cc/article/what-is-the-execution-context-amp-stack-in-javascript-by-david-shariff)
    * [原文地址](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)


#### JavaScript 运行机制

> 放置一些浏览器，JavaScript运行机制相关的文章

1. [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872)
2. [了解 JavaScript 工作原理系列文章(含十九篇) -- **译**](https://github.com/Troland/how-javascript-works)
    * [原文地址](https://blog.sessionstack.com/tagged/tutorial "how-javascript-works")
3. [揭开 JavaScript 异步编程的面纱 -- **英**](https://yunchi.dev/posts/demystifying-async/)
4. [V8引擎的内存管理 -- **译**](https://juejin.im/post/5e4bd6eaf265da573d619e9a)
    * [原文地址](https://deepu.tech/memory-management-in-v8)
5. [通过动画学习 JavaScript 系列](https://juejin.im/post/5e218b8af265da3e121824eb)
  *原系列有7篇文章，没有找到全7篇翻译的，基本都是5篇的*
    * [JavaScript可视化：Promise和Async/Await -- **译**](https://zhuanlan.zhihu.com/p/138140285)
    * [JavaScript可视化：迭代器和生成器 -- **译**](https://blog.csdn.net/MFWSCQ/article/details/104773319)
    * [原文地址](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
6. [从 V8 源码理解 Javascript 函数是一等公民](https://zhuanlan.zhihu.com/p/101132637)
7. [V8中的指针压缩 -- **译**](https://juejin.im/post/5eb78eb06fb9a0433567a857)
    * [原文地址](https://v8.dev/blog/pointer-compression)
8. [JavaScript内存泄漏的原因以及如何避免它们 -- **英**](https://www.ditdot.hr/en/causes-of-memory-leaks-in-javascript-and-how-to-avoid-them)

#### JavaScript 技巧

> JavaScript 小技巧或是有用的代码片段

1. [你可以在30秒或更短的时间内学会127个有用的JavaScript代码片段系列 -- **英**](https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5)
    *该系列攻六篇文章，一共汇总了127个代码片段*

### 多媒体

> 放置一些图片类，媒体类和字体类的文章

1. [图像优化自动化实用指南 -- **译**](https://www.yuque.com/ysfe/ykx/imgopt)
    * [原文地址](https://images.guide)

### 框架

#### React

1. [建立自己的 React -- **英**](https://pomb.us/build-your-own-react)
2. [useRedux —使用React Hooks的状态管理模式 -- **英**](https://medium.com/hackernoon/useredux-state-management-pattern-with-react-hooks-fa8e1413b9f1)
3. [React 开发指南 2019 -- **译**](https://github.com/adam-golab/react-developer-roadmap/blob/master/README-CN.md)
4. [React.js 性能分析 -- **译**](https://www.infoq.cn/article/8T9M7dtzqWNsSFfXMgSb)
    * [原文地址](https://addyosmani.com/blog/profiling-react-js/)
5. [在 React Hooks 中如何请求数据？ -- **译**](https://juejin.im/post/5c98fb35518825157172acc6)
    * [原文地址](https://www.robinwieruch.de/react-hooks-fetch-data)
6. [React hooks：它不是一种魔法，只是一个数组——使用图表揭秘提案规则 -- **译**](https://juejin.im/post/5bfa929551882524cb6f413b)
    * [原文地址](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
7. [关于React渲染行为的（大多数）完整指南 -- **英**](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
8. [使用React Hooks进行状态管理 - 无Redux和Context API](https://segmentfault.com/a/1190000020354594)
    * [原文地址](https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8)
9. [关于React渲染行为的（大多数）完整指南 -- **英**](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
10. [理解 React Hooks -- **译**](https://zhuanlan.zhihu.com/p/49489786)
    * [原文地址](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)

##### 源码

1. [React Hooks 源码解析系列 Version: 16.11.0](https://juejin.im/post/5dc6e1b35188251ab9183c7d)

## 进阶技能

### 正则

> 放置与正则表达式相关的文章

1. [JS正则表达式完整教程](https://juejin.im/post/5965943ff265da6c30653879)

### 算法 & 数据结构

> 算法 & 数据结构

1. [十大经典排序算法的 JS 版](https://mp.weixin.qq.com/s/OH0xlFbeMn_tiiiW_5EetQ)
2. [JavaScript 算法与数据结构](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)

### 设计模式

> 设计模式

1. [JavaScript设计模式综合指南 -- **译**](http://www.srcmini.com/54392.html)
    * [原文地址](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)
2. [JavaScript中常见的十五种设计模式](https://www.cnblogs.com/imwtr/p/9451129.html)

### WebGL

1. [WebGL手册 -- **英**](https://xem.github.io/articles/webgl-guide.html)


## 面试

> 面试相关的文章或是面试题

1. [70个JavaScript面试题集锦 -- **译 **](https://cloud.tencent.com/developer/article/1621572)
    * [原文地址](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)
2. [JavaScript 进阶问题列表 -- **译**](https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md)
    * [原文地址](https://github.com/lydiahallie/javascript-questions)
3. [前端面试题](https://www.jianshu.com/p/70ff586f8e96?utm_source=desktop&utm_medium=timeline&tdsourcetag=s_pctim_aiomsg)
4. [26个精选的JavaScript面试问题 -- **译**](https://blog.fundebug.com/2018/10/18/top-26-js-interview-questions/)
    * [原文地址](https://dev.to/aershov24/top-26-javascript-interview-questions-i-wish-i-knew-26k1?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more)
5. [一篇文章搞定前端面试](https://juejin.im/post/5bbaa549e51d450e827b6b13?utm_source=gold_browser_extension&tdsourcetag=s_pctim_aiomsg)
6. [五年面试，三年模拟 - 掘金](https://juejin.im/post/5ca0425e51882567ce181037?utm_source=gold_browser_extension&tdsourcetag=s_pctim_aiomsg)
7. [中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂系列](https://juejin.im/post/5c64d15d6fb9a049d37f9c20?utm_source=gold_browser_extension&tdsourcetag=s_pctim_aiomsg)
    *该系列共三篇文章*
8. [前端面试题大全](http://blog.poetries.top/FE-Interview-Questions/)
9. [前端同学经常忽视的一个 JavaScript 面试题](https://github.com/Wscats/articles/issues/85)
10. [前端面试题 -- 小程序](https://segmentfault.com/a/1190000018689948)
11. [这么高质量React面试题（含答案），看到就是赚到了！](https://zhuanlan.zhihu.com/p/91725031)
12. [每日面试题](https://github.com/haizlin/fe-interview/blob/master/category/history.md)

## 综合

1. [年终回顾，为你汇总一份「前端技术清单」-- **持续更新**](https://github.com/alienzhou/frontend-tech-list)
2. [每个Web开发人员都可以使用的9个流行的GitHub存储库 -- **英**](https://medium.com/better-programming/9-popular-github-repos-for-every-web-developer-6826582291bc)
3. [前端清单 -- **译**](http://luchun.github.io/The-front-end-checklist/)
    * [原文地址](https://github.com/thedaviddias/Front-End-Checklist#head)
4. [Node.js 最佳实践 -- **译**](https://www.kancloud.cn/luponu/nodebestpractices/882656)
    * [原文地址](https://github.com/goldbergyoni/nodebestpractices)
5. [为什么前端初学者必须要明白发布订阅模式 -- **译**](https://www.jianshu.com/p/0ed71e5c6af7)
    * [原文地址](https://itnext.io/why-every-beginner-front-end-developer-should-know-publish-subscribe-pattern-72a12cd68d44)
6. [JavaScript开发者应懂的33个概念 -- **持续更新**](https://github.com/stephentian/33-js-concepts/blob/master/README.md)
7. [CSS +备忘单终极指南 -- **英**](https://medium.com/level-up-web/the-ultimate-guide-to-css-103b0f883de3)
8. [超大型 JavaScript 应用的设计哲学 -- **译**](https://hijiangtao.github.io/2018/04/20/Designing-Very-Large-JavaScript-Applications/)
    * [原文地址](https://medium.com/@cramforce/designing-very-large-javascript-applications-6e013a3291a3)
9. [Web架构入门 -- **译**](http://www.mzh.ren/web-architecture-101.html)
    * [原文地址](https://engineering.videoblocks.com/web-architecture-101-a3224e126947)
10. [前端架构 101 系列 -- **持续更新**](https://zhuanlan.zhihu.com/p/145441907)
    **该系列共九篇文章 - 持续更新中**

## 规范

> 开发规范

### 前端

> 前端的开发规范

1. [JavaScript编码规范](https://github.com/fex-team/styleguide/blob/master/javascript.md)
2. [前端代码规范 及 最佳实践](http://coderlmn.github.io/code-standards/)

## 开发工具

> 编程过程中使用到的工具

### VSCode

> VSCode 相关的内容

1. [这就是我想要的 VSCode 插件！-- **译**](https://zhuanlan.zhihu.com/p/36020180)
    * [原文地址](https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5)

2. [15个VS代码扩展，可节省您的时间并使您成为更好的开发人员 -- **英**](https://levelup.gitconnected.com/15-vs-code-extension-to-save-your-time-and-make-you-a-better-developer-506f79baec53)

### 浏览器

> 浏览器开发者工具或是相关技巧的内容

#### Chrome

> Chrome 开发者工具相关的内容

1. [Chrome开发者工具 -- **英**](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2)
2. [使用Chrome DevTools优化网站速度 -- **译**](https://mp.weixin.qq.com/s/QVFza4MoN6XSAr7Dw4fltg)
    * [原文地址](https://developers.google.cn/web/tools/chrome-devtools/speed/get-started)
3. [vscode插件集合 -- **英**](https://github.com/viatsko/awesome-vscode)
