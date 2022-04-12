<template>
  <a-checkbox-group v-on="$listeners" v-bind="$attrs" v-model="inValue">
    <slot />
  </a-checkbox-group>
</template>
<script>
export default {
  name: 'YCheckboxGroup',
  provide() {
    return {
      YCheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
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
      val: this.value.length ? [...this.value] : [...this.defaultValue],
      params: {},
    };
  },
  watch: {
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function() {
        return this.val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
  },
};
</script>
