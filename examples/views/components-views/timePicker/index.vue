<template>
  <div>
    <title-detail title="TimePicker 时间选择框" detail="输入或选择时间的控件。" />
    <title-detail title="注意value 和 onChange 需要配合使用。也可以直接使用v-model。" />
    <a-tabs type="card">
      <a-tab-pane key="1" tab="12 小时制">
        <time-picker-one />
        <api-table :data="tableData" title="API"></api-table>
        <api-table :data="tableDataFn" title="事件"></api-table>
        <api-table :data="tableDataMethods" title="方法"></api-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="双向数据绑定">
        <time-picker-change />
        <api-table :data="tableData" title="API"></api-table>
        <api-table :data="tableDataFn" title="事件"></api-table>
        <api-table :data="tableDataMethods" title="方法"></api-table>
      </a-tab-pane>
      <a-tab-pane key="3" tab="双个选择">
        <range-time />
        <api-table :data="tableData1" title="rangeTimePicker"></api-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import timePickerOne from './timePickerOne';
import timePickerChange from './timePickerChange';
import rangeTime from './rangeTime';
export default {
  name: 'myTimePicker',
  components: { timePickerOne, timePickerChange, rangeTime },
  data() {
    return {
      tableData: [
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'm',
        },
        {
          params: 'addon',
          explain: '选择框底部显示自定义的内容',
          type: 'slot | slot-scope',
        },
        { params: 'allowClear', explain: '是否展示清除按钮', type: 'boolean', default: 'true' },
        {
          params: 'autoFocus',
          explain: '自动获取焦点',
          type: 'boolean',
          default: 'false',
        },
        { params: 'clearText', explain: '清除按钮的提示文案', type: 'string', default: 'clear' },
        {
          params: 'defaultOpenValue',
          explain: '当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值',
          type: 'moment',
          default: 'moment()',
        },
        { params: 'defaultValue', explain: '默认时间', type: 'moment', default: '无' },
        { params: 'disabled', explain: '禁用全部操作', type: 'boolean', default: 'false' },
        { params: 'disabledHours', explain: '禁止选择部分小时选项', type: 'function()', default: '无' },
        { params: 'disabledMinutes', explain: '禁止选择部分分钟选项', type: 'function(selectedHour)', default: '无' },
        { params: 'disabledSeconds', explain: '禁止选择部分秒选项', type: 'function(selectedHour, selectedMinute)', default: '无' },
        { params: 'format', explain: '展示的时间格式', type: 'string', default: '"HH:mm:ss"	' },
        { params: 'getPopupContainer', explain: '定义浮层的容器，默认为 body 上新建 div', type: 'function(trigger)' },
        { params: 'hideDisabledOptions', explain: '隐藏禁止选择的选项', type: 'boolean', default: 'false' },
        { params: 'hourStep', explain: '小时选项间隔', type: 'number', default: '1' },
        { params: 'inputReadOnly', explain: '设置输入框为只读（避免在移动设备上打开虚拟键盘）', type: 'boolean', default: 'false' },
        { params: 'minuteStep', explain: '分钟选项间隔', type: 'number', default: '1' },
        { params: 'open(.sync)', explain: '面板是否打开', type: 'boolean', default: 'false' },
        { params: 'placeholder', explain: '没有值的时候显示的内容', type: 'string', default: '"请选择时间"' },
        { params: 'popupClassName', explain: '弹出层类名', type: 'string' },
        { params: 'popupStyle', explain: '弹出层样式对象', type: 'object' },
        { params: 'secondStep', explain: '秒选项间隔', type: 'number', default: '1' },
        { params: 'suffixIcon', explain: '自定义的选择框后缀图标', type: 'string | VNode | slot' },
        { params: 'clearIcon', explain: '自定义的清除图标', type: 'string | VNode | slot' },
        {
          params: 'use12Hours',
          explain: '使用 12 小时制，为 true 时 format 默认为 h:mm:ss a',
          type: 'boolean',
          default: 'false',
        },
        { params: 'value(v-model)', explain: '当前时间', type: 'moment' },
        { params: 'align', explain: '该值将合并到 placement 的配置中，设置参考 dom-align', type: 'Object' },
        {
          params: 'valueFormat',
          explain: '可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象',
          type: 'string，具体格式',
        },
      ],
      tableDataFn: [
        { params: 'change', explain: '时间发生变化的回调', type: 'function(time: moment | string, timeString: string): void' },
        { params: 'openChange', explain: '面板打开/关闭时的回调', type: '(open: boolean): void' },
      ],
      tableDataMethods: [
        { params: 'blur()', explain: '移除焦点' },
        { params: 'focus()', explain: '获取焦点' },
      ],
      tableData1: [
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'l',
        },
        {
          params: 'valueArr(v-model)',
          explain: '当前时间',
          type: '[ ] |　moment',
        },
        {
          params: 'disabled',
          explain: '禁用全部操作',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'allowClear',
          explain: '是否展示清除按钮',
          type: 'boolean',
          default: 'true',
        },
        {
          params: 'params',
          explain: '拥有所有参数见time-pickerAPI',
          type: '{ option1: {}, option2: {} }',
        },
        {
          params: 'titles',
          explain: '没有值的时候显示的内容',
          type: '["", ""]',
        },
        {
          params: 'suffixIcon',
          explain: '自定义的选择框后缀图标',
          type: 'slot',
        },
        {
          params: 'clearIcon',
          explain: '自定义的清除图标',
          type: 'slot',
        },
        {
          params: 'change',
          explain: '时间发生变化的回调',
          type: 'function([time: moment, time: moment ])',
        },
      ],
    };
  },
};
</script>
