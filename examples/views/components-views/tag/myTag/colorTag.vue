<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="状态标签" detail="通过不同颜色表示不同的状态" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-tag color>等待中</y-tag>
      <y-tag color="green">成功</y-tag>
      <y-tag color="geekblue">正常/进行中</y-tag>
      <y-tag color="red">错误/失败</y-tag>
      <y-tag color="gold">警示/提示</y-tag>
      <y-tag color="volcano">更严重的警示</y-tag>
      <a-divider />
      <y-tag status="waiting">等待中</y-tag>
      <y-tag status="success">成功</y-tag>
      <y-tag status="normal">正常/进行中</y-tag>
      <y-tag status="error">错误/失败</y-tag>
      <y-tag status="warning">警示/提示</y-tag>
      <y-tag status="seriousWarning">更严重的警示</y-tag>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'ColorTag',
  data() {
    return {
      html: `
        <y-tag color>等待中</y-tag>
        <y-tag color="green">成功</y-tag>
        <y-tag color="geekblue">正常/进行中</y-tag>
        <y-tag color="red">错误/失败</y-tag>
        <y-tag color="gold">警示/提示</y-tag>
        <y-tag color="volcano">更严重的警示</y-tag>
        <a-divider />
        <y-tag status="waiting">等待中</y-tag>
        <y-tag status="success">成功</y-tag>
        <y-tag status="normal">正常/进行中</y-tag>
        <y-tag status="error">错误/失败</y-tag>
        <y-tag status="warning">警示/提示</y-tag>
        <y-tag status="seriousWarning">更严重的警示</y-tag>`,
    };
  },
};
</script>
