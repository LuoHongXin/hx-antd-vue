import GLSelect from './src';
import GLSelectOption from './src/selectOption';
import { Select, TreeSelect } from 'ant-design-vue';
import tooltip from '../tooltip';
GLSelect.install = function(Vue) {
  Vue.use(tooltip);
  Vue.component(Select.name, Select);
  Vue.component(Select.OptGroup.name, Select.OptGroup);
  Vue.component(Select.Option.name, Select.Option);
  Vue.component(TreeSelect.name, TreeSelect);
  Vue.component(TreeSelect.TreeNode.name, TreeSelect.TreeNode);
  Vue.component(GLSelect.name, GLSelect);
  Vue.component(GLSelectOption.name, GLSelectOption);
};

export default GLSelect;
