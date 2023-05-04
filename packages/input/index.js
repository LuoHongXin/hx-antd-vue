import GlInput from './src/input';
import GlInputGroup from './src/inputGroup';
import GlInputPassword from './src/inputPassword';
import GlInputSearch from './src/inputSearch';
import GlInputIp from './src/inputIp';
import GlTextarea from './src/textarea';
import { Input } from 'ant-design-vue';
import YSvgIcon from '../svgIcon';
GlInput.install = function(Vue) {
  Vue.component(Input.name, Input);
  Vue.component(Input.Group.name, Input.Group);
  Vue.component(Input.Password.name, Input.Password);
  Vue.component(Input.Search.name, Input.Search);
  Vue.component(Input.TextArea.name, Input.TextArea);
  Vue.component(GlInput.name, GlInput);
  Vue.component(GlInputGroup.name, GlInputGroup);
  Vue.component(GlInputPassword.name, GlInputPassword);
  Vue.component(GlInputSearch.name, GlInputSearch);
  Vue.component(GlInputIp.name, GlInputIp);
  Vue.component(GlInputIp.name, GlInputIp);
  Vue.component(GlTextarea.name, GlTextarea);
  Vue.use(YSvgIcon);
};

export default GlInput;
