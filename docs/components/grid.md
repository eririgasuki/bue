---
title: Grid
sidebarDepth: 2
---


# Grid

Grid - 网格，最多可分为24小格，可设置 gutter 和空白，默认支持响应式布局

<h2>24格网格</h2>

预览

<clientOnly>
  <grid-demo-1></grid-demo-1>
</clientOnly>

代码

```html
<b-row class="demoRow">
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
</b-row>
<b-row class="demoRow">
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
</b-row>
<b-row class="demoRow">
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
</b-row>
<b-row class="demoRow">
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
</b-row>
```

<h2>设置 gutter</h2>

预览

<clientOnly>
  <grid-demo-2></grid-demo-2>
</clientOnly>

代码

```html
<b-row class="demoRow" gutter="10">
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
</b-row>
<b-row class="demoRow" gutter="10">
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6">
    <div class="demoCol">6</div>
  </b-col>
</b-row>
```

<h2>设置空白</h2>

预览

<clientOnly>
  <grid-demo-3></grid-demo-3>
</clientOnly>

代码

```html
<b-row class="demoRow" gutter="10">
  <b-col span="8">
    <div class="demoCol">8</div>
  </b-col>
  <b-col span="8" offset="8">
    <div class="demoCol">8</div>
  </b-col>
</b-row>
<b-row class="demoRow" gutter="10">
  <b-col span="6" offset="6">
    <div class="demoCol">6</div>
  </b-col>
  <b-col span="6" offset="6">
    <div class="demoCol">6</div>
  </b-col>
</b-row>
<b-row class="demoRow" gutter="10">
  <b-col span="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4" offset="4">
    <div class="demoCol">4</div>
  </b-col>
  <b-col span="4" offset="8">
    <div class="demoCol">4</div>
  </b-col>
</b-row>
<b-row class="demoRow" gutter="10">
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2" offset="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2" offset="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2" offset="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2">
    <div class="demoCol">2</div>
  </b-col>
  <b-col span="2" offset="2">
    <div class="demoCol">2</div>
  </b-col>
</b-row>
```


