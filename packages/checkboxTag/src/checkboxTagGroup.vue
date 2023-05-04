<template>
  <div class="y-checkbox-tag-group">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <CheckboxTag
        v-for="(item, index) in dataSource"
        :key="(item[getValKey('value')] || getKey(item)) + index"
        :disabled="disabled || !!(item && item[getValKey('disabled')])"
        v-bind="item"
        :value="item[getValKey('value')] || getKey(item)"
        @change="change"
      >
        {{ item[getValKey('label')] || item }}
      </CheckboxTag>
    </template>
  </div>
</template>
<script>
import CheckboxTag from './checkboxTag';
export default {
  name: 'YCheckboxTagGroup',
  inheritAttrs: false,
  components: {
    CheckboxTag,
  },
  provide() {
    return {
      checkboxTagGroup: this,
      modelValue: () => this.modelValue,
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    replaceFields: {
      type: Object,
      default: () => ({ disabled: 'disabled', label: 'label', value: 'value' }),
    },
  },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  computed: {
    dataSource({ options }) {
      return options.map(option => {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            label: option,
            value: option,
          };
        }
        return option;
      });
    },
  },
  data() {
    return {
      modelValue: [],
    };
  },
  methods: {
    getKey(option) {
      return typeof option === 'string' || typeof option === 'number' ? option : '';
    },
    getValKey(type) {
      try {
        return this.replaceFields[type] || type;
      } catch {
        return type;
      }
    },
    change(e) {
      this.$emit('change', this.modelValue, e);
    },
    onChecked(checked, value) {
      if (!checked) {
        this.modelValue = this.modelValue.filter(val => val !== value);
        return;
      }
      if (this.modelValue.includes(value)) return;
      this.modelValue.push(value);
    },
  },
  watch: {
    value: {
      handler(value) {
        this.modelValue = value;
      },
      immediate: true,
      deep: true,
    },
    modelValue: {
      handler(modelValue) {
        this.$emit('update:value', modelValue);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
