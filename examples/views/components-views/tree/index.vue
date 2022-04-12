<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Tree 树形控件" detail="体现父子层级关系的信息组织方式。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <!-- 组件展示 -->
    <tree1 />
    <tree2 />
    <tree3 />
    <tree4 />
    <tree6 />
    <!-- <tree5 /> -->
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import tree1 from './tree1.vue';
import tree2 from './tree2.vue';
import tree3 from './tree3.vue';
import tree4 from './tree4.vue';
import tree6 from './tree6.vue';
// import tree5 from './tree5.vue';
export default {
  name: 'MyTree',
  components: { tree1, tree2, tree3, tree4, tree6 },
  data() {
    return {
      declareList: [
        '任何需要通过层级组织的信息场景，如文件夹、组织架构、生物分类、国家地区等等。',
        'Tree 子项中的可操作元素只能通过鼠标操作，不可聚焦，它们应该是表示性的，键盘不能操作到',
      ],
      tableData: [
        {
          params: 'title',
          explain: '提示文字',
          type: 'string|slot',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
