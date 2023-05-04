<template>
  <div>
    <title-detail title="注意" detail="Select选择器checkbox模式下所有api 事件都不同， 使用请切换checkboxSelect选择器tag 查看api" />
    <a-tabs type="card">
      <a-tab-pane key="1" tab="Select选择器">
        <NormalSelect />
        <api-table :data="tableData" title="Select API"></api-table>
        <api-table :data="tableDataFn" title="Select 事件"></api-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="checkboxSelect选择器">
        <CheckboxSelect />
      </a-tab-pane>
      <a-tab-pane key="3" tab="nameSelect具名选择器">
        <NameSelect />
      </a-tab-pane>
      <a-tab-pane key="4" tab="SearchSelect">
        <SearchSelect />
      </a-tab-pane>
      <a-tab-pane key="5" tab="InfiniteSelect大数据下拉框">
        <InfiniteSelect />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import NormalSelect from './normalSelect.vue';
import CheckboxSelect from './checkboxSelect';
import NameSelect from './nameSelect.vue';
import SearchSelect from './searchSelect';
import InfiniteSelect from './InfiniteSelect';
export default {
  name: 'Select',
  components: {
    NormalSelect,
    CheckboxSelect,
    NameSelect,
    SearchSelect,
    InfiniteSelect,
  },
  data() {
    return {
      tableData: [
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: '单选s 多选xl',
        },
        {
          params: 'tooltip',
          explain: '是否显示tooltip，只有在设置options构造数据源时生效',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'placement',
          explain: '显示tooltip时候的方向（参考y-tooltip）',
          type: 'string',
          default: 'right',
        },
        {
          params: 'checkbox',
          explain: '显示 checkbox',
          type: 'boolen',
          default: 'false',
        },
        {
          params: 'getPopupContainer',
          explain: '默认渲染父节点上（parentNode），可修改渲染body上',
          type: 'Function(triggerNode)',
          default: 'triggerNode => triggerNode.parentNode || document.body（防止出问题加个body）',
        },
        {
          params: 'suffixIcon',
          explain: '自定义的选择框后缀图标',
          type: 'VNode | slot',
        },
        { params: 'allowClear', explain: '支持清除', type: 'boolean', default: 'true' },
        {
          params: 'removeIcon',
          explain: '自定义的多选框清除图标',
          type: 'VNode | slot',
        },
        {
          params: 'clearIcon',
          explain: '自定义的多选框清空图标',
          type: 'VNode | slot',
        },
        {
          params: 'menuItemSelectedIcon',
          explain: '自定义当前选中的条目图标',
          type: 'VNode | slot',
        },
        {
          params: 'value(v-model)',
          explain: '数据判定',
          type: 'string | string[ ] | number | number[ ] ',
        },
        {
          params: 'defaultOpen',
          explain: '是否默认展开下拉菜单',
          type: '	boolean',
          default: 'false',
        },
        {
          params: 'open',
          explain: '是否展开下拉菜单',
          type: '	boolean',
        },
        {
          params: 'options',
          explain: 'options 数据，如果设置则不需要手动构造 selectOption 节点',
          type: 'array',
        },
        {
          params: 'optionsKey',
          explain: '设置选项的key，默认为value，若有同value，却需要根据对象其它属性作key可进行设置',
          type: 'String',
          default: 'value',
        },
        {
          params: 'mode',
          explain: '支持多选（当设置 checkbox  时自动变为 多选）',
          type: "'default' | 'multiple' | 'tags' | 'combobox'",
          default: 'default',
        },
        {
          params: 'size',
          explain: '选择框大小，可选 large small',
          type: 'string',
          default: 'default',
        },
        {
          params: 'showArrow',
          explain: '是否显示下拉小箭头',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'showSearch',
          explain: '使单选模式可搜索',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'placeholder',
          explain: '选择框默认文字',
          type: '	string|slot',
        },
        {
          params: 'optionLabelProp',
          explain: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',
          type: 'string',
          default: 'children （combobox 模式下为 value）',
        },
        {
          params: 'optionFilterProp',
          explain: '搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索',
          type: 'string',
          default: 'value',
        },
        {
          params: 'notFoundContent',
          explain: '当下拉列表为空时显示的内容',
          type: 'string|slot',
          default: 'Not Found',
        },
        {
          params: 'maxTagTextLength',
          explain: '最大显示的 tag 文本长度',
          type: 'number',
        },
        {
          params: 'maxTagPlaceholder',
          explain: '隐藏 tag 时显示的内容',
          type: 'slot/function(omittedValues)',
        },
        {
          params: 'maxTagCount',
          explain: '最多显示多少个 tag',
          type: 'number',
        },
        {
          params: 'labelInValue',
          explain: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'firstActiveValue',
          explain: '默认高亮的选项',
          type: 'string|string[ ]',
        },
        {
          params: 'filterOption',
          explain:
            '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
          type: 'boolean or function(inputValue, option)',
          default: 'true',
        },
        {
          params: 'dropdownMenuStyle',
          explain: 'dropdown 菜单自定义样式',
          type: 'object',
        },
        {
          params: 'dropdownStyle',
          explain: '下拉菜单的 style 属性',
          type: 'object',
        },
        {
          params: 'dropdownClassName	',
          explain: '下拉菜单的 className 属性',
          type: 'string',
        },
        {
          params: 'dropdownMatchSelectWidth	',
          explain: '下拉菜单和选择器同宽',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'defaultActiveFirstOption',
          explain: '是否默认高亮第一个选项。',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'autoFocus',
          explain: '默认获取焦点',
          type: 'boolean',
          default: 'false',
        },
      ],
      tableDataFn: [
        {
          params: 'blur',
          explain: '失去焦点的时回调',
          type: 'function',
        },
        {
          params: 'change',
          explain: '选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数',
          type: 'function(value, option:Option/Array<Option>)',
        },
        {
          params: 'deselect',
          explain: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效',
          type: 'function(value，option:Option)',
        },
        {
          params: 'focus',
          explain: '获得焦点时回调',
          type: 'function',
        },
        {
          params: 'inputKeydown',
          explain: '键盘按下时回调',
          type: 'function',
        },
        {
          params: 'mouseenter',
          explain: '鼠标移入时回调',
          type: 'function',
        },
        {
          params: 'mouseleave',
          explain: '鼠标移出时回调',
          type: 'function',
        },
        {
          params: 'popupScroll',
          explain: '下拉列表滚动时的回调',
          type: 'function',
        },
        {
          params: 'search',
          explain: '文本框值变化时回调',
          type: 'function(value: string)',
        },
        {
          params: 'select',
          explain: '被选中时调用，参数为选中项的 value (或 key) 值',
          type: 'function(value, option:Option)',
        },
        {
          params: 'dropdownVisibleChange',
          explain: '展开下拉菜单的回调',
          type: 'function(open)',
        },
      ],
    };
  },
};
</script>
