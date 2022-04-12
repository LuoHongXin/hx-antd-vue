<template>
  <div>
    <router-view />
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-javascript" v-text="js">
        </code>
    </pre>
    <div v-if="$route.name === 'formPage'">
      <funTitleDetail title="box1" detail="表单盒子"></funTitleDetail>
      <pre class="line-numbers">
        <code class="language-html" v-text="htmlObj.box1">
        </code>
        <code class="language-javascript" v-text="jsObj.box1">
        </code>
    </pre>
      <funTitleDetail title="box2" detail="表格盒子"></funTitleDetail>
      <pre class="line-numbers">
        <code class="language-html" v-text="htmlObj.box2">
        </code>
        <code class="language-javascript" v-text="jsObj.box2">
        </code>
    </pre>
    </div>
  </div>
</template>
<script>
import mixins from './mixins';
import Prism from 'prismjs';
export default {
  name: 'PageViews',
  mixins: [mixins],
  computed: {
    html: {
      get() {
        return this.htmlObj[this.$route.name];
      },
    },
    js: {
      get() {
        return this.jsObj[this.$route.name];
      },
    },
  },
  updated() {
    setTimeout(() => {
      Prism.highlightAll(); //代码高亮渲染函数
    }, 0);
  },
};
</script>
<style lang="less" scoped>
.contanier {
  background-color: #fff;
  padding: 16px 24px;
}
</style>
