import GlButton from './src/button';

GlButton.install = function(Vue) {
  Vue.component(GlButton.name, GlButton);
};

export default GlButton;
