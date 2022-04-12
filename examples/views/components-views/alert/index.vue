<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Alert 警告提示" detail="警告提示，展现需要关注的信息。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <alert1 />
    <alert2 />
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import alert1 from './alert1.vue';
import alert2 from './alert2.vue';
export default {
  name: 'Myloading',
  components: { alert1, alert2 },
  data() {
    return {
      declareList: [
        '不会对用户浏览和操作当前页面产生阻碍',
        'Notice 内嵌在页面中，不遮挡页面内容，消失时伴随动效',
        '根据业务需要设定是否允许用户手动关闭',
        '同种类型的通知，可合并后展示；页面中可同时存在多个不同类型的通知',
        '通知中需要要明确的操作，引导用户解决问题',
        '文案应该清晰的描述现状，解释原因，并给出明确的操作指引',
        '描述文案应当采用易于用户阅读的结构化表达形式，避免长篇大论；允许在描述中使用文本链接',
      ],
      tableData: [
        {
          params: 'afterClose',
          explain: '	关闭动画结束后触发的回调函数',
          type: '() => void',
          default: '',
        },
        {
          params: 'banner',
          explain: '是否用作顶部公告',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'closable',
          explain: '默认不显示关闭按钮',
          type: '	boolean',
          default: '无',
        },
        {
          params: 'closeText',
          explain: '自定义关闭按钮',
          type: 'string|slot',
          default: '无',
        },
        {
          params: 'description',
          explain: '警告提示的辅助性文字介绍',
          type: 'string|slot',
          default: '无',
        },
        {
          params: 'icon',
          explain: '自定义图标，showIcon 为 true 时有效',
          type: 'vnode | slot',
          default: '',
        },
        {
          params: 'message',
          explain: '警告提示内容',
          type: 'string|slot',
          default: '无',
        },
        {
          params: 'showIcon',
          explain: '是否显示辅助图标',
          type: 'boolean',
          default: 'false，banner 模式下默认值为 true',
        },
        {
          params: 'type',
          explain: '指定警告提示的样式，有四种选择 success、info、warning、error',
          type: 'string',
          default: 'info，banner 模式下默认值为 warning',
        },
        {
          params: 'close',
          explain: '关闭时触发的回调函数',
          type: '(e: MouseEvent) => void',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
