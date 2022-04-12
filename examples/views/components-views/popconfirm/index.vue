<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Popconfirm 气泡确认框" detail="点击元素时，在元素周围弹出气泡式确认框。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <!-- 组件展示 -->
    <com-show>
      <div class="popconfirm-box">
        <y-popconfirm
          v-for="place in [
            'top',
            'left',
            'right',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
            'leftTop',
            'leftBottom',
            'rightTop',
            'rightBottom',
          ]"
          :key="place"
          title="确定要删除[xxx]?"
          :placement="place"
        >
          <y-button>删除-{{ place }}</y-button>
        </y-popconfirm>
      </div>
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
  name: 'Mypopconfirm',
  components: {},
  data() {
    return {
      html: `<y-popconfirm
          v-for="place in [
            'top',
            'left',
            'right',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
            'leftTop',
            'leftBottom',
            'rightTop',
            'rightBottom',
          ]"
          :key="place"
          title="确定要删除[xxx]?"
          :placement="place"
        >
          <y-button>删除-{{ place }}</y-button>
        </y-popconfirm>`,
      declareList: [
        '操作需要用户二次确认，但希望对用户的干扰较小，相比模态对话框，气泡确认框在形式上更为轻量与便捷；',
        '适用于较为轻量的打断用户当前操作的场景，把打扰降到最低。',
        '文本信息应简洁有效，避免冗长赘述；',
      ],
      tableData: [
        {
          params: 'cancelText',
          explain: 'string|slot',
          type: 'string|slot',
          default: '取消',
        },
        {
          params: 'okText',
          explain: '确认按钮文字',
          type: 'string|slot',
          default: '确定',
        },
        {
          params: 'okType',
          explain: '确认按钮类型',
          type: 'string',
          default: 'primary',
        },
        {
          params: 'title',
          explain: '确认框的描述',
          type: 'string|slot',
          default: '无',
        },
        {
          params: 'icon',
          explain: '自定义弹出气泡 Icon 图标',
          type: 'vNode',
          default: '<a-icon type="question-circle" slot="icon" theme="filled" />',
        },
        {
          params: 'disabled',
          explain: '点击 Popconfirm 子元素是否弹出气泡确认框',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'cancel',
          explain: '点击取消的回调',
          type: 'function(e)',
        },
        {
          params: 'confirm',
          explain: '点击确认的回调',
          type: 'function(e)',
        },
        {
          params: 'visibleChange',
          explain: '显示隐藏的回调',
          type: 'function(visible)',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.popconfirm-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .y-popconfirm {
    margin: 0 80px 60px 0;
  }
}
</style>
