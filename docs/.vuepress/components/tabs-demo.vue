<template>
  <div>
    <b-tabs :selected="selected">
      <b-tabs-head>
        <b-tabs-item name="1">1</b-tabs-item>
        <b-tabs-item name="2">2</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="1">content 1</b-tabs-pane>
        <b-tabs-pane name="2">content 2</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "b-tabs": Tabs,
    "b-tabs-head": TabsHead,
    "b-tabs-body": TabsBody,
    "b-tabs-item": TabsItem,
    "b-tabs-pane": TabsPane
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
