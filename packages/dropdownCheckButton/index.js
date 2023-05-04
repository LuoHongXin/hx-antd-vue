import GLdropdownCheckButton from './src/dropdownCheckButton';
import YDropdown from '../dropdown';
import YMenu from '../menu';
import YRadio from '../radio';
import YCheckbox from '../checkbox';
import icon from '../icon';
GLdropdownCheckButton.install = function(Vue) {
  Vue.component(GLdropdownCheckButton.name, GLdropdownCheckButton);
  Vue.use(icon);
  Vue.use(YDropdown);
  Vue.use(YMenu);
  Vue.use(YRadio);
  Vue.use(YCheckbox);
};

export default GLdropdownCheckButton;
