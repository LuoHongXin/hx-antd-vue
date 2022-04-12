import GLSelect from './src';
import GLSelectOption from './src/selectOption';

GLSelect.install = function(Vue) {
  Vue.component(GLSelect.name, GLSelect);
  Vue.component(GLSelectOption.name, GLSelectOption);
};

export default GLSelect;
