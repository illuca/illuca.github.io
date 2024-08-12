---
title: JS的DOM BOM操作教程
date: 2024-07-20 17:47:43
tags: [前端, DOM, BOM]
---

## 选中元素

document.getElementById，适用于需要通过ID快速定位单个元素的情况。除此之外还有getElementByTagName、ByName、ByClassName

document.querySelector提供了更高的灵活性，因为它可以使用任意的CSS选择器。这在需要选择复杂结构的元素时非常有用。

## 事件三要素

事件三要素为事件源、事件类型和事件处理程序。

```js
// 事件源
let btn = document.getElementById('btn')
// 事件类型：如何触发，例如说鼠标点击触发、鼠标悬浮触发
// 事件处理程序
btn.onclick = function() {
    alert('被点击')
}
// 或者通过listener，一个事件可以触发多个处理程序
btn.addEventListener('click', ()=>{
    
})

```

## 操作元素

### 修改元素内容

`element.innerText="123  \n"`

只修改文字内容，并且即使你增加了空格和换行，也会被去除

`element.innerHTML=<span>hello</span>`

修改标签，空格和换行不会被去除

### 修改元素属性

img.src：

img.title：用于鼠标悬停显示提示文本，是一个tooltip

img.alt: 用于SEO和无障碍访问，alt全称是alternative text，意为图像内容的替代描述

