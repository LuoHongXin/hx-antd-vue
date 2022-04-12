<template>
  <a-week-picker :class="widthSizeClass" class="y-week-picker" v-model="modelVal" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
      <slot :name="key" v-bind="bind"></slot>
    </template>
  </a-week-picker>
</template>
<script>
export default {
  name: 'YWeekPicker',
  props: {
    defaultValue: {
      type: [Object, Array],
    },
    value: {
      type: [Object, Array],
    },
    widthSize: {
      type: String,
      default: 's',
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
      inValue: this.value || this.defaultValue,
    };
  },
  watch: {
    value(value) {
      this.inValue = value;
    },
  },
  computed: {
    modelVal: {
      get() {
        return this.inValue;
      },
      set(val) {
        this.$emit('update-value', val);
        this.inValue = val;
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
};
</script>
