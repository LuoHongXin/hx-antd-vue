import GlDropdown from './src';
import { Dropdown } from 'ant-design-vue';
GlDropdown.install = function(Vue) {
  Vue.component(GlDropdown.name, GlDropdown);
  Vue.component(Dropdown.name, Dropdown);
};

export default GlDropdown;
