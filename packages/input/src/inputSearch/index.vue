<template>
  <a-input-group v-on="$listeners" v-bind="$attrs" :size="size" class="y-input-search-group" compact :class="widthSizeClass">
    <y-select
      class="y-input-search-select"
      v-if="selectOption"
      :disabled="disabled"
      autoWidth
      v-model="selectValue1"
      @change="selectValueChange"
      :style="selectStyle"
      :class="selectClassName"
      :options="selectOption"
    >
    </y-select>
    <y-input
      :class="selectOption ? '' : 'y-input-search-select-input'"
      @pressEnter="$emit('search', inValue)"
      :disabled="disabled"
      autoWidth
      v-model="inValue"
      ref="callbackInput"
      :placeholder="placeholder"
      :allowClear="allowClear"
    >
    </y-input>
    <y-button
      :size="size"
      :disabled="disabled"
      @click="callback('callbackInput')"
      :icon="loading ? 'loading' : 'search'"
      class="y-input-search-select-button"
    />
  </a-input-group>
</template>
<script>
export default {
  name: 'YInputSearch',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    widthSize: {
      type: String,
      default: 'm',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    selectOption: {
      type: Array,
    },
    selectValue: {
      type: [String, Number, undefined],
      default: undefined,
    },
    selectStyle: {
      type: null,
    },
    selectClassName: {
      type: null,
    },
    placeholder: {
      type: String,
    },
    allowClear: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    callback(name) {
      if (this.loading) return;
      if (name && this.$refs[name].$refs) {
        let refs = this.$refs[name].$refs;
        refs.input.focus();
      }
      this.$emit('search', this.inValue);
    },
    selectValueChange(val) {
      this.$emit('selectValueChange', val);
    },
  },
  data() {
    return {
      inValue2: '',
    };
  },
  watch: {
    value(val) {
      this.inValue2 = val;
    },
  },
  computed: {
    inValue: {
      get: function({ value, inValue2 }) {
        return value === undefined ? inValue2 : value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.inValue2 = newValue;
      },
    },
    selectValue1: {
      get: function({ selectValue }) {
        return selectValue;
      },
      set: function(newValue) {
        this.$emit('update:selectValue', newValue);
      },
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
};
</script>
