<template>
  <a-auto-complete class="y-auto-complete" :class="widthSizeClass" v-on="$listeners" @search="onSearch" v-bind="$attrs" v-model="inValue">
    <template v-for="(val, slot) in $slots">
      <slot :name="slot" :slot="slot" />
    </template>
  </a-auto-complete>
</template>
<script>
export default {
  name: 'YAutoComplete',
  data() {
    return {
      timer: null,
      val: this.defaultValue,
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    time: {
      type: Number,
      default: 500,
    },
    widthSize: {
      type: String,
      default: 'm',
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
  watch: {
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function({ value, val }) {
        return value === undefined ? val : value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? 'y-auto-width' : `y-form-width-${widthSize}`;
    },
  },
  methods: {
    onSearch(val) {
      const _this = this;
      this.debounce(function() {
        _this.$emit('onSearch', val);
      }, this.time)();
    },
    debounce(f, wait) {
      return (...args) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          f(...args);
        }, wait);
      };
    },
  },
};
</script>
