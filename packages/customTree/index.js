import GlCustomTree from './src/customTree';
import { Tree, Icon } from 'ant-design-vue';
import YTooltip from '../tooltip';
import YSvgIcon from '../svgIcon';
import YMenu from '../menu';
import YTipsButton from '../tipsButton';
import YButton from '../button';
GlCustomTree.install = function(Vue) {
  Vue.component(GlCustomTree.name, GlCustomTree);
  Vue.component(Tree.name, Tree);
  Vue.component(Icon.name, Icon);
  Vue.use(YTooltip);
  Vue.use(YSvgIcon);
  Vue.use(YMenu);
  Vue.use(YTipsButton);
  Vue.use(YButton);
};

export default GlCustomTree;
