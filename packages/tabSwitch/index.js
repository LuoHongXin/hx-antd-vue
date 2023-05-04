import GlTabSwitch from './src/tabSwitch';
import tabs from '../tabs';
GlTabSwitch.install = function(Vue) {
  Vue.use(tabs);
  Vue.component(GlTabSwitch.name, GlTabSwitch);
};

export default GlTabSwitch;
