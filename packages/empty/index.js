import GLEmpty from './src/empty';
import { Empty } from 'ant-design-vue';
import YSvgIcon from '../svgIcon';
GLEmpty.install = function(Vue) {
  Vue.component(GLEmpty.name, GLEmpty);
  Vue.component(Empty.name, Empty);
  Vue.use(YSvgIcon);
};

export default GLEmpty;
