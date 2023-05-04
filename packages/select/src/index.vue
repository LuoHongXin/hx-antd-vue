<template>
  <a-tree-select
    class="y-select"
    dropdownClassName="y-select-checkbox"
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    :treeData="options"
    :getPopupContainer="getProps('getPopupContainer')"
    tree-checkable
    v-if="checkbox"
    :class="widthSizeClass"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
    :allowClear="getProps('allowClear')"
  >
    <a-tooltip :placement="placement" v-if="getProps('tooltip')" slot-scope="{ label }" slot="title">
      <template slot="title">
        {{ label }}
      </template>
      <div class="y-select-ellipsis">{{ label }}</div>
    </a-tooltip>
    <template v-else slot="title">{{ label }}</template>
  </a-tree-select>
  <a-select
    class="y-select"
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    :getPopupContainer="getProps('getPopupContainer')"
    v-else
    :filterOption="filterOption"
    :class="widthSizeClass"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
    :defaultActiveFirstOption="defaultActiveFirstOption"
    :allowClear="getProps('allowClear')"
  >
    <template v-if="options && options.length">
      <a-select-option
        v-for="item in options"
        :key="item[optionsKey]"
        :value="item.value"
        :disabled="item.disabled"
        class="y-select-option"
      >
        <a-tooltip :placement="placement" v-if="getProps('tooltip')">
          <template slot="title">
            {{ item.label || item.title || item.value }}
          </template>
          <div class="y-select-ellipsis">{{ item.label || item.title || item.value }}</div>
        </a-tooltip>
        <template v-else>{{ item.label || item.title || item.value }}</template>
      </a-select-option>
    </template>
    <slot v-else />
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key" v-if="key !== 'default'"></slot>
    </template>
  </a-select>
</template>
<script>
import injectConfigMixins from '../../../src/utils/injectConfigMixins.js';
export default {
  name: 'YSelect',
  mixins: [injectConfigMixins],
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    getPopupContainer: {
      type: Function,
      default: (triggerNode) => triggerNode.parentNode || document.body,
    },
    dropdownMatchSelectWidth: {
      type: Boolean,
      default: true,
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: [String, Number, Array],
      default: undefined,
    },
    value: {
      type: [String, Number, Array],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionsKey: {
      type: String,
      default: 'value',
    },
    tooltip: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'right',
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
    widthSize: {
      type: String,
      default: 's',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    filterOption: {
      type: Function,
      default: (input, option) => {
        const text =
          option.componentOptions.children[0]?.componentOptions?.children[0]?.children[0]?.text || option.componentOptions.children[0].text;
        return text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      },
    },
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
      get({ value, val, $attrs, checkbox }) {
        const selectData = value !== undefined ? value : val;
        const mode = $attrs.mode || 'default';
        const isMultiple = !!(checkbox || ['multiple', 'tags'].includes(mode));
        return isMultiple ? selectData || [] : selectData;
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeType({ $attrs, checkbox }) {
      const mode = $attrs.mode || 'default';
      const types = ['multiple', 'tags'];
      if (checkbox || types.includes(mode)) return 'l';
      return 's';
    },
    widthSizeClass({ widthSize, widthSizeType, autoWidth }) {
      const size = widthSize === 's' ? widthSizeType : widthSize;
      return autoWidth ? '' : `y-form-width-${size}`;
    },
  },
};
</script>
