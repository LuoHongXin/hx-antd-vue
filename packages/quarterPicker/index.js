import GlQuarterPicker from './src/quarterPicker';
import select from '../select';
import icon from '../icon';
GlQuarterPicker.install = function(Vue) {
  Vue.use(select);
  Vue.component(GlQuarterPicker.name, GlQuarterPicker);
  Vue.use(icon);
};

export default GlQuarterPicker;
