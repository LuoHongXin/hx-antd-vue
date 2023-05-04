import GlNameSelect from './src/index';
import select from '../select';
import popover from '../popover';
import input from '../input';
import checkbox from '../checkbox';
import Row from '../row';
import Col from '../col';
import button from '../button';
import divider from '../divider';
import { Icon } from 'ant-design-vue';

GlNameSelect.install = function(Vue) {
  Vue.use(select);
  Vue.use(popover);
  Vue.use(input);
  Vue.use(checkbox);
  Vue.use(divider);
  Vue.use(button);
  Vue.component(Icon.name, Icon);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(GlNameSelect.name, GlNameSelect);
};

export default GlNameSelect;
