<template>
  <div>
    <b-input v-model="value"></b-input>
    <div>value: {{value}}</div>
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: {
    "b-input": Input
  },
  data() {
    return {
      value: "1"
    };
  }
};
</script>
