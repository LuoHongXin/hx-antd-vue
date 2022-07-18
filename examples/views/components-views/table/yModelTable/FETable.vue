<template>
  <div>
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="基础表格（前端分页）" detail="常见的基础表格" />
    <!-- 组件展示 -->
    <com-show>
      <y-model-table
        :rowSelection="false"
        :scroll="{ x: true,y:445 }"
        :paramsKeyFilter="paramsKeyFilter"
        :dataSource="tableData"
        :columns="columns"
      >
        <template v-slot:name="{ text }">
          <a class="y-button-link">{{ text }}</a>
        </template>

        <a-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
          {{ record.createLoginName }}
        </a-tag>
        <template slot="action">
          <y-table-action-button :buttonList="buttonList"></y-table-action-button>
        </template>
      </y-model-table>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
    <code class="language-javascript" v-text="js">
        </code>
     </pre>
  </div>
</template>
<script>
const js = `import api from '@/api';
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' },
      width: 300,
      fixed: 'left',
      filters: [
        {
          text: '虚拟机',
          value: '虚拟机',
        },
        {
          text: '登录',
          value: '登录',
        },
      ],
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '任务创建人',
      dataIndex: 'createLoginName',
      scopedSlots: { customRender: 'createLoginName' },
      width: 200,
    },
    {
      title: '任务描述',
      dataIndex: 'description',
    },
    {
      title: '标签',
      dataIndex: 'stepDesc',
      width: 200,
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },
      width: 180,
      fixed: 'right',
    },
  ];

  const buttonList = [
    {
      text: '新增',
      tips: {
        text: '数据添加',
        placement: 'left',
      },
      type: 'primary',
      icon: 'plus',
    },
    {
      text: '修改',
      disable: true,
    },
    {
      text: '复制',
    },
    {
      text: '粘贴操作操作操作',
    },
    {
      text: '删除',
      tips: '危险操作',
      disable: true,
    },
  ];
  export default {
    data() {
      return {
        columns,
        tableData: [],
        buttonList
      };
    },
    mounted() {
      this.getTableData();
    },
    methods: {
      getTableData() {
        api.getTableData({}).then(res => {
          this.tableData = res.data.data;
        });
      },
    },
  };`;
const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
    width: 300,
    fixed: 'left',
    filters: [
      {
        text: '虚拟机',
        value: '虚拟机',
      },
      {
        text: '登录',
        value: '登录',
      },
    ],
    onFilter: (value, record) => record.name.includes(value),
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: '任务创建人',
    dataIndex: 'createLoginName',
    scopedSlots: { customRender: 'createLoginName' },
    width: 200,
  },
  {
    title: '任务描述',
    dataIndex: 'description',
    ellipsis: true,
  },
  {
    title: '标签',
    dataIndex: 'stepDesc',
    width: 200,
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    width: 180,
    fixed: 'right',
  },
];
import api from '@/api';
const buttonList = [
  {
    text: '新增',
    tips: {
      text: '数据添加',
      placement: 'left',
    },
    type: 'primary',
    icon: 'plus',
  },
  {
    text: '修改',
    disable: true,
  },
  {
    text: '复制',
  },
  {
    text: '粘贴操作操作操作',
  },
  {
    text: '删除',
    tips: '危险操作',
    disable: true,
  },
];
export default {
  name: 'FETable',
  data() {
    return {
      js,
      columns,
      tableData: [],
      paramsKeyFilter: {
        search: 'name',
      },
      buttonList,
      html: `<y-model-table :rowSelection="false" :scroll="{ x: true }" :dataSource="tableData" :columns="columns">
        <template v-slot:name="{ text }">
          <a class="y-button-link">{{ text }}</a>
        </template>
        <a-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
          {{ record.createLoginName }}
        </a-tag>
        <template slot="action">
          <y-table-action-button :buttonList="buttonList"></y-table-action-button>
        </template>
      </y-model-table>`,
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      api.getTableData({}).then(res => {
        this.tableData = res.data.data;
        // this.tableData = [];
      });
    },
  },
};
</script>
<style lang="less" scoped></style>
