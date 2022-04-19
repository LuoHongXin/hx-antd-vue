<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Tab 选项卡" detail="选项卡是用于特定板块内，为同范畴内容提供不同类信息展示切换的组件。具有容纳、导航作用。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <normalTabs />
    <!-- <cardTabs /> -->
    <api-table :data="tableData"></api-table>
    <api-table title="事件" :data="tableData2"></api-table>
    <api-table title="Tabs.TabPane" :data="tableData3"></api-table>
  </div>
</template>
<script>
import normalTabs from './normalTabs.vue';
// import cardTabs from './cardTabs.vue';
export default {
  name: 'empty',
  components: {
    normalTabs,
    // cardTabs,
  },
  data() {
    return {
      declareList: [
        '尽量避免 Tab 内再嵌套 Tab',
        '点击Tab时不发生页面跳转，URL不改变（区别于导航）',
        '不要将需要同时查看的内容放在不同的切换项中，切换项需彼此独立',
        '切换项的数量不宜过多，切换项的总数建议不要超过 7 个',
        '单次只允许一个切换项被选中，默认选中左起第 1 个',
        '当某个切换项不可用时，呈 disable 态，可搭配 Tooltip 解释原因',
        '同一组切换项的样式需要保持一致（比如都是图标+文字）',
        '切换项不能只是图标，文字需完整展示，不可省略或折行',
      ],
      tableData: [
        {
          params: 'activeKey(v-model)',
          explain: '当前激活 tab 面板的 key',
          type: 'string|number',
          default: '-',
        },
        {
          params: 'animated',
          explain: '是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效',
          type: 'boolean | {inkBar:boolean, tabPane:boolean}',
          default: 'true, 当 type="card" 时为 false',
        },
        {
          params: 'defaultActiveKey',
          explain: '初始化选中面板的 key，如果没有设置 activeKey',
          type: 'string|number',
          default: '第一个面板',
        },
        {
          params: 'hideAdd',
          explain: '是否隐藏加号图标，在 type="editable-card" 时有效',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'size',
          explain: '大小，提供 large default 和 small 三种大小',
          type: 'string',
          default: 'default',
        },
        {
          params: 'tabBarExtraContent',
          explain: 'tab bar 上额外的元素',
          type: 'slot',
          default: '-',
        },
        {
          params: 'tabBarStyle',
          explain: 'tab bar 的样式对象',
          type: 'object',
          default: '-',
        },
        {
          params: 'tabPosition',
          explain: '	页签位置，可选值有 top right bottom left',
          type: 'string',
          default: 'top',
        },
        {
          params: 'type',
          explain: '页签的基本样式，可选 line、card editable-card 类型',
          type: 'string',
          default: 'line',
        },
        {
          params: 'tabBarGutter',
          explain: 'tabs 之间的间隙',
          type: 'number',
          default: '-',
        },
      ],
      tableData2: [
        {
          params: 'change',
          explain: '切换面板的回调',
          type: 'Function(activeKey) {}',
          default: '-',
        },
        {
          params: 'edit',
          explain: '新增和删除页签的回调，在 type="editable-card" 时有效',
          type: '	(targetKey, action): void',
          default: '-',
        },
        {
          params: 'nextClick',
          explain: 'next 按钮被点击的回调',
          type: 'Function',
          default: '-',
        },
        {
          params: 'prevClick',
          explain: 'prev 按钮被点击的回调',
          type: 'Function',
          default: '-',
        },
        {
          params: 'tabClick',
          explain: 'tab 被点击的回调',
          type: 'Function',
          default: '-',
        },
      ],
      tableData3: [
        {
          params: 'forceRender',
          explain: '被隐藏时是否渲染 DOM 结构',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'key',
          explain: '对应 activeKey',
          type: 'string',
          default: '-',
        },
        {
          params: 'tab',
          explain: '选项卡头显示文字',
          type: 'string|slot',
          default: '-',
        },
      ],
    };
  },
};
</script>
