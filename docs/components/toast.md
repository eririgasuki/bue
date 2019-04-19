---
title: Toast
sidebarDepth: 2
---


# Toast

<h2>设置弹出位置</h2>

预览

<clientOnly>
  <toast-demo-1></toast-demo-1>
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

<h2>设置回调函数</h2>

预览

<clientOnly>
  <toast-demo-2></toast-demo-2>
</clientOnly>

代码

```html
<b-button @click="onClickButton">上方弹出</b-button>
```
```js
methods:{
  onClickButton(){
    this.$toast('这里设置 bue-toast 内容',{
      closeButton:{
        text:'关闭 toast',
        callback:()=>{
          alert('关闭后执行回调函数');
        }
      }
    })
  }
}
```

<h2>支持 HTML</h2>

预览

<clientOnly>
  <toast-demo-3></toast-demo-3>
</clientOnly>

代码

```html
<b-button @click="onClickButton">上方弹出</b-button>
```
```js
methods: {
  onClickButton() {
    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
      enableHtml: true
    });
  }
}
```