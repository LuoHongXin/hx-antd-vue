import GlAutoComplete from './src/autoComplete';

GlAutoComplete.install = function(Vue) {
  Vue.component(GlAutoComplete.name, GlAutoComplete);
};

export default GlAutoComplete;
