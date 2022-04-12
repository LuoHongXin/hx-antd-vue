<template>
  <div>
    <div class="y-page-header-a">
      <!-- 标题 -->
      <div class="title">
        <div class="title-left">
          <h3 class="page-title">页面标题</h3>
        </div>
      </div>
      <!-- Tab选项卡 -->
      <div class="tabs">
        <y-tabs default-active-key="1">
          <a-tab-pane key="1" tab="选项卡" />
          <a-tab-pane key="2" tab="选项卡" />
          <a-tab-pane key="3" tab="选项卡" />
        </y-tabs>
      </div>
    </div>
    <div class="y-table-page-a">
      <div class="contanier">
        <!-- 参考 filterForm过滤表单 典型页面布局 -->
        <filterForm v-if="showFIlter" />
        <y-model-table
          :affixTarget="affixTarget"
          :selectOptions="selectOptions"
          :api="getTableData"
          :columns="columns"
          :buttonList="buttonList"
          :handleResponse="handleResponse"
          @filter="
            () => {
              showFIlter = !showFIlter;
            }
          "
        >
          <template v-slot:name="{ text }">
            <a class="y-button-link">{{ text }}</a>
          </template>
          <span slot="customTitle"><a-icon type="smile-o" /> 标题</span>
          <y-tag slot="createLoginName" v-if="record.createLoginName" slot-scope="{ record }" :color="'green'">
            {{ record.createLoginName }}
          </y-tag>
        </y-model-table>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
import filterForm from './filterFormPage/filterForm.vue';
const columns = [
  {
    dataIndex: 'name',
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
  name: 'tablePageA',
  components: {
    filterForm,
  },
  data() {
    return {
      showFIlter: false,
      affixTarget: () => document.querySelector('.router-views'),
      columns,
      getTableData: api.getTableData,
      buttonList,
      selectOptions: [
        { title: '标题', value: 'name' },
        { title: '任务描述', value: 'description' },
      ],
    };
  },
  methods: {
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
