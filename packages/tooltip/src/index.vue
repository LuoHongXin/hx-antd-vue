<template>
  <a-tooltip
    v-model="visible"
    v-if="value !== null"
    v-on="$listeners"
    v-bind="$attrs"
    :getPopupContainer="getPopupContainer"
    class="y-tooltip"
  >
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-tooltip>
  <a-tooltip v-else v-on="$listeners" v-bind="$attrs" :getPopupContainer="getPopupContainer" class="y-tooltip">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-tooltip>
</template>
<script>
export default {
  name: 'YTooltip',
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
      get() {
        if (this.value !== null) return this.value;
        return this.$attrs.visible;
      },
      set(val) {
        this.$emit('update-value', val);
      },
    },
  },
};
</script>
<style lang="less">
.y-tooltip {
  .ant-tooltip-inner {
    border-radius: 2px;
  }
}
</style>
