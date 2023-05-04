import GlCascaderMulti from './src/cascaderMulti';
import YSelect from '../select';
GlCascaderMulti.install = function(Vue) {
  Vue.component(GlCascaderMulti.name, GlCascaderMulti);
  Vue.use(YSelect);
};

export default GlCascaderMulti;
