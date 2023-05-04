import GlTagAction from './src';
import tag from '../tag';
import input from '../input';
import icon from '../icon';
GlTagAction.install = function(Vue) {
  Vue.use(tag);
  Vue.use(input);
  Vue.use(icon);
  Vue.component(GlTagAction.name, GlTagAction);
};

export default GlTagAction;
