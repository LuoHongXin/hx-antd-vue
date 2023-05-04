import GlSearchSelect from './src';
import configProvider from '../configProvider';
import empty from '../empty';
import select from '../select';
import input from '../input';
import icon from '../icon';
import button from '../button';
GlSearchSelect.install = function(Vue) {
  Vue.use(empty);
  Vue.use(configProvider);
  Vue.use(select);
  Vue.use(input);
  Vue.use(icon);
  Vue.use(button);
  Vue.component(GlSearchSelect.name, GlSearchSelect);
};

export default GlSearchSelect;
