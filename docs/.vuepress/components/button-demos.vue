<template>
  <div>
    <b-button>默认按钮</b-button>
    <b-button icon="settings">默认按钮</b-button>
    <b-button :loading="true">默认按钮</b-button>
    <b-button disabled>默认按钮</b-button>
    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "b-button": Button
  },
  data() {
    return {
      content: `
      <b-button>默认按钮</b-button>
      <b-button icon="settings">默认按钮</b-button>
      <b-button :loading="true">默认按钮</b-button>
      <b-button disabled>默认按钮</b-button>
      `
    };
  }
};
</script>
