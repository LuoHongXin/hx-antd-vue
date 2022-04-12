import GLtooltip from './src';

GLtooltip.install = function(Vue) {
  Vue.component(GLtooltip.name, GLtooltip);
};

export default GLtooltip;
