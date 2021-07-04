import GlPagination from './src/pagination';

GlPagination.install = function(Vue) {
  Vue.component(GlPagination.name, GlPagination);
};

export default GlPagination;
