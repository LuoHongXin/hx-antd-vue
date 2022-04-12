import GlInput from './src/input';
import GlInputGroup from './src/inputGroup';
import GlInputPassword from './src/inputPassword';
import GlInputSearch from './src/inputSearch';
import GlInputIp from './src/inputIp';

GlInput.install = function(Vue) {
  Vue.component(GlInput.name, GlInput);
  Vue.component(GlInputGroup.name, GlInputGroup);
  Vue.component(GlInputPassword.name, GlInputPassword);
  Vue.component(GlInputSearch.name, GlInputSearch);
  Vue.component(GlInputIp.name, GlInputIp);
};

export default GlInput;
