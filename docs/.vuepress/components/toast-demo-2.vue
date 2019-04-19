<template>
  <div>
    <b-button @click="onClickButton">上方弹出</b-button>
  </div>
</template>

<style>
.bue-toast {
  z-index: 30 !important;
}
</style>

<script>
import plugin from "../../../src/plugin";
import Button from "../../../src/button";
import Vue from "vue";

Vue.use(plugin);

export default {
  components: {
    "b-button": Button
  },
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
};
</script>