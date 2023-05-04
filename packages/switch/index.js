import GlSwitch from './src/switch';
import { Switch } from 'ant-design-vue';
GlSwitch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
  Vue.component(GlSwitch.name, GlSwitch);
};

export default GlSwitch;
