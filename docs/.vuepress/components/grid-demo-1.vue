<template>
  <div>
    <b-row class="demoRow">
      <b-col span="8">
        <div class="demoCol">8</div>
      </b-col>
      <b-col span="8">
        <div class="demoCol">8</div>
      </b-col>
      <b-col span="8">
        <div class="demoCol">8</div>
      </b-col>
    </b-row>
    <b-row class="demoRow">
      <b-col span="6">
        <div class="demoCol">6</div>
      </b-col>
      <b-col span="6">
        <div class="demoCol">6</div>
      </b-col>
      <b-col span="6">
        <div class="demoCol">6</div>
      </b-col>
      <b-col span="6">
        <div class="demoCol">6</div>
      </b-col>
    </b-row>
    <b-row class="demoRow">
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
      <b-col span="4">
        <div class="demoCol">4</div>
      </b-col>
    </b-row>
    <b-row class="demoRow">
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
      <b-col span="2">
        <div class="demoCol">2</div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
  components: {
    "b-row": Row,
    "b-col": Col
  }
};
</script>
