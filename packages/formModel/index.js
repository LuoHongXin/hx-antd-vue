import GLFormModel from './src';
import GLFormModelItem from './src/formModelItem';
import { FormModel } from 'ant-design-vue';
import YTooltip from '../tooltip';
GLFormModel.install = function(Vue) {
  Vue.component(GLFormModel.name, GLFormModel);
  Vue.component(GLFormModelItem.name, GLFormModelItem);
  Vue.component(FormModel.name, FormModel);
  Vue.component(FormModel.Item.name, FormModel.Item);
  Vue.use(YTooltip);
};

export default GLFormModel;
