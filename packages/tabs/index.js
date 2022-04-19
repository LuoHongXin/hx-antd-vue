import GlTabs from './src/tabs';
import GlTabPane from './src/tabPane';
import GlTabContent from './src/tabContent';

GlTabs.install = function(Vue) {
  Vue.component(GlTabs.name, GlTabs);
  Vue.component(GlTabPane.name, GlTabPane);
  Vue.component(GlTabContent.name, GlTabContent);
};

export default GlTabs;
