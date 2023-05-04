import GLDescribe from './src';
import YTextLink from '../textLink';
GLDescribe.install = function(Vue) {
  Vue.use(YTextLink);
  Vue.component(GLDescribe.name, GLDescribe);
};

export default GLDescribe;
