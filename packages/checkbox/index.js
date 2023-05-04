import GlCheckbox from './src/checkbox';
import GlCheckboxGroup from './src/checkboxGroup';
import { Checkbox } from 'ant-design-vue';
GlCheckbox.install = function(Vue) {
  Vue.component(GlCheckbox.name, GlCheckbox);
  Vue.component(GlCheckboxGroup.name, GlCheckboxGroup);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(Checkbox.Group.name, Checkbox.Group);
};

export default GlCheckbox;
