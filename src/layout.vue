<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BueLayout',
  data(){
    return {
      layoutClass:{
        hasAside: false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'BueAside'){
        this.layoutClass.hasAside = true
      }
      
    })
  }
}
</script>


<style lang="scss" scoped>
.layout{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid red;
  &.hasAside{
    flex-direction: row;
  }
}
</style>
