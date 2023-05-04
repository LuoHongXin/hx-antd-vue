import GLtableActionButton from './src/tableActionButton';
import tooltip from '../tooltip';
import buttonAction from '../buttonAction';
import dropdown from '../dropdown';
import menu from '../menu';
import icon from '../icon';
GLtableActionButton.install = function(Vue) {
  Vue.use(tooltip);
  Vue.use(buttonAction);
  Vue.use(dropdown);
  Vue.use(menu);
  Vue.use(icon);
  Vue.component(GLtableActionButton.name, GLtableActionButton);
};

export default GLtableActionButton;
