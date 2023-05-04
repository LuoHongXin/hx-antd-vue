import GlLoading from './src/loading';
import { Spin } from 'ant-design-vue';
GlLoading.install = function(Vue) {
  Vue.component(GlLoading.name, GlLoading);
  Vue.component(Spin.name, Spin);
};

export default GlLoading;
