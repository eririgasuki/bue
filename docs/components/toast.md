---
title: Toast
sidebarDepth: 2
---


# Toast

<h2>设置弹出位置</h2>

预览

<clientOnly>
  <popover-demo-1></popover-demo-1>
</clientOnly>

代码

```
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