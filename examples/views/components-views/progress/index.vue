<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Progress 进度条" detail="可视化方式展示用户操作的当前进度和状态。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="通用场景" :value="declareList" />
    <funTitleDetail title="默认" detail="" />
    <!-- 组件展示 -->
    <com-show>
      <y-progress :percent="30" />
      <y-progress :percent="50" status="active" />
      <y-progress :percent="70" status="exception" />
      <y-progress :percent="100" />
      <y-progress :percent="50" :show-info="false" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <funTitleDetail title="环形" detail="" />
    <com-show>
      <y-progress type="circle" :percent="75" />
      <y-progress type="circle" :percent="70" status="exception" />
      <y-progress type="circle" :percent="100" />
      <y-progress type="dashboard" :percent="50" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <api-table title="各类型共用的属性" :data="tableData"></api-table>
    <api-table title="type='line'" :data="tableData2"></api-table>
    <api-table title="type='circle'" :data="tableData3"></api-table>
    <api-table title="type='dashboard'" :data="tableData4"></api-table>
  </div>
</template>
<script>
export default {
  name: 'empty',
  data() {
    return {
      declareList: [
        '蓝色 为默认色，传达进行中、正常的状态',
        '绿色 用于传达成功的状态',
        '黄色 用于传达提醒与警示的状态',
        '红色 则传达了错误、失败的状态',
      ],
      html: `<y-progress :percent="30" />
      <y-progress :percent="50" status="active" />
      <y-progress :percent="70" status="exception" />
      <y-progress :percent="100" />
      <y-progress :percent="50" :show-info="false" />`,
      html2: `<y-progress type="circle" :percent="75" />
      <y-progress type="circle" :percent="70" status="exception" />
      <y-progress type="circle" :percent="100" />
      <y-progress type="dashboard" :percent="50" />`,
      tableData: [
        {
          params: 'type',
          explain: '类型，可选 line circle dashboard',
          type: 'string',
          default: 'line',
        },
        {
          params: 'format',
          explain: '内容的模板函数',
          type: 'function(percent, successPercent) | v-slot:format="percent, successPercent"',
          default: "percent => percent + ' % '",
        },
        {
          params: 'percent',
          explain: '百分比',
          type: 'number',
          default: '0',
        },
        {
          params: 'showInfo',
          explain: '是否显示进度数值或状态图标',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'status',
          explain: '状态，可选：success exception normal active(仅限 line)',
          type: 'string',
          default: '',
        },
        {
          params: 'strokeLinecap',
          explain: '',
          type: "Enum{ 'round', 'square' }",
          default: 'round',
        },
        {
          params: 'strokeColor',
          explain: '进度条的色彩',
          type: 'string',
          default: '',
        },
        {
          params: 'successPercent',
          explain: '已完成的分段百分比',
          type: 'number',
          default: '0',
        },
      ],
      tableData2: [
        {
          params: 'strokeWidth',
          explain: '进度条线的宽度，单位 px',
          type: 'number',
          default: '10',
        },
        {
          params: 'strokeColor',
          explain: '进度条的色彩，传入 object 时为渐变',
          type: 'string | { from: string; to: string; direction: string }',
          default: '',
        },
      ],
      tableData3: [
        {
          params: 'width',
          explain: '圆形进度条画布宽度，单位 px',
          type: 'number',
          default: '132',
        },
        {
          params: 'strokeWidth',
          explain: '圆形进度条线的宽度，单位是进度条画布宽度的百分比',
          type: 'number',
          default: '6',
        },
        {
          params: 'strokeColor',
          explain: '圆形进度条线的色彩，传入 object 时为渐变',
          type: 'string | { from: string; to: string; direction: string }',
          default: '',
        },
      ],
      tableData4: [
        {
          params: 'width',
          explain: '仪表盘进度条画布宽度，单位 px',
          type: 'number',
          default: '132',
        },
        {
          params: 'strokeWidth',
          explain: '仪表盘进度条线的宽度，单位是进度条画布宽度的百分比',
          type: 'number',
          default: '6',
        },
        {
          params: 'gapDegree',
          explain: '仪表盘进度条缺口角度，可取值 0 ~ 360',
          type: 'number',
          default: '0',
        },
        {
          params: 'gapPosition',
          explain: '仪表盘进度条缺口位置',
          type: "Enum{ 'top', 'bottom', 'left', 'right' }",
          default: 'top',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped></style>
