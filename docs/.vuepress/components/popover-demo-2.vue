<template>
  <div>
    <b-popover trigger="hover">
      <b-button>上方弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="bottom" trigger="hover">
      <b-button>下方弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="left" trigger="hover">
      <b-button>左边弹出</b-button>
      <template slot="content">弹出内容</template>
    </b-popover>
    <b-popover position="right" trigger="hover">
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