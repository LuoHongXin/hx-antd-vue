<template>
  <a-layout-content style="padding: 10px 60px" id="LogView">
    <div v-html="html"></div>
  </a-layout-content>
</template>
<script>
// import log from '../../README.md';
export default {
  name: 'Log',
  data() {
    return {
      html: '',
    };
  },
  created() {
    // this.html = log;
  },
};
</script>
<style lang="less">
#LogView {
  // h1,
  // h2,
  // h3,
  // h4,
  // h5,
  // h6,
  // p,
  // pre
  div {
    * {
      display: none;
    }
    #myLog {
      display: block;
      * {
        display: block;
      }
    }
    // h1,
    // h2,
    // h3,
    // h4,
    // h5,
    // h6,
    // p,
    // pre {
    //   display: block;
    // }
  }
}
</style>
