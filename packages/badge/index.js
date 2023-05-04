import GLBadge from './src/badge';
import { Badge } from 'ant-design-vue';
GLBadge.install = function(Vue) {
  Vue.component(GLBadge.name, GLBadge);
  Vue.component(Badge.name, Badge);
};

export default GLBadge;
