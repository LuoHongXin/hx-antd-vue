import GLColumnCheck from './src';
import YButton from '../button';
import YDrawer from '../drawer';
import YCheckbox from '../checkbox';
import YTooltip from '../tooltip';
import YSvgIcon from '../svgIcon';

GLColumnCheck.install = function(Vue) {
  Vue.component(GLColumnCheck.name, GLColumnCheck);
  Vue.use(YButton);
  Vue.use(YDrawer);
  Vue.use(YCheckbox);
  Vue.use(YTooltip);
  Vue.use(YSvgIcon);
};

export default GLColumnCheck;
