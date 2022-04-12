import GLForm from './src';
import GLFormItem from './src/formItem';
GLForm.install = function(Vue) {
  Vue.component(GLForm.name, GLForm);
  Vue.component(GLFormItem.name, GLFormItem);
};

export default GLForm;
