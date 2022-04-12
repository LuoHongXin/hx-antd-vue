import GLAlert from './src/alert';

GLAlert.install = function(Vue) {
  Vue.component(GLAlert.name, GLAlert);
};

export default GLAlert;
