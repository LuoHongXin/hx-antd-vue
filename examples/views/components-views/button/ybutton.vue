<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="按钮" detail="按钮是一种命令组件，用于触发操作，点击后立即执行命令，用户能从按钮上清晰得预测出行为结果。" />
    <declareList :value="declareList2" title="何时不使用" />
    <declareList :value="declareList" />
    <h3 class="fun-title">代码演示</h3>
    <div v-for="item in buttonTypeList" :key="item.key">
      <!-- 组件展示 -->
      <funTitleDetail :title="item.text" :detail="item.explain"></funTitleDetail>
      <com-show>
        <div v-if="item.key === 'primary'">
          <y-button type="primary">{{ item.text }}</y-button>
          <y-button type="primary" icon="plus">{{ item.text }}</y-button>
          <y-button type="primary" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'default'">
          <y-button type="default">{{ item.text }}</y-button>
          <y-button type="default" icon="plus">{{ item.text }}</y-button>
          <y-button type="default" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'dashed'">
          <y-button type="dashed">{{ item.text }}</y-button>
          <y-button type="dashed" icon="plus">{{ item.text }}</y-button>
          <y-button type="dashed" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'danger'">
          <y-button type="danger">{{ item.text }}</y-button>
          <y-button type="danger" icon="delete">{{ item.text }}</y-button>
          <y-button type="danger" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'link'">
          <y-button type="link">{{ item.text }}</y-button>
          <y-button type="link" icon="plus">{{ item.text }}</y-button>
          <y-button type="link">展开<a-icon type="down"/></y-button>
          <y-button type="link">收起<a-icon type="up"/></y-button>
          <y-button type="link" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'text'">
          <y-button type="text">{{ item.text }}</y-button>
          <y-button type="text" icon="plus">{{ item.text }}</y-button>
          <y-button type="text" disabled>{{ item.text }}</y-button>
        </div>
        <div v-else-if="item.key === 'icon'">
          <y-button type="primary" icon="plus"></y-button>
          <y-button icon="fresh"></y-button>
          <y-button icon="setting"></y-button>
          <y-button icon="fresh" class="no-bg"></y-button>
          <y-button icon-class="copy" class="no-bg"></y-button>
        </div>
      </com-show>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html"  v-text="item.html">
        </code>
        </pre>
    </div>
    <api-table :data="tableData"></api-table>
    <api-table title="事件" :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Ybutton',
  data() {
    return {
      buttonTypeList: [
        {
          key: 'primary',
          text: '主要按钮',
          html: `<y-button type="primary">{{ item.text }}</y-button>
      <y-button type="primary" icon="plus">{{ item.text }}</y-button>
      <y-button type="primary" disabled>{{ item.text }}</y-button>`,
          explain:
            '用于强调的核心操作；可独立使用，也可与其他按钮搭配使用（除图标按钮）；一个按钮区内最多一个主要按钮，整个页面可能存在多个主要按钮；',
        },
        {
          key: 'default',
          text: '次要按钮',
          html: `<y-button type="default">{{ item.text }}</y-button>
      <y-button type="default" icon="plus">{{ item.text }}</y-button>
      <y-button type="default" disabled>{{ item.text }}</y-button>`,
          explain: '次于主要按钮，用于非主要动作；可独立使用，也可以与其他按钮搭配使用（除图标按钮）；',
        },
        {
          key: 'text',
          text: '文字按钮',
          html: `<y-button type="text">{{ item.text }}</y-button>
      <y-button type="text" icon="plus">{{ item.text }}</y-button>`,
          explain: '视觉上最轻量；可独立使用，也可与同类/主要按钮/次要按钮搭配使用；高亮的文字按钮常用于表格操作列；',
        },
        {
          key: 'link',
          text: '文字按钮（高亮）',
          html: `<y-button type="link">{{ item.text }}</y-button>
      <y-button type="link" icon="plus">{{ item.text }}</y-button>
      <y-button type="link">展开<a-icon type="down"/></y-button>
      <y-button type="link">收起<a-icon type="up"/></y-button>`,
          explain: '视觉上最轻量；可独立使用，也可与同类/主要按钮/次要按钮搭配使用；高亮的文字按钮常用于表格操作列；',
        },
        {
          key: 'dashed',
          text: '虚线按钮',
          html: `<y-button type="dashed">{{ item.text }}</y-button>
      <y-button type="dashed" icon="plus">{{ item.text }}</y-button>`,
          explain: '引导用户在一个区域中添加内容，常用于表单页当中；不与其他类型的按钮搭配使用；',
        },
        {
          key: 'danger',
          text: '危险按钮',
          html: `<y-button type="danger">{{ item.text }}</y-button>
      <y-button type="danger" icon="delete">{{ item.text }}</y-button>`,
          explain: '警示用户该操作存在风险，常用于类似「删除」等危险操作；可独立使用，也可与其他按钮搭配使用（除图标按钮）；',
        },
        {
          key: 'icon',
          text: '图标按钮',
          html: `<y-button type="primary" icon="plus"></y-button>
      <y-button icon="fresh"></y-button>
      <y-button icon="setting"></y-button>
      <y-button icon="fresh" class="no-bg"></y-button>
      <y-button icon-class="copy" class="no-bg"></y-button>`,
          explain: '视觉上占位空间少；可独立使用，也仅可与同类搭配使用；必须有 Tooltip 提示按钮含义；',
        },
      ],
      declareList: [
        '按钮代表的是一种行为动作，链接代表一种导览，具备导航属性',
        '在按钮中加图标时，图标必须能够帮助传达信息，不能只起到装饰作用',
        '一个按钮区内最多一个主要按钮，整个页面可能存在多个主要按钮',
      ],
      declareList2: ['跳转到系统其他页面', '打开外部站点', '跳到同一页面的其他位置', '以上情况使用 Link 文字链接'],
      tableData: [
        { params: 'disabled', explain: '按钮失效状态', type: 'boolean', default: 'false' },
        { params: 'icon', explain: '设置按钮的图标类型', type: 'string', default: '' },
        { params: 'icon-class', explain: '使用自定义的矢量图标', type: 'string', default: '' },
        { params: 'size', explain: '设置按钮大小，可选值为 small default large 或者不设', type: 'string', default: 'default' },
        { params: 'type', explain: '设置按钮类型，可选值为 primary dashed danger link 或者不设', type: 'string', default: 'default' },
        { params: 'block', explain: '将按钮宽度调整为其父宽度的选项', type: 'boolean', default: 'false' },
        {
          params: 'loading',
          explain: '设置按钮载入状态',
          type: 'boolean | { delay: number }',
          default: 'false',
        },
      ],
      tableData2: [{ params: 'click', explain: '点击按钮时的回调', type: '(event) => void', default: '' }],
    };
  },
};
</script>
<style lang="less" scoped>
.ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
