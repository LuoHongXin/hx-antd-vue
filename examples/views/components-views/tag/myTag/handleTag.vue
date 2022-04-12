<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="可操作标签" detail="有交互行为" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-tag-action v-model="tagData" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            data() {
              return {
                tagData: ['标签1', '标签2', '标签3'],
              };
            },
          };
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'HandleTag',
  data() {
    return {
      tagData: ['标签1', '标签2', '标签3'],
      inputVisible: false,
      inputValue: '',
      html: `<y-tag-action v-model="tagData" />`,
    };
  },
};
</script>
