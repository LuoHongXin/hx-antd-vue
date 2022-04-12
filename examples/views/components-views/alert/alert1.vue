<template>
  <div>
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-alert type="success" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>
      <y-alert type="info" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>
      <y-alert type="warning" show-icon closable>
        <div slot="message">这里是一段简明扼要的提示信息。<y-button type="link">查看详情</y-button></div>
      </y-alert>
      <y-alert type="error" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'alert1',
  data() {
    return {
      html: `<y-alert type="success" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>
      <y-alert type="info" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>
      <y-alert type="warning" show-icon closable>
        <div slot="message">这里是一段简明扼要的提示信息。<y-button type="link">查看详情</y-button></div>
      </y-alert>
      <y-alert type="error" show-icon closable message="这里是一段简明扼要的提示信息。"></y-alert>`,
    };
  },
};
</script>
<style lang="less" scoped>
.y-alert {
  margin-bottom: 14px;
}
</style>
