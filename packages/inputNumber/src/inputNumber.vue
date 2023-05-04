<template>
  <a-input-number
    class="y-input-number"
    v-on="$listeners"
    v-bind="$attrs"
    :disabled="disabled"
    v-model="inValue"
    v-if="!controls || (!calculator && value !== false)"
    :class="widthSizeClass"
    :notControl="!controls"
  >
    <!-- <slot /> -->
    <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
  </a-input-number>
  <a-input-number
    :class="widthSizeClass"
    class="y-input-number"
    v-on="$listeners"
    v-bind="$attrs"
    :disabled="disabled"
    v-else-if="!controls || !calculator"
    :notControl="!controls"
  >
    <!-- <slot /> -->
    <slot :name="slot" :class="widthSizeClass" :slot="slot" v-for="(val, slot) in $scopedSlots" />
  </a-input-number>
  <div class="y-calculator" v-else :class="widthSizeClass">
    <y-button
      type="default"
      :disabled="disabled || disabledLeft"
      :style="{ width: btnSize + 'px', height: btnSize + 'px' }"
      @click="minus"
      class="y-input-number-btn y-input-number-btn-left"
    >
      <a-icon type="minus" />
    </y-button>
    <a-input-number v-on="$listeners" v-bind="$attrs" :disabled="disabled" v-model="inValue" class="y-input-number">
      <!-- <slot /> -->
      <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
    </a-input-number>
    <y-button
      type="default"
      :disabled="disabled || disabledRight"
      :style="{ width: btnSize + 'px', height: btnSize + 'px' }"
      @click="plus"
      class="y-input-number-btn y-input-number-btn-right"
    >
      <a-icon type="plus" />
    </y-button>
  </div>
</template>
<script>
const accAdd = (arg1, arg2) => {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return +((arg1 * m + arg2 * m) / m).toFixed(n);
};
const accSub = (arg1, arg2) => {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return +((arg1 * m - arg2 * m) / m).toFixed(n);
};
export default {
  name: 'YInputNumber',
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    calculator: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: [String, Number],
    },
    widthSize: {
      type: String,
      default: 'xs',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    controls: {
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
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function ({ value, val }) {
        if (value !== undefined) {
          return value;
        }
        return val;
      },
      set: function (newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    btnSize() {
      let size = 32;
      switch (this.$attrs.size) {
        case 'large':
          size = 40;
          break;
        case 'small':
          size = 24;
          break;
      }
      return size;
    },
    disabledLeft({ inValue }) {
      let min = this.$attrs.min;
      return min >= inValue || false;
    },
    disabledRight({ inValue }) {
      let max = this.$attrs.max;
      return max <= inValue || false;
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
  methods: {
    onChange(val) {
      if (this.inValue === val) return;
      this.inValue = val;
    },
    minus() {
      if (!this.inValue) {
        this.inValue = 0;
      }
      let num = this.$attrs.step || 1;
      this.inValue = accSub(this.inValue, num);
      let min = this.$attrs.min ?? undefined;
      if (min !== undefined && this.inValue <= min) {
        this.inValue = min;
      }
      this.$emit('minus', this.inValue);
    },
    plus() {
      if (!this.inValue) {
        this.inValue = 0;
      }
      let num = this.$attrs.step || 1;
      this.inValue = accAdd(this.inValue, num);
      let max = this.$attrs.max ?? undefined;
      if (max !== undefined && this.inValue >= max) {
        this.inValue = max;
      }
      this.$emit('plus', this.inValue);
    },
  },
};
</script>
