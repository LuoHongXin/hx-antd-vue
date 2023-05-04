import GLCollapse from './src/collapse';
import GLCollapsePanel from './src/collapsePanel';
import { Collapse } from 'ant-design-vue';
GLCollapse.install = function(Vue) {
  Vue.component(GLCollapse.name, GLCollapse);
  Vue.component(GLCollapsePanel.name, GLCollapsePanel);
  Vue.component(Collapse.name, Collapse);
  Vue.component(Collapse.Panel.name, Collapse.Panel);
};

export default GLCollapse;
