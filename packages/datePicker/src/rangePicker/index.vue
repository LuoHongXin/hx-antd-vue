<template>
  <a-range-picker :class="widthSizeClass" class="y-range-picker" v-model="modelVal" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
      <slot :name="key" v-bind="bind"></slot>
    </template>
  </a-range-picker>
</template>
<script>
export default {
  name: 'YRangePicker',
  props: {
    defaultValue: {
      type: [Object, Array],
    },
    value: {
      type: [Object, Array],
      default: undefined,
    },
    widthSize: {
      type: String,
      default: 'l',
    },
    autoWidth: {
      type: Boolean,
      default: false,
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
      get() {
        return this.value === undefined ? this.val : this.value;
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
};
</script>
