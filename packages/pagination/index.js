import GlPagination from './src/pagination';
import { Pagination } from 'ant-design-vue';
GlPagination.install = function(Vue) {
  Vue.component(GlPagination.name, GlPagination);
  Vue.component(Pagination.name, Pagination);
};

export default GlPagination;
