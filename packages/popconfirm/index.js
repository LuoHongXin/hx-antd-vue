import GLpopconfirm from './src';
import { Popconfirm } from 'ant-design-vue';
import icon from '../icon';
GLpopconfirm.install = function(Vue) {
  Vue.component(GLpopconfirm.name, GLpopconfirm);
  Vue.component(Popconfirm.name, Popconfirm);
  Vue.use(icon);
};

export default GLpopconfirm;
