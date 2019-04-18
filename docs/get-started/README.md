---
title: 快速上手
---

# 快速上手

## 添加CSS样式

本框架默认使用CSS样式`box-sizing: border-box`，此样式需IE8及以上浏览器支持。
```
*,*::before,*::after{box-sizing: border-box}
```

## 引入bue
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