<template>
  <div>
    <title-detail title="Transfer 穿梭框" detail="双栏穿梭选择框。" />
    <title-detail
      title="注意"
      detail="按照 Vue 最新的规范，所有的组件数组最好绑定 key。在 Transfer 中，dataSource里的数据值需要指定 key 值。对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。"
    />
    <span>如果你的数据没有这个属性，务必使用 rowKey 来指定数据列的主键。</span>
    <pre class="line-numbers">
        <code class="language-html" v-text="test">
        </code>
    </pre>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="穿梭框">
        <basis />
      </a-tab-pane>
      <a-tab-pane key="2" tab="表格穿梭框">
        <tabel />
      </a-tab-pane>
      <a-tab-pane key="3" tab="树穿梭框">
        <tree />
      </a-tab-pane>
    </a-tabs>
    <api-table :data="tableData"></api-table>
    <api-table :data="tableDataFn" title="事件"></api-table>
    <title-detail title="Render Props" detail="1.5.0 新增。Transfer 支持接收 children 自定义渲染列表，并返回以下参数：" />
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <title-detail title="children" detail="参考示例 #" />
    <pre class="line-numbers">
        <code class="language-html" v-text="html1">
        </code>
    </pre>
    <api-table :data="tableDataChildren"></api-table>
  </div>
</template>
<script>
import basis from './basisTransfer';
import tabel from './tabelTransfer';
import tree from './treeTransfer';
export default {
  name: 'myTransfer',
  components: { basis, tabel, tree },
  data() {
    return {
      test: `// 比如你的数据主键是 uid
      return <y-transfer :rowKey="record => record.uid" />;`,
      html: `{
        "props": {
          "direction": String,
          "disabled": Boolean,
          "filteredItems": Array,
          "selectedKeys": Array
        },
        "on": {
          "itemSelect": Function,
          "itemSelectAll": Function
        }
      }`,
      html1: `<a-transfer>
        <template
          slot="children"
          slot-scope="{
            props: {
              direction,
              filteredItems,
              selectedKeys,
              disabled: listDisabled
            }, on: {
              itemSelectAll,
              itemSelect,
            }
          }"
        >
          <your-component />
        <template>
      </a-transfer>`,
      tableData: [
        {
          params: 'dataSource',
          explain: '数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。',
          type: '[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]',
          default: '[ ]',
        },
        { params: 'disabled', explain: '是否禁用', type: 'boolean', default: 'false' },
        {
          params: 'filterOption',
          explain: '接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
          type: '(inputValue, option): boolean',
        },
        { params: 'footer', explain: '可以设置为一个 作用域插槽', type: 'slot="footer" slot-scope="props"' },
        {
          params: 'lazy',
          explain: 'Transfer 使用了 [vc-lazy-load]优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。',
          type: 'object|boolean',
          default: '{ height: 32, offset: 32 }',
        },
        { params: 'listStyle', explain: '两个穿梭框的自定义样式', type: 'object' },
        {
          params: 'locale',
          explain: '各种语言',
          type: 'object',
          default: "{ itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' }",
        },
        { params: 'operations', explain: '操作文案集合，顺序从上至下', type: 'string[ ]', default: "['>', '<']" },
        {
          params: 'render',
          explain:
            '每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title',
          type: 'Function(record)',
        },
        { params: 'selectedKeys', explain: '设置哪些项应该被选中', type: 'string[ ]', default: '[ ]' },
        { params: 'showSearch', explain: '是否显示搜索框', type: 'boolean', default: 'false' },
        { params: 'showSelectAll', explain: '是否展示全选勾选框', type: 'boolean', default: 'false' },
        { params: 'targetKeys', explain: '显示在右侧框数据的 key 集合', type: '	string[ ]', default: '[ ]' },
        { params: 'titles', explain: '标题集合，顺序从左至右', type: 'boolean', default: "['', '']" },
      ],
      tableDataFn: [
        { params: 'change', explain: '选项在两栏之间转移时的回调函数', type: '(targetKeys, direction, moveKeys): void' },
        { params: 'scroll', explain: '选项列表滚动时的回调函数', type: '(direction, event): void' },
        { params: 'search', explain: '搜索框内容时改变时的回调函数', type: "(direction: 'left'|'right', value: string): void" },
        { params: 'selectChange', explain: '选中项发生改变时的回调函数', type: '(sourceSelectedKeys, targetSelectedKeys): void' },
      ],
      tableDataChildren: [
        { params: 'direction', explain: '	渲染列表的方向', type: "'left' | 'right'" },
        { params: 'disabled', explain: '是否禁用列表', type: 'boolean' },
        { params: 'filteredItems', explain: '过滤后的数据', type: 'TransferItem[ ]' },
        { params: 'selectedKeys', explain: '选中的条目', type: 'string[ ]' },
        { params: 'itemSelect', explain: '勾选条目', type: '(key: string, selected: boolean)' },
        { params: 'itemSelectAll', explain: '勾选一组条目', type: '(keys: string[], selected: boolean)' },
      ],
    };
  },
};
</script>
