import { useConfigInjectProp } from './common.js';
export default {
  inject: {
    componentGlobalConfig: {
      default: function() {
        return null;
      },
    },
  },
  methods: {
    getProps(prop) {
      const config =
        this.componentGlobalConfig && this.componentGlobalConfig() ? this.componentGlobalConfig()[this.$options.name] || {} : {};
      return useConfigInjectProp(config, this.$options.propsData, prop, this[prop]);
    },
  },
};
