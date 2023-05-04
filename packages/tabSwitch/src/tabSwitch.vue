<template>
  <a-tabs v-model="inValue" class="y-tab-switch">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <a-tab-pane
        v-for="(item, index) in options"
        :key="item.value || itemn.text || item.key || index"
        :tab="item.text || item.value || item.key || index"
        :disabled="item.disabled"
      />
    </template>
  </a-tabs>
</template>

<script>
const v = Symbol('YTabSwitch');
export default {
  name: 'YTabSwitch',
  props: {
    value: {
      type: null,
      default: v,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      val: '',
    };
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  computed: {
    inValue: {
      get({ value, val }) {
        return value === v ? val : value;
      },
      set(newValue) {
        this.$emit('change', newValue);
        if (this.value === v) this.val = newValue;
      },
    },
  },
};
</script>
