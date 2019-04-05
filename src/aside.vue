<template>
  <transition name="slide">
    <div class="aside" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BueAside",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="scss" scoped>
.aside {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.silde-enter-active,
.slide-leave-active {
  transition: all .5s;
}
.slide-enter,
.silde-leave-to {
  margin-left: -100%;
}
</style>
