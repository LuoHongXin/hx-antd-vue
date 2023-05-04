import GlJsonViewer from './src/jsonViewer';

GlJsonViewer.install = function(Vue) {
  Vue.component(GlJsonViewer.name, GlJsonViewer);
};

export default GlJsonViewer;
