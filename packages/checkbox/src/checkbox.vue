<template>
  <a-checkbox v-on="$listeners" v-bind="$attrs" v-if="YCheckboxGroup" :value="value">
    <slot />
  </a-checkbox>
  <a-checkbox v-on="$listeners" v-bind="$attrs" v-model="inValue" v-else>
    <slot />
  </a-checkbox>
</template>
<script>
export default {
  name: 'YCheckbox',
  props: {
    value: {
      type: null,
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  inject: {
    YCheckboxGroup: {
      default: '',
    },
  },
  data() {
    return {
      val: this.value || this.defaultChecked,
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
