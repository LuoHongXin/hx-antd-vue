<template>
  <a-tooltip
    v-model="visible"
    v-if="value !== null"
    v-on="$listeners"
    v-bind="$attrs"
    :getPopupContainer="getProps('getPopupContainer')"
    class="y-tooltip"
  >
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-tooltip>
  <a-tooltip v-else v-on="$listeners" v-bind="$attrs" :getPopupContainer="getProps('getPopupContainer')" class="y-tooltip">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-tooltip>
</template>
<script>
import injectConfigMixins from '../../../src/utils/injectConfigMixins.js';
export default {
  name: 'YTooltip',
  mixins: [injectConfigMixins],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    value: {
      type: Boolean,
      default: null,
    },
    getPopupContainer: {
      type: Function,
      // default: triggerNode => triggerNode || document.body,
      default: () => document.body,
    },
  },
  computed: {
    visible: {
      get({ value, $attrs }) {
        if (value !== null) return value;
        return $attrs.visible;
      },
      set(val) {
        this.$emit('update-value', val);
      },
    },
  },
};
</script>
