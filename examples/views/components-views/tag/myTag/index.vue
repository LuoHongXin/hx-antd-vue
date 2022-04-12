<template>
  <div>
    <colorTag />
    <handleTag />
    <api-table title="tag API" :data="tableData"></api-table>
  </div>
</template>
<script>
import colorTag from './colorTag.vue';
import handleTag from './handleTag.vue';
export default {
  name: 'MyTag',
  components: {
    colorTag,
    handleTag,
  },
  data() {
    return {
      tableData: [
        { params: 'closable', explain: '标签是否带关闭', type: 'boolean', defailt: 'false' },
        { params: 'color', explain: '和antd的color参数一样', type: 'String' },
        { params: 'visible(v-model)', explain: '是否显示标签', type: 'boolean', defailt: 'true' },
        { params: 'close', explain: '关闭时的回调', type: 'Function', defailt: '(e) => void' },
      ],
    };
  },
};
</script>
