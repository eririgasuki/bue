<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BueTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    });
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 0.3s;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>
