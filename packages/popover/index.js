import GLpopover from './src';
import { Popover } from 'ant-design-vue';

GLpopover.install = function(Vue) {
  Vue.component(GLpopover.name, GLpopover);
  Vue.component(Popover.name, Popover);
};

export default GLpopover;
