import GLSteps from './src/steps';
import GLStep from './src/step';

GLSteps.install = function(Vue) {
  Vue.component(GLSteps.name, GLSteps);
  Vue.component(GLStep.name, GLStep);
};

export default GLSteps;
