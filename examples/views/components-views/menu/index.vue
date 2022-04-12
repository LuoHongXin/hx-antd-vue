<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Menu 菜单" detail="菜单是用户的GPS(Global Positioning System)，用户依赖导航在各个页面中进行跳转。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <declareList title="不适用" :value="declareList2" />
    <menu1 />
    <menu2 />
    <api-table title="Menu API" :data="tableData"></api-table>
    <api-table title="Menu 事件" :data="tableData2"></api-table>
    <api-table title="Menu.Item API" :data="tableData3"></api-table>
    <api-table title="Menu.SubMenu API (Menu.SubMenu 的子元素必须是 MenuItem 或者 SubMenu.)" :data="tableData4"></api-table>
    <api-table title="SubMenu 事件" :data="tableData5"></api-table>
    <api-table title="Menu.ItemGroup API (Menu.ItemGroup 的子元素必须是 MenuItem)" :data="tableData6"></api-table>
  </div>
</template>
<script>
import menu1 from './menu1.vue';
import menu2 from './menu2.vue';
export default {
  name: 'Mydropdown',
  components: {
    menu1,
    menu2,
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
          params: 'defaultOpenKeys',
          explain: '初始展开的 SubMenu 菜单项 key 数组',
          type: '',
          default: '',
        },
        {
          params: 'defaultSelectedKeys',
          explain: '初始选中的菜单项 key 数组',
          type: 'string[]',
          default: '',
        },
        {
          params: 'forceSubMenuRender',
          explain: '在子菜单展示之前就渲染进 DOM',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'inlineCollapsed',
          explain: 'inline 时菜单是否收起状态',
          type: 'boolean',
          default: '-',
        },
        {
          params: 'inlineIndent',
          explain: 'inline 模式的菜单缩进宽度',
          type: 'number',
          default: '24',
        },
        {
          params: 'mode',
          explain: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
          type: '	string: vertical vertical-right horizontal inline',
          default: 'vertical',
        },
        {
          params: 'multiple',
          explain: '是否允许多选',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'openKeys(.sync)',
          explain: '当前展开的 SubMenu 菜单项 key 数组',
          type: 'string[]',
          default: '',
        },
        {
          params: 'selectable',
          explain: '是否允许选中',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'selectedKeys(v-model)',
          explain: '当前选中的菜单项 key 数组',
          type: 'string[]',
          default: '',
        },
        {
          params: 'subMenuCloseDelay',
          explain: '用户鼠标离开子菜单后关闭延时，单位：秒',
          type: 'number',
          default: '0.1',
        },
        {
          params: 'subMenuOpenDelay',
          explain: '用户鼠标进入子菜单后开启延时，单位：秒',
          type: 'number',
          default: '0',
        },
        {
          params: 'theme',
          explain: '主题颜色',
          type: 'string: light dark',
          default: 'light',
        },
        {
          params: 'overflowedIndicator',
          explain: '自定义 Menu 折叠时的图标',
          type: 'DOM',
          default: '<span>···</span>',
        },
      ],
      tableData2: [
        {
          params: 'click',
          explain: '点击 MenuItem 调用此函数',
          type: '	function({ item, key, keyPath })',
        },
        {
          params: 'deselect',
          explain: '取消选中时调用，仅在 multiple 生效',
          type: '	function({ item, key, selectedKeys })',
        },
        {
          params: 'openChange',
          explain: 'SubMenu 展开/关闭的回调',
          type: '	function(openKeys: string[])',
        },
        {
          params: 'select',
          explain: '被选中时调用',
          type: '	function({ item, key, selectedKeys })',
        },
      ],
      tableData3: [
        {
          params: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'key',
          explain: 'item 的唯一标志',
          type: 'string',
          default: '',
        },
        {
          params: 'title',
          explain: '设置收缩时展示的悬浮标题',
          type: 'string',
          default: '',
        },
      ],
      tableData4: [
        {
          params: 'popupClassName',
          explain: '子菜单样式',
          type: 'string',
          default: '',
        },
        {
          params: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'key',
          explain: '唯一标志',
          type: 'string',
          default: '',
        },
        {
          params: 'title',
          explain: '子菜单项值',
          type: 'string|slot',
          default: '',
        },
      ],
      tableData5: [
        {
          params: 'titleClick',
          explain: '点击子菜单标题',
          type: '	({ key, domEvent })',
          default: '',
        },
      ],
      tableData6: [
        {
          params: 'title',
          explain: '分组标题',
          type: 'string||function|slot	',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
