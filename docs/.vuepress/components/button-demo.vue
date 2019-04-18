<template>
  <div>
    <b-button>默认按钮</b-button>
    <b-button icon="settings">默认按钮</b-button>
    <b-button :loading="true">默认按钮</b-button>
    <b-button disabled>默认按钮</b-button>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "b-button": Button
  }
};
</script>
