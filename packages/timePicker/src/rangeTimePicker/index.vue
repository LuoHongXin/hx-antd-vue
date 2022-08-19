<template>
  <div class="y-range-time-picker" :disabled="disabled" :class="widthSizeClass">
    <y-time-picker
      :placeholder="titles[0]"
      v-model="value1"
      :disabled="disabled"
      :allowClear="false"
      v-bind="params.option1"
    ></y-time-picker>
    <span class="y-range-time-picker-icon">
      <a-icon type="swap-right" />
    </span>
    <y-time-picker
      :placeholder="titles[1]"
      v-model="value2"
      :disabled="disabled"
      :allowClear="false"
      v-bind="params.option2"
    ></y-time-picker>
    <span class="y-range-time-picker-clock">
      <template v-if="$slots.suffixIcon">
        <slot name="suffixIcon" />
      </template>
      <a-icon type="clock-circle" v-else />
    </span>
    <span class="y-range-time-picker-circle" v-if="allowClear" @click="(value1 = undefined), (value2 = undefined)">
      <template v-if="$slots.clearIcon">
        <slot name="clearIcon" />
      </template>
      <a-icon theme="filled" type="close-circle" v-else />
    </span>
  </div>
</template>
<script>
export default {
  name: 'YRangeTimePicker',
  props: {
    valueArr: {
      type: Array,
      default: () => [undefined, undefined],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    params: {
      type: Object,
      default: () => ({ option1: {}, option2: {} }),
    },
    titles: {
      type: Array,
      default: function() {
        return [this.$wci18n.t('wh.timePicker.startTime'), this.$wci18n.t('wh.timePicker.endTime')];
      },
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
    prop: 'valueArr',
    event: 'update-valueArr',
  },
  data() {
    return {
      value1: undefined,
      value2: undefined,
      inValue: [undefined, undefined],
    };
  },
  computed: {
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
  watch: {
    value1(val) {
      this.$set(this.inValue, [0], val);
    },
    value2(val) {
      this.$set(this.inValue, [1], val);
    },
    inValue: {
      handler(inValue) {
        this.$emit('update-valueArr', inValue);
        this.$emit('change', inValue);
      },
      deep: true,
    },
    valueArr: {
      handler(valueArr) {
        this.value1 = valueArr[0];
        this.value2 = valueArr[1];
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
