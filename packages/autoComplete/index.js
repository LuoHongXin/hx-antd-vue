import GlAutoComplete from './src/autoComplete';
import { AutoComplete } from 'ant-design-vue';
GlAutoComplete.install = function(Vue) {
  Vue.component(GlAutoComplete.name, GlAutoComplete);
  Vue.component(AutoComplete.name, AutoComplete);
};

export default GlAutoComplete;
