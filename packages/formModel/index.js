import GLFormModel from './src';
import GLFormModelItem from './src/formModelItem';
GLFormModel.install = function(Vue) {
  Vue.component(GLFormModel.name, GLFormModel);
  Vue.component(GLFormModelItem.name, GLFormModelItem);
};

export default GLFormModel;
