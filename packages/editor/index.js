import GLEditor from './src/editor';

GLEditor.install = function(Vue) {
  Vue.component(GLEditor.name, GLEditor);
};

export default GLEditor;
