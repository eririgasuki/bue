<template>
  <div>
    <b-button @click="$toast('点击弹出提示')">上方弹出</b-button>
    <b-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</b-button>
    <b-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</b-button>
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
  }
};
</script>