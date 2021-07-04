import GlTag from './src/tag';

GlTag.install = function(Vue) {
  Vue.component(GlTag.name, GlTag);
};

export default GlTag;
