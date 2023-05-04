<template>
  <div>
    <!-- <declareList :value="declareList" /> -->
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="基础表格（后端分页）" detail="常见的基础表格" />
    <!-- 组件展示 -->
    <com-show>
      <y-model-table
        :columnDrag="false"
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
  </div>
</template>
<script>
import api from '@/api';
const columns = [
  { title: '序号', dataIndex: 'index', key: 'index', scopedSlots: { customRender: 'index' } },
  { title: '类型', key: 'type', dataIndex: 'type' },
  { title: '名称', dataIndex: 'name' },
  {
    title: '截止2022年本年资源（个）',
    dataIndex: 'noe',
    children: [
      { title: '中国联通', dataIndex: 'noe1' },
      { title: '中国移动', dataIndex: 'noe2' },
      { title: '中国电信', dataIndex: 'noe3' },
      { title: '信创云', dataIndex: 'noe4' },
      { title: '总计', dataIndex: 'noe5' },
    ],
  },
  {
    title: '2022年本年新增资源（个）',
    children: [
      { title: '中国联通', dataIndex: 'timeChinaUnicom' },
      { title: '中国移动', dataIndex: 'timeChinaMobile' },
      { title: '中国电信', dataIndex: 'timeChinaTelecom' },
      { title: '信创云', dataIndex: 'timeRadioExpress' },
      { title: '总计', dataIndex: 'timeTotal' },
    ],
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
      affixTarget: () => document.querySelector('.ant-layout-content'),
      columns,
      getTableData: api.getTableData,
      buttonList,
      selectOptions: [
        { title: '标题', value: 'name' },
        { title: '任务描述', value: 'description' },
      ],
      declareList: [
        '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户关注和处理',
        '作为一个链接，快速查看详情的入口',
        '代表事件的状态，让用户提前知道事件的进展情况',
      ],
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
