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
            {{ item.label || item.title }}
          </template>
          <div class="y-select-ellipsis">{{ item.label || item.title }}</div>
        </a-tooltip>
        <template v-else>{{ item.label || item.title }}</template>
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
      get() {
        return this.value !== undefined ? this.value : this.val;
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeType() {
      const mode = this.$attrs.mode || 'default';
      const types = ['multiple', 'tags'];
      if (this.checkbox || types.includes(mode)) return 'l';
      return 's';
    },
    widthSizeClass() {
      const widthSize = this.widthSize;
      const widthSizeType = this.widthSizeType;
      const size = widthSize === 's' ? widthSizeType : widthSize;
      return this.autoWidth ? '' : `y-form-width-${size}`;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/select.less';
</style>
