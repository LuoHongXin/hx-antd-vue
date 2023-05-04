import GlSearchSelect from './src';
import configProvider from '../configProvider';
import empty from '../empty';
import select from '../select';
import input from '../input';
import icon from '../icon';
import button from '../button';
import tooltip from '../tooltip';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'; // 引入它的 css
import VueVirtualScroller from 'vue-virtual-scroller'; // 引入它
GlSearchSelect.install = function(Vue) {
  Vue.use(empty);
  Vue.use(configProvider);
  Vue.use(select);
  Vue.use(input);
  Vue.use(icon);
  Vue.use(button);
  Vue.use(tooltip);
  Vue.use(VueVirtualScroller);
  Vue.component(GlSearchSelect.name, GlSearchSelect);
};

export default GlSearchSelect;
