<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="DatePicker 日期选择框" detail="输入或选择日期的控件。" />
    <title-detail title="何时使用" detail="当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。" />
    <!-- 组件展示 -->
    <a-tabs type="card">
      <a-tab-pane key="1" tab="DatePicker">
        <MyDatePicker />
      </a-tab-pane>
      <a-tab-pane key="2" tab="MonthPicker">
        <MyMonthPicker />
      </a-tab-pane>
      <a-tab-pane key="3" tab="RangePicker">
        <MyRangePicker />
      </a-tab-pane>
      <a-tab-pane key="4" tab="WeekPicker">
        <MyWeekPicker />
      </a-tab-pane>
    </a-tabs>
    <h2>以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。</h2>
    <api-table :data="tableData" title="共同 API"></api-table>
    <api-table :data="tableDataFn" title="共同 事件"></api-table>
  </div>
</template>

<script>
import MyDatePicker from './myDatePicker';
import MyMonthPicker from './myMonthPicker';
import MyRangePicker from './myRangePicker';
import MyWeekPicker from './myWeekPicker';
export default {
  name: 'picker',
  components: {
    MyDatePicker,
    MyMonthPicker,
    MyRangePicker,
    MyWeekPicker,
  },
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
          default: 'm（range-picker默认为l ange-picker show-time 模式下不支持）',
        },
        { params: 'allowClear', explain: '是否显示清除按钮', type: 'boolean', default: 'fasle' },
        { params: 'autoFocus', explain: '自动获取焦点', type: 'boolean', default: 'fasle' },
        {
          params: 'dateRender',
          explain: '作用域插槽，自定义日期单元格的内容',
          type: 'slot="dateRender" slot-scope="current, today"',
        },
        { params: 'disabled', explain: '禁用', type: 'boolean', default: 'false' },
        { params: 'disabledDate', explain: '不可选择的日期', type: '(currentDate: moment) => boolean' },
        { params: 'getCalendarContainer', explain: '定义浮层的容器，默认为 body 上新建 div', type: 'function(trigger)' },
        { params: 'locale', explain: '国际化配置', type: 'object' },
        { params: 'mode', explain: '	日期面板的状态（设置后无法选择年份/月份？）', type: 'time|date|month|year|decade', default: 'date' },
        { params: 'open', explain: '控制弹层是否展开', type: 'boolean' },
        { params: 'placeholder', explain: '输入框提示文字', type: 'string|RangePicker[]' },
        { params: 'popupStyle', explain: '额外的弹出日历样式', type: 'object', default: '{ }' },
        { params: 'dropdownClassName', explain: '额外的弹出日历 className', type: 'string' },
        { params: 'size', explain: '输入框大小，large 高度为 40px，small 为 24px，默认是 32px', type: 'string' },
        { params: 'suffixIcon', explain: '自定义的选择框后缀图标', type: 'VNode | slot' },
        { params: 'inputReadOnly', explain: '设置输入框为只读（避免在移动设备上打开虚拟键盘）', type: 'boolean' },
        { params: 'align', explain: '该值将合并到 placement 的配置中，设置参考 dom-align', type: 'Object' },
        {
          params: 'valueFormat',
          explain: '	可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象',
          type: 'string',
        },
      ],
      tableDataFn: [
        {
          params: 'openChange',
          explain: '弹出日历和关闭日历的回调',
          type: 'function(status)',
        },
        {
          params: 'panelChange',
          explain: '日期面板变化时的回调',
          type: 'function(value, mode)',
        },
      ],
    };
  },
};
</script>
