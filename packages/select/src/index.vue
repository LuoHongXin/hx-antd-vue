<template>
  <a-tree-select
    class="y-select"
    dropdownClassName="y-select-checkbox"
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    :treeData="options"
    :getPopupContainer="getPopupContainer"
    tree-checkable
    v-if="checkbox"
    :class="widthSizeClass"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
  >
    <a-tooltip :placement="placement" v-if="tooltip" slot-scope="{ label }" slot="title">
      <template slot="title">
        {{ label }}
      </template>
      <div class="y-select-ellipsis">{{ label }}</div>
    </a-tooltip>
    <template v-else slot="title">{{ label }}</template>
  </a-tree-select>
  <a-select
    class="y-select"
    dropdownClassName="y-select"
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    :getPopupContainer="getPopupContainer"
    v-else
    :class="widthSizeClass"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
    :defaultActiveFirstOption="defaultActiveFirstOption"
  >
    <template v-if="options && options.length">
      <a-select-option v-for="item in options" :key="item.value" :value="item.value" :disabled="item.disabled" class="y-select-option">
        <a-tooltip :placement="placement" v-if="tooltip">
          <template slot="title">
            {{ item.label }}
          </template>
          <div class="y-select-ellipsis">{{ item.label }}</div>
        </a-tooltip>
        <template v-else>{{ item.label }}</template>
      </a-select-option>
    </template>
    <slot v-else />
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key" v-if="key !== 'default'"></slot>
    </template>
  </a-select>
</template>
<script>
export default {
  name: 'YSelect',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    getPopupContainer: {
      type: Function,
      default: triggerNode => triggerNode.parentNode || document.body,
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
      default: function() {
        return undefined;
      },
    },
    value: {
      type: [String, Number, Array],
    },
    options: {
      type: Array,
      default: () => [],
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
  },
  data() {
    return {
      value2: this.value || this.defaultValue,
    };
  },
  watch: {
    value(value) {
      this.value2 = value;
    },
  },
  computed: {
    modelVal: {
      get() {
        return this.value2;
      },
      set(val) {
        this.$emit('update-value', val);
        this.value2 = val;
      },
    },
    widthSizeType() {
      const mode = this.$attrs.mode || 'default';
      const types = ['multiple', 'tags'];
      if (this.checkbox || types.includes(mode)) return 'l';
      return 's';
    },
    widthSizeClass() {
      const widthSizeType = this.widthSizeType;
      return this.autoWidth ? '' : `y-form-width-${widthSizeType}`;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/select.less';
</style>
