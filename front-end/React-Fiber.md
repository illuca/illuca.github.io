---
title: React Fiber
date: 2024-07-20 23:32:41
tags: [前端]
---



## 为什么要引入fiber

在React 16之前是没有fiber的，如果碰到标签元素很多的页面，并且会频繁刷新，React 15会出现掉帧情况。

那么React 15是如何渲染的呢？

### 渲染一个元素到界面上

index.jsx:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
let element = (
    <div id="0">
        <div id="1">1</div> 
        <div id="2">2</div> 
    </div>
)
ReactDOM.render(element, document.getElementByld("root"));
```

其中

```jsx
let element = (
    <div id="0">
        <div id="1">1</div> 
        <div id="2">2</div> 
    </div>
)
```

是jsx语法糖，这段代码在编译时会被转换为React.element调用：

```js
let element = React.createElement(
  'div',
  { id: '0' },
  React.createElement('div', { id: '1' }, '1'),
  React.createElement('div', { id: '2' }, '2')
);
```

这也是引入'react'库，却没看到它使用的原因，因为编译需要用到。(ps: React 17之后不用手动引入了)

HTML ==> React.createElement ==> 虚拟DOM ==>  实际DOM  ==> 页面显示

我们可以通过console.log打印虚拟DOM。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
let element = (
    <div id="0">
        <div id="1">1</div> 
        <div id="2">2</div> 
    </div>
)

console.log(element)
ReactDOM.render(element, document.getElementByld("root"));
```

