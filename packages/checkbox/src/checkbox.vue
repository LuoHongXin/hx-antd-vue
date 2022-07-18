<template>
  <a-checkbox v-on="$listeners" v-bind="$attrs" v-model="inValue">
    <slot />
  </a-checkbox>
</template>
<script>
export default {
  name: 'YCheckbox',
  inheritAttrs: false,
  props: {
    checked: {
      type: null,
      default: undefined,
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'checked',
    event: 'update-value',
  },
  data() {
    return {
      val: this.defaultChecked,
      params: {},
    };
  },
  watch: {
    checked(val) {
      this.val = val;
    },
  },
  computed: {
    inValue: {
      get: function() {
        return this.checked === undefined ? this.val : this.checked;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
  },
};
</script>
