import GLTimePicker from './src';
import GLRangeTimePicker from './src/rangeTimePicker/index';
import { TimePicker } from 'ant-design-vue';
import icon from '../icon';
import Space from '../space';
GLTimePicker.install = function(Vue) {
  Vue.use(icon);
  Vue.use(Space);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(GLTimePicker.name, GLTimePicker);
  Vue.component(GLRangeTimePicker.name, GLRangeTimePicker);
};

export default GLTimePicker;
