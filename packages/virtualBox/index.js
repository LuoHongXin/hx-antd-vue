import GLvirtualBox from './src';
GLvirtualBox.install = function(Vue) {
  Vue.component(GLvirtualBox.name, GLvirtualBox);
};

export default GLvirtualBox;
