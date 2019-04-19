<template>
  <div>
    <b-popover>
      <b-button>上方弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="bottom">
      <b-button>下方弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="left">
      <b-button>左边弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="right">
      <b-button>右边弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";

export default {
  components: {
    "b-button": Button,
    "b-popover": Popover
  }
};
</script>