import GlDatePicker from './src/datePicker';
import GlRangePicker from './src/rangePicker';
import GlMonthPicker from './src/monthPicker';
import GlWeekPicker from './src/weekPicker';
import { DatePicker } from 'ant-design-vue';
GlDatePicker.install = function(Vue) {
  Vue.component(GlDatePicker.name, GlDatePicker);
  Vue.component(GlRangePicker.name, GlRangePicker);
  Vue.component(GlMonthPicker.name, GlMonthPicker);
  Vue.component(GlWeekPicker.name, GlWeekPicker);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
  Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
  Vue.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker);
};

export default GlDatePicker;
