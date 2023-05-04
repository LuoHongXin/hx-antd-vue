<template>
  <a-month-picker
    :class="widthSizeClass"
    class="y-month-picker"
    v-model="modelVal"
    v-on="$listeners"
    v-bind="$attrs"
    :allowClear="allowClear"
  >
    <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
      <slot :name="key" v-bind="bind"></slot>
    </template>
  </a-month-picker>
</template>
<script>
import injectConfigMixins from '../../../../src/utils/injectConfigMixins.js';
export default {
  name: 'YMonthPicker',
  mixins: [injectConfigMixins],
  props: {
    defaultValue: {
      type: null,
    },
    value: {
      type: null,
      default: undefined,
    },
    widthSize: {
      type: String,
      default: 's',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      val: this.defaultValue,
    };
  },
  watch: {
    value(val) {
      this.val = val;
    },
  },
  computed: {
    modelVal: {
      get({ value, val }) {
        return value === undefined ? val : value;
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
};
</script>
