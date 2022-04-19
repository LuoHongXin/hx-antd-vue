<template>
  <div style="padding-bottom: 30px" class="apiTable">
    <h3 class="fun-title">{{ title }}</h3>
    <p v-if="detail">{{ detail }}</p>
    <a-table :scroll="{ x: true }" :pagination="pagination" :row-key="(record, index) => index" :columns="columns" :data-source="data">
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '参数',
    dataIndex: 'params',
    width: 200,
    fixed: 'left',
  },
  {
    title: '说明',
    dataIndex: 'explain',
    width: 500,
  },
  {
    title: '类型',
    dataIndex: 'type',
    fixed: 'right',
  },
  {
    title: '默认值',
    dataIndex: 'default',
    width: 100,
    fixed: 'right',
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
    title: {
      type: String,
      default: function() {
        return 'API';
      },
    },
    detail: {
      type: String,
      default: function() {
        return null;
      },
    },
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
