import GlTagInput from './src';
import tag from '../tag';
import tooltip from '../tooltip';
import input from '../input';
import linkTag from '../linkTag';
import icon from '../icon';
GlTagInput.install = function(Vue) {
  Vue.use(tag);
  Vue.use(tooltip);
  Vue.use(input);
  Vue.use(linkTag);
  Vue.use(icon);
  Vue.component(GlTagInput.name, GlTagInput);
};

export default GlTagInput;
