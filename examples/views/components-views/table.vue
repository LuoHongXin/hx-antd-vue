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
        :row-selection="rowSelection"
        :components="$YGetTableDragHeader(columns)"
        :columns="columns"
        :data-source="data"
        :pagination="false"
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
      <code class="language-html" v-text="`<template>
          <y-table
            v-model='selectedData'
            bordered
            :row-selection='rowSelection'
            :components='$YGetTableDragHeader(columns)'
            :columns='columns'
            :data-source='data'
            :pagination='false'
            :modelKeys.sync='selectedDataKeys'
          >
            <a slot='name' slot-scope='text' class='y-button-link'>{{ text }}</a>
            <span slot='tags' slot-scope='tags'>
              <a-tag v-for='tag in tags' :key='tag' :color='tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green''>
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </y-table>
        </template>`">
      </code>
  </pre>
    <pre class="line-numbers">
    <code class="language-javascript">
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
                data,
              };
            },
            computed: {
              rowSelection() {
                return {
                  columnWidth: 40,
                  selectedRowKeys: this.selectedDataKeys, // 控制选择
                };
              }
            }
          };
        </code>
        </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
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
      data,
      tableData: [
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
          params: 'rowSelection的selectedRowKeys',
          explain:
            'rowSelection的具体配置可以查看 antd 的 API，其下的 selectedRowKeys 属性可使表格成为受控组件，使用该值的时候一定要用 modelKeys.sync 绑定',
          type: 'Array',
          default: '建议和 modelKeys.sync 绑定同一个变量，js 修改该变量，即可修改表格的选中状态',
        },
        {
          params: 'rowClick',
          explain:
            '控制表格的行是否支持点击选中，使用该属性时必须得要绑定 modelKeys 和使用rowSelection的selectedRowKeys，使表格成为受控组件。',
          type: 'Boolean',
          default: 'true',
        },
      ],
    };
  },
  computed: {
    rowSelection() {
      return {
        columnWidth: 40,
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
    }
  }
};
</script>