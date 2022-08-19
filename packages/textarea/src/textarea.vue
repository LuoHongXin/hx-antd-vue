<template>
  <div class="y-textarea" :class="widthSizeClass">
    <a-textarea v-on="$listeners" v-bind="{ ...$attrs, ...params }" v-model="inValue" />
    <div v-if="fixedNumber" class="text-num">{{ valueLength }}/{{ maxLength }}</div>
  </div>
</template>
<script>
export default {
  name: 'YTextarea',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    fixedNumber: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: [Number, String],
      default: 256,
    },
    autoSize: {
      type: [Boolean, Object],
      default: () => {
        return { minRows: 4, maxRows: 4 };
      },
    },
    widthSize: {
      type: String,
      default: 'xl',
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
      params: {},
    };
  },
  created() {
    if (this.fixedNumber) {
      this.$set(this.params, 'maxLength', Number(this.maxLength));
    }
    this.$set(this.params, 'autoSize', this.autoSize);
  },
  watch: {
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function({ value, val }) {
        if (value !== null) {
          return value;
        }
        return val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    valueLength({ inValue }) {
      if (!inValue) return 0;
      return inValue.length;
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
};
</script>
