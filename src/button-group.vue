<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BueButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `b-button-group的子元素应该全是b-button，但你写的是${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.b-button-group {
  display: inline-flex;
  vertical-align: top;
  > .b-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
