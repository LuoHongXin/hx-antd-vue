<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="提示型" detail="状态提示，包含「中立信息、成功、警示、错误」四种状态" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button
          @click="
            $YInfo({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >提示</y-button
        >
        <y-button
          @click="
            $YSuccess({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >成功</y-button
        >
        <y-button
          @click="
            $YError({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >失败</y-button
        >
        <y-button
          @click="
            $YWarning({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >警告</y-button
        >
      </div>
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
  name: 'Message',
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalMove: true,
      html: `<div>
        <y-button
          @click="
            $YInfo({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >提示</y-button
        >
        <y-button
          @click="
            $YSuccess({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >成功</y-button
        >
        <y-button
          @click="
            $YError({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >失败</y-button
        >
        <y-button
          @click="
            $YWarning({
              title: '标题',
              content: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
            })
          "
          >警告</y-button
        >
      </div>`,
    };
  },
};
</script>
<style lang="less" scoped>
.y-btn {
  margin-left: 8px;
}
</style>
