<template>
  <div class="row" :style=RowStyle>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BueRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    RowStyle() {
      let {gutter} = this
      return {
        marginRight: -gutter / 2 + "px",
        marginLeft: -gutter / 2 + "px"
      };
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
