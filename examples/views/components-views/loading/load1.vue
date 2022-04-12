<template>
  <div>
    <funTitleDetail title="基本用法" detail="一个简单的 loading 状态。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-loading />
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
      html: `<y-loading />`,
    };
  },
};
</script>
