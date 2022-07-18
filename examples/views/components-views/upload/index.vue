<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="upload 上传组件" detail="根据UI设计，示例上传所有可能的场景。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <upload1 />
    <!-- <tree5 /> -->
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import upload1 from './upload1.vue';
export default {
  name: 'MyUpload',
  components: { upload1 },
  data() {
    return {
      declareList: [
        '任何需要通过层级组织的信息场景，如文件夹、组织架构、生物分类、国家地区等等。',
        'Tree 子项中的可操作元素只能通过鼠标操作，不可聚焦，它们应该是表示性的，键盘不能操作到',
      ],
      tableData: [
        {
          params: 'checkable',
          explain: '节点前添加 Checkbox 复选框',
          type: 'boolean',
          default: 'false',
        },

        {
          params: 'title',
          explain: '标题',
          type: 'slot',
          default: '',
        },
      ],
    };
  },
};
</script>
