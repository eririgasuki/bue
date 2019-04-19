<template>
  <div style="height: 209px">
    <b-collapse :selected.sync="selectedTab">
      <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
      <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
      <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
    </b-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    "b-collapse": Collapse,
    "b-collapse-item": CollapseItem
  },
  data() {
    return {
      selectedTab: ["1", "2", "3"]
    };
  }
};
</script>