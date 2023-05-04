import GLtipsButton from './src';
import tooltip from '../tooltip';
GLtipsButton.install = function(Vue) {
  Vue.use(tooltip);
  Vue.component(GLtipsButton.name, GLtipsButton);
};

export default GLtipsButton;
