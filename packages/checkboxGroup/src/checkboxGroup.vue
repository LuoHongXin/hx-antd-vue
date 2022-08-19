<template>
  <a-checkbox-group v-on="$listeners" v-bind="$attrs" v-model="inValue">
    <slot />
  </a-checkbox-group>
</template>
<script>
export default {
  name: 'YCheckboxGroup',
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: null,
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      val: this.defaultValue,
      params: {},
    };
  },
  computed: {
    inValue: {
      get: function({ value, val }) {
        return value === null ? val : value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
  },
};
</script>
