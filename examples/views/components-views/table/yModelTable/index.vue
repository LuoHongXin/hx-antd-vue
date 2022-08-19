<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="表格模板" detail="基于YTable封装的常用表格模板modelTable" />
    <declareList :value="declareList" title="注意事项" />
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
  data() {
    return {
      declareList: [
        '出现列宽度不受 width 值控制情况，是因为内容被子元素撑开，需要设置表格横向滚动条时请务必使用固定值或百分比，例如：scroll={ x: "100%" }，不要设置为true，否则可能会出现该问题',
        '出现表头高度被挤压变高情况，是因为设置横向滚动宽度没有大于表格总宽度， 需设置x为固定值，例如：scroll={ x: 1200 } 建议设置x值大于表格总宽度',
        '出现固定列最近一列宽度不受 width 值控制情况，是为了解决横向滚动留白问题，若所有列都有width值。而存在某一列是fixed固定列，我们则会自动帮你把固定列最近的一列width置空',
      ],
    };
  },
  components: {
    BETable,
    FETable,
  },
  mixins: [mixins],
};
</script>
