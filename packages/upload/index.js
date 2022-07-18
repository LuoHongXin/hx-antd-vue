import GLUpload from './src/upload';
GLUpload.install = function(Vue) {
  Vue.component(GLUpload.name, GLUpload);
};

export default GLUpload;
