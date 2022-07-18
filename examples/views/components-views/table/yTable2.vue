<template>
  <div>
    <funTitleDetail
      title="树形数据表格展示"
      detail="表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格；事件 expandedRowsChange 与 update:expandedRowKeys 功能相同，用于接收展开行的 key 的列表。Vue 2.3.0 以上版本，属性 expandedRowKeys 可以和事件 update:expandedRowKeys 配合使用，简写为 :expandedRowKeys.sync='expandedRowKeys'。"
    ></funTitleDetail>
    <com-show>
      <y-table
        :columns="columns"
        :data-source="data"
        rowKey="key"
        v-model="selectedData"
        :row-selection="rowSelection"
        :modelKeys.sync="selectedDataKeys"
        :expanded-row-keys.sync="expandedRowKeys"
      />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
      <code class="language-html" v-text="html">
      </code>
      <code class="language-javascript">
          const columns = [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    width: '12%',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    width: '30%',
                    key: 'address',
                },
                ];

                const data = [
                {
                    key: '1',
                    name: 'John Brown sr.',
                    age: 60,
                    address: 'New York No. 1 Lake Park',
                    children: [
                    {
                        key: '11',
                        name: 'John Brown',
                        age: 42,
                        address: 'New York No. 2 Lake Park',
                    },
                    {
                        key: '12',
                        name: 'John Brown jr.',
                        age: 30,
                        address: 'New York No. 3 Lake Park',
                        children: [
                        {
                            key: '121',
                            name: 'Jimmy Brown',
                            age: 16,
                            address: 'New York No. 3 Lake Park',
                        },
                        {
                            key: '122',
                            name: 'Jimmy Brown2',
                            age: 16,
                            address: 'New York No. 3 Lake Park',
                        },
                        ],
                    },
                    {
                        key: '13',
                        name: 'Jim Green sr.',
                        age: 72,
                        address: 'London No. 1 Lake Park',
                        children: [
                        {
                            key: '131',
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 2 Lake Park',
                            children: [
                            {
                                key: '1311',
                                name: 'Jim Green jr.',
                                age: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: '1312',
                                name: 'Jimmy Green sr.',
                                age: 18,
                                address: 'London No. 4 Lake Park',
                            },
                            ],
                        },
                        ],
                    },
                    ],
                },
                {
                    key: '2',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                },
                ];

                export default {
                data() {
                    return {
                    data,
                    selectedData: [],
                    selectedDataKeys: [],
                    columns,
                    expandedRowKeys: [],
                    };
                },
                computed: {
                    rowSelection() {
                    return {
                        selectedRowKeys: this.selectedDataKeys, // 控制选择
                    };
                    },
                },
                };
        </code>
      </pre>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: '11',
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: '12',
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: '121',
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
          {
            key: '122',
            name: 'Jimmy Brown2',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: '13',
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: '131',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: '1311',
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: '1312',
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      html: `<y-table
        :columns="columns"
        :data-source="data"
        rowKey="key"
        v-model="selectedData"
        :row-selection="rowSelection"
        :modelKeys.sync="selectedDataKeys"
        :expanded-row-keys.sync="expandedRowKeys"
      />`,
      data,
      selectedData: [],
      selectedDataKeys: [],
      columns,
      expandedRowKeys: [],
    };
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedDataKeys, // 控制选择
      };
    },
  },
};
</script>
