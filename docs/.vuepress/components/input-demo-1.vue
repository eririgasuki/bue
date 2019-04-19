<template>
  <div>
    <b-input></b-input>
    <b-input value="BueInput"></b-input>
    <b-input value="BueInput" disabled></b-input>
    <b-input value="BueInput" readonly></b-input>
    <b-input value="BueInput" error="invalid value"></b-input>
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: {
    "b-input": Input
  }
};
</script>
