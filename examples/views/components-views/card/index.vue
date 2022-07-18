<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Card 卡片" detail="聚合同类信息的容器，使信息分类更加明确。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <card1 />
    <card2 />
    <card3 />
    <api-table title="Card API" :data="tableData"></api-table>
    <api-table title="Menu 事件" :data="tableData2"></api-table>
    <api-table title="Card.Meta  API" :data="tableData3"></api-table>
  </div>
</template>
<script>
import card1 from './card1.vue';
import card2 from './card2.vue';
import card3 from './card3.vue';
export default {
  name: 'Mydropdown',
  components: {
    card1,
    card2,
    card3,
  },
  data() {
    return {
      declareList: [
        '单个卡片内需是相同属性、类型的内容，或针对同一对象的信息聚合',
        '同类卡片组合使用时，样式及交互应保持一致',
        '多个卡片嵌套不宜过于复杂，建议卡片嵌套不超过两层',
        '卡片通常按照栅格的规则进行排列',
        '当整个卡片可点击的时候，需给出明确指示',
      ],
      tableData: [
        {
          params: 'titleBorderBottom',
          explain: '控制标题下是否有底边框,设置为false则没有边框',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'actions',
          explain: '卡片操作组，位置在卡片底部',
          type: 'slots',
          default: '-',
        },
        {
          params: 'activeTabKey',
          explain: '当前激活页签的 key',
          type: 'string',
          default: '-',
        },
        {
          params: 'headStyle',
          explain: '自定义标题区域样式',
          type: 'object',
          default: '-',
        },
        {
          params: 'bodyStyle',
          explain: '内容区域自定义样式',
          type: 'object',
          default: '-',
        },
        {
          params: 'bordered',
          explain: '是否有边框',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'cover',
          explain: '卡片封面',
          type: 'slot',
          default: '-',
        },
        {
          params: 'defaultActiveTabKey',
          explain: '初始化选中页签的 key，如果没有设置 activeTabKey',
          type: 'string',
          default: '第一个页签',
        },
        {
          params: 'extra',
          explain: '卡片右上角的操作区域',
          type: 'string|slot',
          default: '-',
        },
        {
          params: 'hoverable',
          explain: '鼠标移过时可浮起',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'loading',
          explain: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'tabList',
          explain: '页签标题列表, 可以通过 scopedSlots 属性自定义 tab',
          type: `Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}>`,
          default: '-',
        },
        {
          params: 'tabBarExtraContent',
          explain: 'tab bar 上额外的元素',
          type: 'slot',
          default: '无',
        },
        {
          params: 'size',
          explain: 'card 的尺寸',
          type: 'default | small',
          default: 'default',
        },
        {
          params: 'title',
          explain: '卡片标题',
          type: 'string|slot',
          default: '-',
        },
        {
          params: 'type',
          explain: '卡片类型，可设置为 inner 或 不设置',
          type: 'string',
          default: '-',
        },
      ],
      tableData2: [
        {
          params: 'tabChange',
          explain: '页签切换的回调',
          type: '(key) => void',
          default: '-',
        },
      ],
      tableData3: [
        {
          params: 'avatar',
          explain: '头像/图标',
          type: 'slot',
          default: '-',
        },
        {
          params: 'description',
          explain: '描述内容',
          type: 'string|slot',
          default: '-',
        },
        {
          params: 'title',
          explain: '标题内容',
          type: 'string|slot',
          default: '-',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
