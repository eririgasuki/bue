---
title: Popover
sidebarDepth: 2
---


# Popover

<h2>支持 HTML</h2>

预览

<clientOnly>
  <popover-demo-1></popover-demo-1>
</clientOnly>

代码

```html
<b-popover>
  <b-button>上方弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="bottom">
  <b-button>下方弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="left">
  <b-button>左边弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="right">
  <b-button>右边弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
```

<h2>将触发方式改为 hover</h2>

预览

<clientOnly>
  <popover-demo-2></popover-demo-2>
</clientOnly>

代码

```html
<b-popover trigger="hover">
  <b-button>上方弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="bottom" trigger="hover">
  <b-button>下方弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="left" trigger="hover">
  <b-button>左边弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
<b-popover position="right" trigger="hover">
  <b-button>右边弹出</b-button>
  <template slot="content">弹出内容</template>
</b-popover>
```