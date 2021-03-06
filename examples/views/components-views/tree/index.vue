<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Tree 树形控件" detail="体现父子层级关系的信息组织方式。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <!-- 组件展示 -->
    <tree1 />
    <tree2 />
    <tree3 />
    <tree4 />
    <tree6 />
    <!-- <tree5 /> -->
    <api-table :data="tableData"></api-table>
    <api-table title="事件" :data="tableData2"></api-table>
    <api-table
      title="TreeNode props"
      detail="结点描述数据对象，是 treeNodes 中的一项，TreeNode 使用相同的 API。"
      :data="tableData3"
    ></api-table>
    <api-table title="DirectoryTree props" :data="tableData4"></api-table>
  </div>
</template>
<script>
import tree1 from './tree1.vue';
import tree2 from './tree2.vue';
import tree3 from './tree3.vue';
import tree4 from './tree4.vue';
import tree6 from './tree6.vue';
// import tree5 from './tree5.vue';

export default {
  name: 'MyTree',
  components: { tree1, tree2, tree3, tree4, tree6 },
  data() {
    return {
      declareList: [
        '任何需要通过层级组织的信息场景，如文件夹、组织架构、生物分类、国家地区等等。',
        'Tree 子项中的可操作元素只能通过鼠标操作，不可聚焦，它们应该是表示性的，键盘不能操作到',
      ],
      tableData: [
        {
          params: 'blockNode',
          explain: '是否节点占据一行',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'treeData',
          explain: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）',
          type: 'array&lt;{key, title, children, [disabled, selectable]}&gt;',
          default: '--',
        },
        {
          params: 'replaceFields',
          explain: '替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段',
          type: 'object',
          default: "{children:'children', title:'title', key:'key' }",
        },
        {
          params: 'autoExpandParent',
          explain: '是否自动展开父节点',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'checkable',
          explain: '节点前添加 Checkbox 复选框',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'checkedKeys(v-model)',
          explain:
            '（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置<code>checkable</code>和<code>checkStrictly</code>，它是一个有<code>checked</code>和<code>halfChecked</code>属性的对象，并且父子节点的选中与否不再关联',
          type: 'string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}',
          default: '[]',
        },
        {
          params: 'checkStrictly',
          explain: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联）',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'defaultCheckedKeys',
          explain: '默认选中复选框的树节点',
          type: 'string[] | number[]',
          default: '[]',
        },
        {
          params: 'defaultExpandAll',
          explain: '默认展开所有树节点',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'defaultExpandedKeys',
          explain: '默认展开指定的树节点',
          type: 'string[] | number[]',
          default: '[]',
        },
        {
          params: 'defaultExpandParent',
          explain: '默认展开父节点',
          type: 'bool',
          default: 'true',
        },
        {
          params: 'defaultSelectedKeys',
          explain: '默认选中的树节点',
          type: 'string[] | number[]',
          default: '[]',
        },
        {
          params: 'disabled',
          explain: '将树禁用',
          type: 'bool',
          default: 'false',
        },
        {
          params: 'draggable',
          explain: '设置节点可拖拽',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'expandedKeys(.sync)',
          explain: '（受控）展开指定的树节点',
          type: 'string[] | number[]',
          default: '[]',
        },
        {
          params: 'filterTreeNode',
          explain: '按需筛选树节点（高亮），返回 true',
          type: 'function(node)',
          default: '-',
        },
        {
          params: 'loadData',
          explain: '异步加载数据',
          type: 'function(node)',
          default: '-',
        },
        {
          params: 'loadedKeys',
          explain: '（受控）已经加载的节点，需要配合 <code>loadData</code> 使用',
          type: 'string[] | number[]',
          default: '[]',
        },
        {
          params: 'multiple',
          explain: '支持点选多个节点（节点本身）',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'selectable',
          explain: '是否可选中',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'selectedKeys(.sync)',
          explain: '（受控）设置选中的树节点',
          type: 'string[] | number[]',
          default: '-',
        },
        {
          params: 'showIcon',
          explain: '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'switcherIcon',
          explain: '自定义树节点的展开/折叠图标',
          type: 'slot',
          default: '-',
        },
        {
          params: 'showLine',
          explain: '是否展示连接线',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'title',
          explain: '标题',
          type: 'slot',
          default: '',
        },
      ],
      tableData2: [
        {
          params: 'check',
          explain: '点击复选框触发',
          type: 'function(checkedKeys, e:{checked: bool, checkedNodes, node, event})',
        },
        {
          params: 'dragend',
          explain: 'dragend 触发时调用',
          type: 'function({event, node})',
        },
        {
          params: 'dragenter',
          explain: 'dragenter 触发时调用',
          type: 'function({event, node, expandedKeys})',
        },
        {
          params: 'dragleave',
          explain: 'dragleave 触发时调用',
          type: 'function({event, node})',
        },
        {
          params: 'dragover',
          explain: 'dragover 触发时调用',
          type: 'function({event, node})',
        },
        {
          params: 'dragstart',
          explain: '开始拖拽时调用',
          type: 'function({event, node})',
        },
        {
          params: 'drop',
          explain: 'drop 触发时调用',
          type: 'function({event, node, dragNode, dragNodesKeys})',
        },
        {
          params: 'expand',
          explain: '展开/收起节点时触发',
          type: 'function(expandedKeys, {expanded: bool, node})',
        },
        {
          params: 'load',
          explain: '节点加载完毕时触发',
          type: 'function(loadedKeys, {event, node})',
        },
        {
          params: 'rightClick',
          explain: '响应右键点击',
          type: 'function({event, node})',
        },
        {
          params: 'select',
          explain: '点击树节点触发',
          type: 'function(selectedKeys, e:{selected: bool, selectedNodes, node, event})',
        },
      ],
      tableData3: [
        {
          params: 'class',
          explain: '节点的 class',
          type: 'string',
          default: '-',
        },
        {
          params: 'style',
          explain: '节点的 style',
          type: 'string|object',
          default: '-',
        },
        {
          params: 'checkable',
          explain: '当树为 checkable 时，设置独立节点是否展示 Checkbox',
          type: 'boolean',
          default: '-',
        },
        {
          params: 'disableCheckbox',
          explain: '禁掉 checkbox',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'disabled',
          explain: '禁掉响应',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'icon',
          explain: '自定义图标。可接收组件，props 为当前节点 props',
          type: 'slot|slot-scope',
          default: '-',
        },
        {
          params: 'isLeaf',
          explain: '设置为叶子节点(设置了<code>loadData</code>时有效)',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'key',
          explain:
            '被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！',
          type: 'string | number',
          default: '内部计算出的节点位置',
        },
        {
          params: 'selectable',
          explain: '设置节点是否可被选中',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'title',
          explain: '标题',
          type: 'string|slot|slot-scope',
          default: "'---'",
        },
        {
          params: 'slots',
          explain: "使用 treeNodes 时，可以通过该属性配置支持 slot 的属性，如 <code>slots: { title: 'XXX'}</code>",
          type: 'object',
          default: '-',
        },
        {
          params: 'scopedSlots',
          explain: "使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 <code>scopedSlots: { title: 'XXX'}</code>",
          type: 'object',
          default: '-',
        },
        {
          params: 'on',
          explain: '事件对象，仅在 treeNodes 使用方式中生效，如<code>{click: () =&gt; {}}</code>',
          type: 'object',
          default: "'---'",
        },
      ],
      tableData4: [
        {
          params: 'expandAction',
          explain: "目录展开逻辑，可选 false 'click' 'dblclick'	",
          type: 'string',
          default: "'click",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
