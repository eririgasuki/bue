<template>
  <div class="col" :class="ColClass" :style="ColStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BueCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: {
        type: [Number, String]
      }
    };
  },
  computed: {
    ColClass() {
      let { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
    ColStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
