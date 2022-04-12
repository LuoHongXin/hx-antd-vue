<template>
  <a-input-number
    class="y-input-number"
    v-on="$listeners"
    v-bind="$attrs"
    :disabled="disabled"
    v-model="inValue"
    v-if="!calculator && value !== false"
    :class="widthSizeClass"
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
    v-else-if="!calculator"
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
  let r1, r2, m;
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
  return (arg1 * m + arg2 * m) / m;
};
const calcFn = {
  add() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accAdd(total, num));
  },
  sub() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accAdd(total, -num));
  },
};
export default {
  name: 'YInputNumber',
  props: {
    value: {
      type: [String, Number],
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
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      val: this.value ?? this.defaultValue,
    };
  },
  watch: {
    value(value) {
      this.inValue = value;
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
    disabledLeft() {
      let min = this.$attrs.min;
      return min >= this.inValue || false;
    },
    disabledRight() {
      let max = this.$attrs.max;
      return max <= this.inValue || false;
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
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
      let min = this.$attrs.min ?? undefined;
      if (min !== undefined && this.inValue <= min) {
        this.inValue = min;
        return;
      }
      let num = this.$attrs.step || 1;
      this.inValue = calcFn.sub(this.inValue, num);
    },
    plus() {
      if (!this.inValue) {
        this.inValue = 0;
      }
      let max = this.$attrs.max ?? undefined;
      if (max !== undefined && this.inValue >= max) {
        this.inValue = max;
        return;
      }
      let num = this.$attrs.step || 1;
      this.inValue = calcFn.add(this.inValue, num);
    },
  },
};
</script>
<style lang="less">
// @import '~/src/styles/components/inputAll.less';
@import '~/src/styles/components/inputNumber.less';
</style>
