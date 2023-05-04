import GLProgress from './src/progress';
import { Progress } from 'ant-design-vue';

GLProgress.install = function(Vue) {
  Vue.component(GLProgress.name, GLProgress);
  Vue.component(Progress.name, Progress);
};

export default GLProgress;
