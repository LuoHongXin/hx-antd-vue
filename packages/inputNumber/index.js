import GlInputNumber from './src/inputNumber';
import { InputNumber } from 'ant-design-vue';
import YButton from '../button';
import icon from '../icon';
GlInputNumber.install = function(Vue) {
  Vue.use(YButton);
  Vue.component(InputNumber.name, InputNumber);
  Vue.use(icon);
  Vue.component(GlInputNumber.name, GlInputNumber);
};

export default GlInputNumber;
