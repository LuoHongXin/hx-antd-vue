import GlTextarea from './src/textarea';

GlTextarea.install = function(Vue) {
  Vue.component(GlTextarea.name, GlTextarea);
};

export default GlTextarea;
