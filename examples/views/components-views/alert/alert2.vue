<template>
  <div>
    <funTitleDetail title="带标题" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-alert
        type="success"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="成功信息"
      ></y-alert>
      <y-alert
        type="info"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="帮助信息"
      ></y-alert>
      <y-alert
        type="warning"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="警示信息"
      >
      </y-alert>
      <y-alert
        type="error"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="错误信息"
      ></y-alert>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code> 
    </pre>
  </div>
</template>
<script>
export default {
  name: 'alert2',
  data() {
    return {
      html: `<y-alert
        type="success"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="成功信息"
      ></y-alert>
      <y-alert
        type="info"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="帮助信息"
      ></y-alert>
      <y-alert
        type="warning"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="警示信息"
      >
      </y-alert>
      <y-alert
        type="error"
        description="这里是一段简明扼要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。"
        show-icon
        closable
        message="错误信息"
      ></y-alert>`,
    };
  },
};
</script>
<style lang="less" scoped>
.y-alert {
  margin-bottom: 14px;
}
</style>
