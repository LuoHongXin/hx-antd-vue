import GLtooltip from './src';
import { Tooltip } from 'ant-design-vue';
GLtooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
  Vue.component(GLtooltip.name, GLtooltip);
};

export default GLtooltip;
