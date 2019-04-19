<template>
  <div class="bue-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BueContent'
}
</script>


<style lang="scss" scoped>
.bue-content{
  flex-grow: 1
}
</style>
