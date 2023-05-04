import GLUpload from './src/upload';
import { Upload } from 'ant-design-vue';
GLUpload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
  Vue.component(Upload.Dragger.name, Upload.Dragger);
  Vue.component(GLUpload.name, GLUpload);
};

export default GLUpload;
