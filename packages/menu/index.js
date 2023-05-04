import GlMenu from './src';
import GlDivider from './src/divider';
import GlItem from './src/item';
import GlItemGroup from './src/itemGroup';
import GlSubMenu from './src/subMenu';
import GlModelMenu from './src/modelMenu';
import { Menu } from 'ant-design-vue';
import icon from '../icon';
GlMenu.install = function(Vue) {
  Vue.component(GlMenu.name, GlMenu);
  Vue.component(GlDivider.name, GlDivider);
  Vue.component(GlItem.name, GlItem);
  Vue.component(GlItemGroup.name, GlItemGroup);
  Vue.component(GlSubMenu.name, GlSubMenu);
  Vue.component(GlModelMenu.name, GlModelMenu);
  Vue.component(Menu.name, Menu);
  Vue.use(icon);
  Vue.component(Menu.Divider.name, Menu.Divider);
  Vue.component(Menu.Item.name, Menu.Item);
  Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);
  Vue.component(Menu.SubMenu.name, Menu.SubMenu);
};

export default GlMenu;
