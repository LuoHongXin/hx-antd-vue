<template>
  <a-input-group class="y-input-search-group" compact :class="widthSizeClass">
    <y-select
      class="y-input-search-select"
      v-if="selectOption"
      :disabled="disabled"
      autoWidth
      v-model="selectValue1"
      @change="selectValueChange"
      :style="selectStyle"
      :class="selectClassName"
    >
      <y-select-option v-for="select in selectOption" :key="select.value" :value="select.value">
        {{ select.title }}
      </y-select-option>
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
    <y-button :disabled="disabled" @click="callback('callbackInput')">
      <a-icon v-if="loading" type="loading"></a-icon>
      <a-icon v-else type="search"></a-icon>
    </y-button>
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
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
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
  computed: {
    inValue: {
      get: function() {
        return this.value === null ? this.inValue2 : this.value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.inValue2 = newValue;
      },
    },
    selectValue1: {
      get: function() {
        return this.selectValue;
      },
      set: function(newValue) {
        this.$emit('update:selectValue', newValue);
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/inputSearch.less';
</style>
