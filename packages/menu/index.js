import GlMenu from './src';
import GlDivider from './src/divider';
import GlItem from './src/item';
import GlItemGroup from './src/itemGroup';
import GlSubMenu from './src/subMenu';
import GlModelMenu from './src/modelMenu';

GlMenu.install = function(Vue) {
  Vue.component(GlMenu.name, GlMenu);
  Vue.component(GlDivider.name, GlDivider);
  Vue.component(GlItem.name, GlItem);
  Vue.component(GlItemGroup.name, GlItemGroup);
  Vue.component(GlSubMenu.name, GlSubMenu);
  Vue.component(GlModelMenu.name, GlModelMenu);
};

export default GlMenu;
