<template>
  <div style="padding-bottom: 30px">
    <h3 class="fun-title">API</h3>
    <a-table :pagination="pagination" :row-key="(record, index) => index" :columns="columns" :data-source="data"> </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '参数',
    dataIndex: 'params',
  },
  {
    title: '说明',
    dataIndex: 'explain',
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '默认值',
    dataIndex: 'default'
  },
];
export default {
  name: 'apiTable',
  data() {
    return {
      columns,
      pagination: {
        hideOnSinglePage: true,
        pageSize: 100,
      },
    };
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>