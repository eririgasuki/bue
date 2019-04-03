<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BueCol',
  props:{
    span:{
      type: [Number, String]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  background-color: #666666;
  border: 1px solid #000;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>
