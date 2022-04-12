<template>
  <div>
    <title-detail title="Slider 滑动输入条" detail="滑动型输入器，展示当前值和可选范围。"></title-detail>
    <com-show>
      <title-detail title="何时使用" detail="当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。"></title-detail>
      <my-slider-content />
    </com-show>
    <api-table :data="tableData"></api-table>
    <api-table :data="tableDataChange" title="事件"></api-table>
    <api-table :data="tableDataFn" title="方法"></api-table>
  </div>
</template>
<script>
import MySliderContent from './content';
export default {
  name: 'mySlider',
  components: { MySliderContent },
  data() {
    return {
      tableData: [
        {
          params: 'autoFocus',
          explain: '自动获取焦点',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'defaultValue',
          explain: '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]',
          type: 'number|number[ ]',
          default: '0 or [0, 0]',
        },
        {
          params: 'disabled',
          explain: '值为 true 时，滑块为禁用状态',
          type: 'boolean',
          default: false,
        },
        {
          params: 'dots',
          explain: '是否只能拖拽到刻度上',
          type: 'boolean',
          default: false,
        },
        {
          params: 'included',
          explain: 'marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
          type: 'boolean',
          default: true,
        },
        {
          params: 'marks',
          explain: '刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式',
          type: 'object',
          default: '{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }',
        },
        {
          params: 'max',
          explain: '最大值',
          type: 'number',
          default: 100,
        },
        {
          params: 'min',
          explain: '最小值',
          type: 'number',
          default: 0,
        },
        {
          params: 'range',
          explain: '双滑块模式',
          type: 'boolean',
          default: false,
        },
        {
          params: 'reverse',
          explain: '反向坐标轴',
          type: 'boolean',
          default: false,
        },
        {
          params: 'step',
          explain:
            '步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。',
          type: 'number|null',
          default: 1,
        },
        {
          params: 'tipFormatter',
          explain: 'Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。',
          type: 'Function|null',
          default: 'IDENTITY',
        },
        {
          params: 'value(v-model)',
          explain: '设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]',
          type: 'number|number[]',
        },
        {
          params: 'vertical',
          explain: '值为 true 时，Slider 为垂直方向',
          type: 'Boolean',
          default: false,
        },
        {
          params: 'tooltipPlacement',
          explain: '设置 Tooltip 展示位置。参考 Tooltip。',
          type: 'string',
        },
        {
          params: 'tooltipVisible',
          explain: '值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。',
          type: 'Boolean',
        },
        {
          params: 'getTooltipPopupContainer',
          explain: 'Tooltip 渲染父节点，默认渲染到 body 上。',
          type: 'Function',
          default: '() => document.body',
        },
      ],
      tableDataChange: [
        {
          params: 'afterChange',
          explain: '与 mouseup 触发时机一致，把当前值作为参数传入。',
          type: 'Function(value)',
        },
        {
          params: 'change',
          explain: '当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。',
          type: 'Function(value)',
        },
      ],
      tableDataFn: [
        {
          params: 'blur()',
          explain: '移除焦点',
        },
        {
          params: 'focus()',
          explain: '获取焦点',
        },
      ],
    };
  },
};
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
