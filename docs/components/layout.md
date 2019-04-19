---
title: Layout
sidebarDepth: 2
---


# Layout

<h2>简单布局</h2>

预览

<clientOnly>
  <layout-demo-1></layout-demo-1>
</clientOnly>

代码

```
<b-layout style="color: white; margin-bottom:50px;">
  <b-header style="height: 50px; background:lightskyblue;">header</b-header>
  <b-content style="height: 100px; background:deepskyblue;">content</b-content>
  <b-footer style="height: 50px; background:lightskyblue;">footer</b-footer>
</b-layout>
```

<h2>内侧边栏</h2>

预览

<clientOnly>
  <layout-demo-2></layout-demo-2>
</clientOnly>

代码

```
<b-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <b-header style="height: 50px; background:lightskyblue;">header</b-header>
  <b-layout>
    <b-aside style="height: 100px; background:#ddd; width:200px; color: black;">aside</b-aside>
    <b-content style="height: 100px; background:deepskyblue;">content</b-content>
  </b-layout>
  <b-footer style="height: 50px; background:lightskyblue;">footer</b-footer>
</b-layout>
```

<h2>外侧边栏</h2>

预览

<clientOnly>
  <layout-demo-3></layout-demo-3>
</clientOnly>

代码

```
<b-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <b-aside style=" background:#ddd; width:200px; color: black;">aside</b-aside>
  <b-layout>
    <b-header style="height: 50px; background:lightskyblue;">header</b-header>
    <b-content style="height: 100px; background:deepskyblue;">content</b-content>
    <b-footer style="height: 50px; background:lightskyblue;">footer</b-footer>
  </b-layout>
</b-layout>
```