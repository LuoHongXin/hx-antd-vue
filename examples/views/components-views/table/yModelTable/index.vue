<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="表格模板" detail="基于YTable封装的常用表格模板modelTable" />
    <BETable />
    <FETable />
    <api-table :data="tableData" title="modelTable表格API"></api-table>
    <api-table :data="tableData2" title="rowSelection选择功能的配置"></api-table>
    <api-table :data="tableData3" title="scroll滚动API"></api-table>
    <api-table :data="tableData4" title="columns列数据数组中对象API"></api-table>
    <api-table :data="tableData5" title="buttonList数组中对象API"></api-table>
    <api-table :data="tableData6" title="modelTable表格$ref实例提供的方法和属性"></api-table>
  </div>
</template>
<script>
import BETable from './BETable.vue';
import FETable from './FETable.vue';
import mixins from '../mixins';
export default {
  name: 'ModelTable',
  components: {
    BETable,
    FETable,
  },
  mixins: [mixins],
};
</script>
