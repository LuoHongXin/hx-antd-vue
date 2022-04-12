import GlSwitch from './src/switch';

GlSwitch.install = function(Vue) {
  Vue.component(GlSwitch.name, GlSwitch);
};

export default GlSwitch;
