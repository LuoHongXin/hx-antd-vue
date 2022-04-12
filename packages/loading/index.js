import GlLoading from './src/loading';

GlLoading.install = function(Vue) {
  Vue.component(GlLoading.name, GlLoading);
};

export default GlLoading;
