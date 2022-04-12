<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="表格"
      detail="基于antd的table组件封装的表格组件，拥有antd所有table组件的API，并在此基础上增添丰富了新的功能，例如表格列宽拖拽、行点击选中、v-model的选中数据绑定等，具体可查看如下API。"
    />
    <a href="https://www.antdv.com/components/table-cn/">antd表格组件API</a>
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-table
        v-model="selectedData"
        bordered
        @change="handleTableChange"
        :row-selection="rowSelection"
        :components="$YGetTableDragHeader(columns)"
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :modelKeys.sync="selectedDataKeys"
      >
        <a slot="name" slot-scope="text" class="y-button-link">{{ text }}</a>
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </y-table>
      <p style="margin-top: 20px">
        selectedData：{{ selectedData }}<br />
        selectedDataKeys：{{ selectedDataKeys }}
      </p>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
      <code class="language-html" v-text="html">
      </code>
      <code class="language-javascript" v-text="js">
        </code>
      </pre>
    <api-table :data="tableData01"></api-table>
    <api-table :data="tableData02" title="rowSelection选择功能的配置"></api-table>
    <api-table :data="tableData3" title="scroll滚动API"></api-table>
    <api-table title="columns列数据数组中对象API" :data="tableData4"></api-table>
  </div>
</template>
<script>
import mixins from './mixins';
const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
    width: 200,
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
    width: 200,
  },
];
const data = [
  {
    key: 'd1',
    name: '内容文本，点击可进入详情1',
    age: 32,
    address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
    tags: ['nice', 'developer'],
  },
  {
    key: 'd2',
    name: '内容文本，点击可进入详情12',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: 'd3',
    name: '内容文本，点击可进入详情123',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
  name: 'tableviews',
  mixins: [mixins],
  data() {
    return {
      html: `<template>
        <y-table
          v-model="selectedData"
          bordered
          @change="handleTableChange"
          :row-selection="rowSelection"
          :components="$YGetTableDragHeader(columns)"
          :columns="columns"
          :data-source="data"
          :pagination="pagination"
          :modelKeys.sync="selectedDataKeys"
        >
          <a slot="name" slot-scope="text" class="y-button-link">{{ text }}</a>
          <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </y-table>
      </template>`,
      js: `
        const columns = [
          {
            title: '标题',
            dataIndex: 'name',
            key: 'name',
            scopedSlots: { customRender: 'name' },
            width: 200,
            filters: [
              {
                text: 'Joe',
                value: 'Joe',
              },
              {
                text: 'Jim',
                value: 'Jim',
              },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ellipsis: true,
            width: 200,
          },
          {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            scopedSlots: { customRender: 'tags' },
            width: 200,
          },
        ];
        const data = [
          {
            key: 'd1',
            name: '内容文本，点击可进入详情1',
            age: 32,
            address: 'New York No. 1 Lake Park  New York NoNew York NoNew York NoNew York NoNew York NoNew York NoNew York No',
            tags: ['nice', 'developer'],
          },
          {
            key: 'd2',
            name: '内容文本，点击可进入详情12',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: 'd3',
            name: '内容文本，点击可进入详情123',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
        ];
        export default {
          name: 'tableviews',
          data() {
            return {
              selectedData: [],
              selectedDataKeys: [],
              columns,
              pagination: this.$YGetTablePagination(),
            };
          },
          computed: {
            data() {
              let arr = [];
              for (let i = 0; i < 500; i++) {
                let obj = { ...data[((Math.random() * 100).toFixed(0) - 0) % 2] };
                obj.key = obj.key + i;
                arr.push(obj);
              }
              return arr;
            },
            rowSelection() {
              return {
                columnWidth: 40,
                // type: 'radio',
                // getCheckboxProps: () => {
                //   return {
                //     props: {
                //       disabled: true,
                //     },
                //   };
                // },
                selectedRowKeys: this.selectedDataKeys, // 控制选择
              };
            },
          },
          methods: {
            handleTableChange(pagination) {
              this.pagination = pagination;
            },
          },
        };`,
      selectedData: [],
      selectedDataKeys: [],
      columns,
      pagination: this.$YGetTablePagination(),
      // data,
      tableData01: [
        {
          params: 'components',
          explain:
            'components 是 antd 就有的 API，为了支持表格的拖拽需要对 components 进行设置，所以封装了一个全局的 $YGetTableDragHeader 方法，只需传入 columns 参数，就会返回支持拖拽的对象，将其赋值给 components 就可支持表格拖拽功能；至于将来想要修改 component 参数，可以在继承该对象的基础上进行修改即可。注意：只有带有 width 且 width 为数字的 columns 列才支持拖拽',
          type: 'Object',
        },
        { params: 'v-model', explain: '绑定表格选中的数据，不需要每个表格组件写选择事件', type: 'Array', default: '可不传，但建议绑定' },
        {
          params: 'modelKeys',
          explain: '绑定表格选中的数据key，必须以 modelKeys.sync 的方式绑定',
          type: 'Array',
          default: '可不传，但表格作为受控组件的时候必须要传',
        },
        {
          params: 'rowClick',
          explain:
            '控制表格的行是否支持点击选中，使用该属性时必须得要绑定 modelKeys 和使用rowSelection的selectedRowKeys，使表格成为受控组件。',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'bordered',
          explain: '是否展示外边框和列边框',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'columns',
          explain: '表格列的配置描述，具体见下表',
          type: 'array',
          default: '-',
        },
        {
          params: 'dataSource',
          explain: '数据数组',
          type: 'any[]',
          default: '',
        },
        {
          params: 'loading',
          explain: '页面是否加载中',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'pagination',
          explain: '分页器，一般通过$YGetTablePagination去规范统一分页器的格式，或直接设为 false 时不展示和进行分页',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'rowClassName',
          explain: '表格行的类名',
          type: 'Function(record, index):string',
          default: '-',
        },
        {
          params: 'rowKey',
          explain: '表格行 key 的取值，可以是字符串或一个函数',
          type: 'string|Function(record):string',
          default: 'key',
        },
        {
          params: 'rowSelection',
          explain: '列表项是否可选择',
          type: 'object',
          default: 'null',
        },
        {
          params: 'scroll',
          explain:
            '设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }',
          type: '{ x: number | true, y: number }',
          default: '-',
        },
        {
          params: 'showHeader',
          explain: '是否显示表头',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'size',
          explain: '表格大小',
          type: 'default | middle | small',
          default: 'default',
        },
      ],
      tableData02: [
        {
          params: 'columnWidth',
          explain: '自定义列表选择框宽度',
          type: 'string|number',
          default: '-',
        },
        {
          params: 'columnTitle',
          explain: '自定义列表选择框标题',
          type: 'string|VNode',
          default: '-',
        },
        {
          params: 'fixed',
          explain: '把选择框列固定在左边',
          type: 'boolean',
          default: '-',
        },
        {
          params: 'getCheckboxProps',
          explain: '选择框的默认属性配置',
          type: 'Function(record)',
          default: '-',
        },
        {
          params: 'hideDefaultSelections',
          explain: '去掉『全选』『反选』两个默认选项',
          type: '	boolean',
          default: 'false',
        },
        {
          params: 'selectedRowKeys',
          explain:
            '指定选中项的 key 数组，可使表格成为受控组件，使用该值的时候，建议和 modelKeys.sync 绑定同一个变量，js 修改该变量，即可修改表格的选中状态',
          type: 'string[]',
          default: '[]',
        },
        {
          params: 'selections',
          explain: '自定义选择配置项, 设为 true 时使用默认选择项',
          type: '	object[]|boolean',
          default: '-',
        },
        {
          params: 'type',
          explain: '多选/单选，checkbox or radio',
          type: 'string',
          default: 'checkbox',
        },
        {
          params: 'onChange',
          explain: '选中项发生变化时的回调',
          type: '	Function(selectedRowKeys, selectedRows)',
          default: '-',
        },
        {
          params: 'onSelect',
          explain: '用户手动选择/取消选择某列的回调',
          type: 'Function(record, selected, selectedRows, nativeEvent)',
          default: '-',
        },
        {
          params: 'onSelectAll',
          explain: '用户手动选择/取消选择所有列的回调',
          type: 'Function(selected, selectedRows, changeRows)',
          default: '-',
        },
        {
          params: 'onSelectInvert',
          explain: '用户手动选择反选的回调',
          type: '	Function(selectedRows)',
          default: '-',
        },
      ],
    };
  },
  computed: {
    data() {
      let arr = [];
      for (let i = 0; i < 500; i++) {
        let obj = { ...data[((Math.random() * 100).toFixed(0) - 0) % 2] };
        obj.key = obj.key + i;
        arr.push(obj);
      }
      return arr;
    },
    rowSelection() {
      return {
        columnWidth: 40,
        // type: 'radio',
        // getCheckboxProps: () => {
        //   return {
        //     props: {
        //       disabled: true,
        //     },
        //   };
        // },
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
    },
  },
  methods: {
    handleTableChange(pagination) {
      this.pagination = pagination;
    },
  },
};
</script>
