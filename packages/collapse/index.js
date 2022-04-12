import GLCollapse from './src/collapse';
import GLCollapsePanel from './src/collapsePanel';

GLCollapse.install = function(Vue) {
  Vue.component(GLCollapse.name, GLCollapse);
  Vue.component(GLCollapsePanel.name, GLCollapsePanel);
};

export default GLCollapse;
