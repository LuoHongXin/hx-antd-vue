import GlCheckboxTag from './src/checkboxTag';
import GlCheckboxTagGroup from './src/checkboxTagGroup';

GlCheckboxTag.install = function(Vue) {
  Vue.component(GlCheckboxTag.name, GlCheckboxTag);
  Vue.component(GlCheckboxTagGroup.name, GlCheckboxTagGroup);
};

export default GlCheckboxTag;
