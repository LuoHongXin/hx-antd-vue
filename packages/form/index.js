import GLForm from './src';
import GLFormItem from './src/formItem';
import { Form } from 'ant-design-vue';
import YTooltip from '../tooltip';
GLForm.install = function(Vue) {
  Vue.component(GLForm.name, GLForm);
  Vue.component(GLFormItem.name, GLFormItem);
  Vue.component(Form.name, Form);
  Vue.component(Form.Item.name, Form.Item);
  Vue.use(YTooltip);
};

export default GLForm;
