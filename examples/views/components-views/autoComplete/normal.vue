<template>
  <div>
    <com-show>
      <div>
        基本使用。通过 dataSource 设置自动完成的数据源<br />
        <y-auto-complete
          v-model="value"
          :data-source="dataSource"
          placeholder="input here"
          @select="onSelect"
          @search="search"
          @onSearch="onSearch"
          @change="onChange"
        >
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
        <br /><br />
        <y-auto-complete placeholder="disabled" disabled>
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
        <br /><br />
        <h3>自定义输入框 自行调节宽度widthSize (xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px))</h3>
        <y-auto-complete>
          <y-textarea placeholder="textarea here" class="custom" @keypress="handleKeyPress" />
        </y-auto-complete>
      </div>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='`<div>
        <y-auto-complete
          v-model="value"
          :data-source="dataSource"
          placeholder="input here"
          @select="onSelect"
          @search="search"
          @onSearch="onSearch"
          @change="onChange"
        >
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
        <br /><br />
        <y-auto-complete placeholder="disabled" disabled>
          <y-input>
            <a-icon slot="prefix" type="search" class="certain-category-icon" />
          </y-input>
        </y-auto-complete>
        <br /><br />
        <h3>自定义输入框 自行调节宽度widthSize (xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px))</h3>
        <y-auto-complete >
          <y-textarea placeholder="textarea here" class="custom" @keypress="handleKeyPress" />
        </y-auto-complete>`'>
        </code>
      </pre>
      <pre class="line-numbers">
        <code class="language-javascript">
        export default {
          data() {
            return {
              value: '',
              dataSource: [],
            };
          },
          watch: {
            value(val) {
              console.log('value', val);
            },
          },
          methods: {
            search(searchText) {
              console.log(searchText, 'searchText');
            },
            onSearch(searchText) {
              console.log(searchText, 'onSearchText');
              this.dataSource = !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)];
            },
            onSelect(value) {
              console.log('onSelect', value);
            },
            onChange(value) {
              console.log('onChange', value);
            },
            handleKeyPress(ev) {
              console.log('handleKeyPress', ev);
            }
          },
        };
        </code>
      </pre>
    </com-show>
    <api-table :data="tableData" title="auto-complete API"></api-table>
    <api-table :data="tableDataFn" title="auto-complete 事件 "></api-table>
  </div>
</template>

<script>
export default {
  name: 'myNormal',
  data() {
    return {
      value: '',
      dataSource: [],
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
          default: 'm',
        },
        { params: 'time', explain: '防抖间隔onSearch回调下生效，默认500ms', type: 'number', default: '500' },
        { params: 'allowClear', explain: '支持清除, 单选模式有效', type: 'boolean', default: 'false' },
        { params: 'autoFocus', explain: '自动获取焦点', type: 'boolean', default: 'false' },
        { params: 'backfill', explain: '使用键盘选择选项的时候把选中项回填到输入框中', type: 'boolean', default: 'false' },
        {
          params: 'slot="default" (自定义输入框)',
          explain: '自定义输入框',
          type: 'HTMLInputElement / HTMLTextAreaElement',
          default: '<Input />',
        },
        { params: 'dataSource', explain: '自动完成的数据源', type: 'slot | DataSourceItemType[ ]， [ {value: String,text: String} ]' },
        { params: 'dropdownMenuStyle', explain: 'dropdown 菜单自定义样式', type: 'object' },
        { params: 'defaultActiveFirstOption', explain: '是否默认高亮第一个选项。', type: 'boolean', default: 'true' },
        { params: 'defaultValue', explain: '指定默认选中的条目', type: 'string|string[ ]| 无' },
        { params: 'disabled', explain: '是否禁用', type: 'boolean', default: 'false' },
        {
          params: 'filterOption',
          explain:
            '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
          type: 'boolean or function(inputValue, option)',
          default: 'true',
        },
        {
          params: 'optionLabelProp',
          explain: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',
          type: 'string',
          default: 'children',
        },
        {
          params: 'placeholder',
          explain: '输入框提示',
          type: 'string |  slot',
        },
        {
          params: 'value(v-model)',
          explain: '指定当前选中的条目',
          type: 'string|string[]|{ key: string, label: string|vNodes }|Array<{ key: string, label: string|vNodes }>',
        },
        {
          params: 'defaultOpen',
          explain: '是否默认展开下拉菜单',
          type: 'boolean',
        },
        {
          params: 'open',
          explain: '是否展开下拉菜单',
          type: 'boolean',
        },
      ],
      tableDataFn: [
        { params: 'change', explain: '选中 option，或 input 的 value 变化时，调用此函数', type: 'function(value)' },
        { params: 'blur', explain: '失去焦点时的回调', type: 'function()' },
        { params: 'focus', explain: '获得焦点时的回调', type: 'function()' },
        { params: 'search', explain: '搜索补全项的时候调用', type: 'function(value)' },
        { params: 'onSearch', explain: '搜索补全项的时候调用(做了防抖操作)', type: 'function(value)' },
        { params: 'select', explain: '被选中时调用，参数为选中项的 value 值', type: 'function(value, option)' },
        { params: 'dropdownVisibleChange', explain: '展开下拉菜单的回调', type: 'function(open)' },
      ],
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  methods: {
    search(searchText) {
      console.log(searchText, 'searchText');
    },
    onSearch(searchText) {
      console.log(searchText, 'onSearchText');
      this.dataSource = !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    onChange(value) {
      console.log('onChange', value);
    },
    handleKeyPress(ev) {
      console.log('handleKeyPress', ev);
    },
  },
};
</script>
