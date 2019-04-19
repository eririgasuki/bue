<template>
  <div>
    <b-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <b-aside style=" background:#ddd; width:200px; color: black;">aside</b-aside>
      <b-layout>
        <b-header style="height: 50px; background:lightskyblue;">header</b-header>
        <b-content style="height: 100px; background:deepskyblue;">content</b-content>
        <b-footer style="height: 50px; background:lightskyblue;">footer</b-footer>
      </b-layout>
    </b-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
import Aside from "../../../src/aside";

export default {
  components: {
    "b-layout": Layout,
    "b-header": Header,
    "b-footer": Footer,
    "b-content": Content,
    "b-aside": Aside
  }
};
</script>