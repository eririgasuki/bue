---
title: Input
sidebarDepth: 2
---


# Input

<h2>简单用法</h2>

预览

<clientOnly>
  <input-demo-1></input-demo-1>
</clientOnly>

代码

```
<b-input></b-input>
<b-input value="中文"></b-input>
<b-input value="中文" disabled></b-input>
<b-input value="中文" readonly></b-input>
<b-input value="BueInput" error="invalid value"></b-input>
```

<h2>双向绑定</h2>

预览

<clientOnly>
  <input-demo-2></input-demo-2>
</clientOnly>

代码

```
<b-input v-model="value"></b-input>
<div>value: {{value}}</div>

data() {
  return {
    value: "1"
  };
}
```

