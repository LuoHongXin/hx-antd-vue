<template>
  <div>
    <funTitleDetail title="各种大小" detail="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-loading size="small" />
      <y-loading />
      <y-loading size="large" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'load1',
  data() {
    return {
      html: `<y-loading size="small" />
      <y-loading />
      <y-loading size="large" />`,
    };
  },
};
</script>
