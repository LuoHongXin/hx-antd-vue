import GLModelTable from './src/modelTable';
import YTable from '../table';
import buttonGroup from '../buttonGroup';
import select from '../select';
import autoComplete from '../autoComplete';
import input from '../input';
import tooltip from '../tooltip';
import affix from '../affix';
import YSvgIcon from '../svgIcon';
import empty from '../empty';
import configProvider from '../configProvider';
import dropdownCheckButton from '../dropdownCheckButton';

import { Icon } from 'ant-design-vue';
GLModelTable.install = function(Vue) {
  Vue.use(YTable);
  Vue.use(buttonGroup);
  Vue.use(select);
  Vue.use(autoComplete);
  Vue.use(input);
  Vue.use(tooltip);
  Vue.use(YSvgIcon);
  Vue.use(empty);
  Vue.use(dropdownCheckButton);
  Vue.component(Icon.name, Icon);
  Vue.component(affix.name, affix);
  Vue.component(configProvider.name, configProvider);
  Vue.component(GLModelTable.name, GLModelTable);
};

export default GLModelTable;
