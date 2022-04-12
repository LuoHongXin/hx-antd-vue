import GlDatePicker from './src/datePicker';
import GlRangePicker from './src/rangePicker';
import GlMonthPicker from './src/monthPicker';
import GlWeekPicker from './src/weekPicker';

GlDatePicker.install = function(Vue) {
  Vue.component(GlDatePicker.name, GlDatePicker);
  Vue.component(GlRangePicker.name, GlRangePicker);
  Vue.component(GlMonthPicker.name, GlMonthPicker);
  Vue.component(GlWeekPicker.name, GlWeekPicker);
};

export default GlDatePicker;
