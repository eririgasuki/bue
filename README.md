# bue --- 基于Vue的UI组件

[![Build Status](https://www.travis-ci.org/eririgasuki/bue.svg?branch=master)](https://www.travis-ci.org/eririgasuki/bue)

## 介绍

这是学习VUE时制作的仿造Element UI的框架。因为是饿了么前端团队创作的UI结合VUE，故取名Bue（不饿）。

## 开始使用

1.添加CSS样式

本框架默认使用CSS样式`box-sizing: border-box`，此样式需IE8及以上浏览器支持。
```
*,*::before,*::after{box-sizing: border-box}
```

2.安装bue

```
npm i buelment
```

3.引入bue
```
import { Button, ButtonGroup, Icon } from "buelment";
import "buelment/dist/index.css";
export default {
  name: "app",
  components: {
    "b-button": Button,
    "b-icon": Icon
  }
};
```
