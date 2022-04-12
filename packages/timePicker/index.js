import GLTimePicker from './src';
import GLRangeTimePicker from './src/rangeTimePicker/index';
GLTimePicker.install = function(Vue) {
  Vue.component(GLTimePicker.name, GLTimePicker);
  Vue.component(GLRangeTimePicker.name, GLRangeTimePicker);
};

export default GLTimePicker;
