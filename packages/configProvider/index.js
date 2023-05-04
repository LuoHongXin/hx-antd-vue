import GlConfigProvider from './src/configProvider';
import { ConfigProvider } from 'ant-design-vue';
GlConfigProvider.install = function(Vue) {
  Vue.component(ConfigProvider.name, ConfigProvider);
  Vue.component(GlConfigProvider.name, GlConfigProvider);
};

export default GlConfigProvider;
