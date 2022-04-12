<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="YModelTable 表格模板">
        <YModelTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="yTable 表格">
        <YTable />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import YTable from './yTable.vue';
import YModelTable from './yModelTable/index.vue';
export default {
  name: 'myTable',
  components: {
    YTable,
    YModelTable,
  },
};
</script>
