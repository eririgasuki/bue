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
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      });
    }
  }
};
</script>