import GlButtonGroup from './src/buttonGroup';
import YTipsButton from '../tipsButton';
import YButton from '../button';
import YDropdown from '../dropdown';
import YMenu from '../menu';
import YTooltip from '../tooltip';
import icon from '../icon';
GlButtonGroup.install = function(Vue) {
  Vue.component(GlButtonGroup.name, GlButtonGroup);
  Vue.use(icon);
  Vue.use(YTipsButton);
  Vue.use(YButton);
  Vue.use(YDropdown);
  Vue.use(YMenu);
  Vue.use(YTooltip);
};

export default GlButtonGroup;
