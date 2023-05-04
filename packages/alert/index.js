import GLAlert from './src/alert';
import { Alert } from 'ant-design-vue';
GLAlert.install = function(Vue) {
  Vue.component(GLAlert.name, GLAlert);
  Vue.component(Alert.name, Alert);
};

export default GLAlert;
