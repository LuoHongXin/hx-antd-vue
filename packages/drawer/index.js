import GLdrawer from './src';
import { Drawer } from 'ant-design-vue';
GLdrawer.install = function(Vue) {
  Vue.component(GLdrawer.name, GLdrawer);
  Vue.component(Drawer.name, Drawer);
};

export default GLdrawer;
