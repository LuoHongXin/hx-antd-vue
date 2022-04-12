<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="Step 步骤"
      detail="亦称步骤导航，通过按序列将任务流程分解为多个步骤，体现任务过程的方向和其中的各个关键环节，引导用户按流程完成任务。"
    />
    <declareList :value="declareList" />
    <h3 class="fun-title">代码演示</h3>
    <Horizontal />
    <Vertical />
    <Mini />
    <api-table :data="tableData"></api-table>
    <api-table title="事件" :data="tableData2"></api-table>
    <api-table title="Steps.Step（步骤条内的每一个步骤）" :data="tableData3"></api-table>
  </div>
</template>
<script>
import Horizontal from './horizontal.vue';
import Vertical from './vertical.vue';
import Mini from './mini.vue';
export default {
  name: 'steps',
  components: {
    Horizontal,
    Vertical,
    Mini,
  },
  data() {
    return {
      declareList: [
        '步骤组件需明确显示用户当前的进度，包括已完成步骤、当前步骤、剩余步骤。步骤组件给用户安全感、可控感。',
        '  通常适合 3-6 步使用，过多的步骤与过于复杂的流程会挑战用户的耐心',
        '  当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。',
      ],
      tableData: [
        {
          params: 'current (v-model)',
          explain: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态',
          type: 'number',
          default: 0,
        },
        {
          params: 'direction',
          explain: '指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向',
          type: 'string',
          default: 'horizontal',
        },
        {
          params: 'labelPlacement',
          explain: '指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方',
          type: 'string',
          default: 'horizontal',
        },
        {
          params: 'size',
          explain: '指定大小，目前支持普通（default）和迷你（small）',
          type: 'string',
          default: 'default',
        },
        {
          params: 'status',
          explain: '指定当前步骤的状态，可选 wait process finish error',
          type: 'string',
          default: 'process',
        },
      ],
      tableData2: [
        {
          params: 'change',
          explain: '点击切换步骤时触发',
          type: '(current) => void',
        },
      ],
      tableData3: [
        {
          params: 'description',
          explain: '步骤的详情描述，可选',
          type: 'string | slot',
        },
        {
          params: 'icon',
          explain: '步骤图标的类型，可选',
          type: 'string | slot',
        },
        {
          params: 'status',
          explain: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error',
          type: 'string',
          default: 'wait',
        },
        {
          params: 'title',
          explain: '标题',
          type: 'string | slot',
        },
        {
          params: 'subTitle',
          explain: '子标题',
          type: 'string | slot',
        },
        {
          params: 'disabled',
          explain: '禁用点击',
          type: 'boolean',
          default: false,
        },
      ],
    };
  },
};
</script>
