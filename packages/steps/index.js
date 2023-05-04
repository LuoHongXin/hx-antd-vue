import GLSteps from './src/steps';
import GLStep from './src/step';
import { Steps } from 'ant-design-vue';
GLSteps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
  Vue.component(Steps.Step.name, Steps.Step);
  Vue.component(GLSteps.name, GLSteps);
  Vue.component(GLStep.name, GLStep);
};

export default GLSteps;
