import GLProgress from './src/progress';

GLProgress.install = function(Vue) {
  Vue.component(GLProgress.name, GLProgress);
};

export default GLProgress;
