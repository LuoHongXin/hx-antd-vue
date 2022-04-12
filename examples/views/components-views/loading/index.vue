<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Loading 加载" detail="适合于整页或页面模块内的数据加载，体现系统的运转状态。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用原则" :value="declareList" />
    <declareList title="行为" :value="declareList2" />
    <load1 />
    <load2 />
    <load3 />
    <load4 />
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
import load1 from './load1.vue';
import load2 from './load2.vue';
import load3 from './load3.vue';
import load4 from './load4.vue';
export default {
  name: 'Myloading',
  components: {
    load1,
    load2,
    load3,
    load4,
  },
  data() {
    return {
      declareList: [
        '设定加载的上线时间，超过上限时间需给用户明确反馈加载慢的原因，以缓解用户等待的焦虑和迷失',
        '页面模块内使用时，均为非模态的加载方式，加载过程不打扰用户，无需让用户等待加载完才进行其他操作',
      ],
      declareList2: [
        '前置条件：进入新页面、点击刷新按钮或点击某个操作按钮后，处于等待异步数据或正在渲染过程时会触发加载组件，允许多个加载同时出现。',
        '当加载超过上限时间时，需同时给出反馈，告诉用户加载慢的原因',
        '加载成功后则显示加载结果',
        '入场动效时间保持在 200~300ms ',
      ],
      tableData: [
        {
          params: 'delay',
          explain: '延迟显示加载效果的时间（防止闪烁）',
          type: 'number (毫秒)',
          default: '',
        },
        {
          params: 'indicator',
          explain: '加载指示符',
          type: 'vNode | slot',
          default: '',
        },
        {
          params: 'size',
          explain: '组件大小，可选值为 small default large',
          type: 'string',
          default: 'default',
        },
        {
          params: 'spinning',
          explain: '是否为加载中状态',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'tip',
          explain: '当作为包裹元素时，可以自定义描述文案',
          type: 'string',
          default: '',
        },
        {
          params: 'wrapperClassName',
          explain: '包装器的类属性',
          type: '	string',
          default: '',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
