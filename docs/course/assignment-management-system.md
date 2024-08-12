---
title: assignment-management-system
date: 2021-06-20
tags: [assignment]
---

## 效果展示

视频展示(需要梯子)：

<video width="960" controls>
  <source src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FAilluca%2F5Punh8XrDd.mp4?alt=media&token=921f8eb9-3dbd-4dfd-8880-969f52ade07d" type="video/mp4">
  Your browser does not support the video tag.
</video>

如果上面的视频无法加载，可以查看：https://www.jianguoyun.com/p/DUg6b7YQ6tyNBxiRrdEFIAA

图片展示：

![image-20240521173557305](https://p.ipic.vip/vzuhyi.png)

![image-20240521173613250](https://p.ipic.vip/6j0g68.png)

![image-20240521173647548](https://p.ipic.vip/uyvxjp.png)

![image-20240521173712863](https://p.ipic.vip/7obpon.png)

![image-20240521173813261](https://p.ipic.vip/v438bh.png)

## 运行环境

前端使用node 14.17.0安装依赖，后端使用maven 3.6.3安装依赖并构建工程，测试浏览器为Google Chrome 91.0，操作系统为macOS 10.14.6。

## 后端

首先通过maven下载相关依赖，再通过Intellij Idea启动后台服务器，没有红色ERROR说明启动成功，如图1所示。

![img](https://p.ipic.vip/qu29gr.jpg) 

图1 后台服务器启动

## 前端

进入到homework-management-system-front-end-master目录后，在命令行中依次运行如下命令：

1. npm install安装依赖
2. npm run serve启动项目

若如图2所示，说明运行成功。有两个网址Local和Network，点击Network后面的网址，在浏览器中进行操作。

![image-20240521173344499](https://p.ipic.vip/8rwx8c.png)

图2 前端服务启动

 

若想使用C/S架构应用，在命令行中运行npm run electron:serve，得到运行后的软件界面，如图3所示。

![img](https://p.ipic.vip/3jpw9t.jpg) 

图3 mac端登录界面

如果要若想产生C/S架构的安装包，需要运行命令npm run electron:build，对vue工程进行编译，得到dist_electron工程目录。
