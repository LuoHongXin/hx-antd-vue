<template>
  <div>
    <colorTag />
    <handleTag />
    <api-table title="tag API" :data="tableData"></api-table>
    <api-table title="tagAction API" :data="tableData2"></api-table>
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
        { params: 'closable', explain: '标签是否带关闭', type: 'boolean', default: 'false' },
        { params: 'addTagButtonName', explain: '添加标签按钮名字', type: 'String', default: '添加标签' },
        { params: 'noCloseData', explain: '传入指定数组索引，对应索引标签不可删除', default: 'Array', defailt: '-' },
        { params: 'color', explain: '和antd的color参数一样', type: 'String', defailt: '-' },
        { params: 'visible(v-model)', explain: '是否显示标签', type: 'boolean', default: 'true' },
        { params: 'close', explain: '关闭时的回调', type: 'Function', default: '(e) => void(tag-action为两参数, (e， value) => void)' },
      ],
      tableData2: [
        {
          params: 'confirmCallBack',
          explain: '输入时校验回调，输入值符合则 resolve 输入值，否则 resolve false',
          type: 'Function(输入值)',
          default: 'null',
        },
      ],
    };
  },
};
</script>
