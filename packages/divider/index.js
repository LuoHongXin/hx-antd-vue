import GLDivider from './src';
import { Divider } from 'ant-design-vue';
GLDivider.install = function(Vue) {
  Vue.component(GLDivider.name, GLDivider);
  Vue.component(Divider.name, Divider);
};

export default GLDivider;
