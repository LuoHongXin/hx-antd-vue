<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Dropdown 下拉菜单" detail="当选项 / 操作过多时，可使用下拉菜单收纳操作选项，保持界面清晰整洁。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <declareList title="不适用" :value="declareList2" />
    <dropdown1 />
    <dropdown2 />
    <dropdown3 />
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import dropdown1 from './dropdown1.vue';
import dropdown2 from './dropdown2.vue';
import dropdown3 from './dropdown3.vue';
export default {
  name: 'Mydropdown',
  components: {
    dropdown1,
    dropdown2,
    dropdown3,
  },
  data() {
    return {
      declareList: [
        '触发器可为任意可交互的控件，如文字，按钮等等',
        '下拉菜单的操作（单页内）数量建议不超过 15 个',
        '危险选项通常位于选项列表的末尾，并在 Hover 状态下高亮显示为红色',
        '多层级下拉菜单最多 3 级，若超过须使用 Modal',
      ],
      declareList2: ['超过 3 层的多层级操作路径，届时应使用更稳定、操作区域更大的Modal', '选择场景下应使用Select，Menu是命令的集合。'],
      tableData: [
        {
          params: 'destroyPopupOnHide',
          explain: '关闭后是否销毁 Dropdown',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'disabled',
          explain: '菜单是否禁用',
          type: 'boolean',
          default: '-',
        },
        {
          params: 'getPopupContainer',
          explain: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
          type: 'Function(triggerNode)',
          default: '() => document.body',
        },
        {
          params: 'overlay(v-slot)',
          explain: '菜单',
          type: 'Menu 菜单组件',
          default: '-',
        },
        {
          params: 'overlayClassName',
          explain: '下拉根元素的类名称',
          type: 'string',
          default: '-',
        },
        {
          params: 'overlayStyle',
          explain: '下拉根元素的样式',
          type: 'object',
          default: '-',
        },
        {
          params: 'placement',
          explain: '菜单弹出位置',
          type: 'bottomLeft | bottom | bottomRight | topLeft | top | topRight',
          default: 'bottomLeft',
        },
        {
          params: 'trigger',
          explain: '触发下拉的行为, 移动端不支持 hover',
          type: 'Array<click|hover|contextmenu>	',
          default: "['hover']",
        },
        {
          params: 'visible(v-model)',
          explain: '菜单是否显示',
          type: 'boolean',
          default: '-',
        },
        {
          params: 'visibleChange',
          explain: '菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发',
          type: 'function(visible)',
          default: '-',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
