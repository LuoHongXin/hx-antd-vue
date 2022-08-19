<template>
  <div>
    <!-- <declareList :value="declareList" /> -->
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="基础表格（后端分页）" detail="常见的基础表格" />
    <!-- 组件展示 -->
    <com-show>
      <y-model-table
        v-model="selectedData"
        :modelKeys.sync="selectedDataKeys"
        :affixTarget="affixTarget"
        :selectOptions="selectOptions"
        :api="getTableData"
        :columns="columns"
        :scroll="{ x: '100%' }"
        ref="tableRef"
        @check="check"
        @freshCallback="freshCallback"
        :buttonList="buttonList"
        :handleResponse="handleResponse"
        :defaultCheckColumsValue="defaultCheckColumsValue"
      >
        <template v-slot:name="{ text }">
          <a class="y-button-link">{{ text }}</a>
        </template>
        <span slot="customTitle"><a-icon type="smile-o" /> 标题</span>
        <y-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
          {{ record.createLoginName }}
        </y-tag>
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
import api from '@/api';
const js = `const columns = [
    {
      columnSetTitle:"标题", // 自定义表头时，用于列设置中显示
      dataIndex: 'name',
      columnsCheckDisabled: true,
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
      width: 200,
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
      filter: true,
      sorter: true,
      copy: true,
    },
    {
      title: '任务创建人',
      dataIndex: 'createLoginName',
      scopedSlots: { customRender: 'createLoginName' },
      sorter: true,
      width: 200,
    },
    {
      title: '任务描述',
      dataIndex: 'description',
      width: 200,
      ellipsis: true,
      copy: true,
    },
    {
      title: '标签',
      dataIndex: 'stepDesc',

      width: 200,
      ellipsis: true,
    },
  ];
  const buttonList = [
    {
      text: '新增',
      tips: '数据添加',
      type: 'primary',
      icon: 'plus',
      click: () => {
        alert('新增');
      },
    },
    {
      text: '修改',
      disable: true,
    },
    {
      text: '复制',
      click: () => {
        alert('新增');
      },
    },
    {
      text: '粘贴操作操作操作',
      click: () => {
        alert('新增');
      },
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
        affixTarget: () => document.querySelector('.ant-layout-content'),
        columns,
        getTableData: api.getTableData,
        buttonList,
        selectOptions: [
          { title: '标题', value: 'name' },
          { title: '任务描述', value: 'description' },
        ],
        defaultCheckColumsValue: ['name', 'createLoginName'],
      };
    },
    methods: {
      freshCallback() {
        this.$refs.tableRef.onSearch();
      },
      check(selectedData, selectedDataKeys) {
        console.log(selectedData, selectedDataKeys);
      },
      handleResponse(res, type) {
        if (type === 'total') {
          return res.data.total;
        }
        if (type === 'data') {
          return res.data.data;
        }
      },
    },
  };
  <style lang="less" scoped>
  .y-button-link {
    max-width: 80%; // 自己固定宽度
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  </style>`;
const columns = [
  {
    columnSetTitle: '标题',
    dataIndex: 'name',
    columnsCheckDisabled: true,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
    width: 500,
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
    filter: true,
    sorter: true,
    ellipsis: true,
    copy: true,
  },
  {
    title: '任务创建人',
    dataIndex: 'createLoginName',
    scopedSlots: { customRender: 'createLoginName' },
    sorter: true,
    width: 200,
  },
  {
    title: '任务描述',
    dataIndex: 'description',
    width: 200,
    ellipsis: true,
    copy: true,
  },
  {
    title: '标签',
    dataIndex: 'stepDesc',

    width: 200,
    ellipsis: true,
  },
];
const buttonList = [
  {
    text: '新增',
    tips: '数据添加',
    type: 'primary',
    icon: 'plus',
    click: () => {
      alert('新增');
    },
  },
  {
    text: '修改',
  },
  {
    text: '复制',
    checkDisabled: false,
    click: () => {
      alert('复制');
    },
  },
  {
    text: '粘贴操作操作操作',
    click: () => {
      alert('粘贴操作操作操作');
    },
  },
  {
    text: '删除',
    tips: '危险操作',
    disable: true,
  },
];
export default {
  name: 'BETable',
  data() {
    return {
      selectedData: [],
      selectedDataKeys: [],
      js,
      affixTarget: () => document.querySelector('.ant-layout-content'),
      columns,
      getTableData: api.getTableData,
      buttonList,
      selectOptions: [
        { title: '标题', value: 'name' },
        { title: '任务描述', value: 'description' },
      ],
      defaultCheckColumsValue: ['name', 'createLoginName'],
      declareList: [
        '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户关注和处理',
        '作为一个链接，快速查看详情的入口',
        '代表事件的状态，让用户提前知道事件的进展情况',
      ],
      html: `<y-model-table
        v-model="selectedData"
        :modelKeys.sync="selectedDataKeys"
        :affixTarget="affixTarget"
        :selectOptions="selectOptions"
        :api="getTableData"
        :columns="columns"
        :scroll="{ x: '100%' }"
        ref="tableRef"
        @check="check"
        @freshCallback="freshCallback"
        :buttonList="buttonList"
        :handleResponse="handleResponse"
        :defaultCheckColumsValue="defaultCheckColumsValue"
      >
        <template v-slot:name="{ text }">
          <a class="y-button-link">{{ text }}</a>
        </template>
        <span slot="customTitle"><a-icon type="smile-o" /> 标题</span>
        <y-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
          {{ record.createLoginName }}
        </y-tag>
      </y-model-table>`,
    };
  },
  methods: {
    freshCallback() {
      this.$refs.tableRef.onSearch();
    },
    check(selectedData, selectedDataKeys) {
      console.log(selectedData, selectedDataKeys);
    },
    handleResponse(res, type) {
      if (type === 'total') {
        return res.data.total;
      }
      if (type === 'data') {
        return res.data.data;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.y-button-link {
  max-width: 80%; // 自己固定宽度
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
