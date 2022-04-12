<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Popover 气泡卡片" detail="展示比文字提示更多的内容" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-popover title="Title">
        <template slot="content">
          <div class="content">内容区</div>
        </template>
        <y-button type="primary">
          有标题
        </y-button>
      </y-popover>
      <y-popover>
        <template slot="content">
          <div class="content">内容区</div>
        </template>
        <y-button type="primary">
          无标题
        </y-button>
      </y-popover>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Mytooltip',
  components: {},
  data() {
    return {
      html: `<y-popover title="Title">
        <template slot="content">
          <div class="content">内容区</div>
        </template>
        <y-button type="primary">
          有标题
        </y-button>
      </y-popover>
      <y-popover>
        <template slot="content">
          <div class="content">内容区</div>
        </template>
        <y-button type="primary">
          无标题
        </y-button>
      </y-popover>`,
      tableData: [
        {
          params: 'content',
          explain: '卡片内容',
          type: 'string|slot|VNode',
          default: '',
        },
        {
          params: 'title',
          explain: '卡片标题',
          type: 'string|slot|VNode',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.content {
  border: 1px dashed #d9d9d9;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 33px 83px;
}
.ant-btn {
  margin-right: 24px;
}
</style>
