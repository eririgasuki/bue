---
title: Tabs
sidebarDepth: 2
---


# Tabs

使用方法
<clientOnly>
  <tabs-demo></tabs-demo>
</clientOnly>

```
<b-tabs :selected="selected">
  <b-tabs-head>
    <b-tabs-item name="1">1</b-tabs-item>
    <b-tabs-item name="2">2</b-tabs-item>
  </b-tabs-head>
  <b-tabs-body>
    <b-tabs-pane name="1">content 1</b-tabs-pane>
    <b-tabs-pane name="2">content 2</b-tabs-pane>
  </b-tabs-body>
</b-tabs>
```