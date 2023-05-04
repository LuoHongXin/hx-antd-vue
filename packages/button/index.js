import GlButton from './src/button';
import { Button } from 'ant-design-vue';
GlButton.install = function(Vue) {
  Vue.component(GlButton.name, GlButton);
  Vue.component(Button.name, Button);
  Vue.component(Button.Group.name, Button.Group);
};

export default GlButton;
