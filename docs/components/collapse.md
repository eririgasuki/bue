---
title: Collapse
sidebarDepth: 2
---

# Collapse

<h2>设置默认展开</h2>

预览

<clientOnly>
  <collapse-demo-1></collapse-demo-1>
</clientOnly>

代码

```html
<b-collapse :selected.sync="selectedTab">
  <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
  <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
  <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
</b-collapse>
```
```js
data() {
  return {
    selectedTab: ["1", "2", "3"]
  };
}
```


<h2>设置仅限单个展开</h2>

预览

<clientOnly>
  <collapse-demo-2></collapse-demo-2>
</clientOnly>

代码

```html
<b-collapse :selected.sync="selectedTab" single>
  <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
  <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
  <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
</b-collapse>
```
```js
data() {
  return {
    selectedTab: ["1"]
  };
}
```