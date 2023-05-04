import { ConfigProvider } from 'ant-design-vue';

export default {
  name: 'YConfigProvider',
  props: {
    autoInsertSpaceInButton: {
      type: Boolean,
      default: false,
    },
    componentConfig: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  provide() {
    return {
      componentGlobalConfig: () => this.componentConfig,
    };
  },
  extends: ConfigProvider,
};
