import GlTabs from './src/tabs';
import GlTabPane from './src/tabPane';
import GlTabContent from './src/tabContent';
import { Tabs } from 'ant-design-vue';
GlTabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tabs.TabContent.name, Tabs.TabContent);
  Vue.component(Tabs.TabPane.name, Tabs.TabPane);
  Vue.component(GlTabs.name, GlTabs);
  Vue.component(GlTabPane.name, GlTabPane);
  Vue.component(GlTabContent.name, GlTabContent);
};

export default GlTabs;
