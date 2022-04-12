<template>
  <a-switch v-on="$listeners" v-bind="$attrs" v-model="modelVal">
    <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
  </a-switch>
</template>

<script>
export default {
  name: 'YSwitch',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    value: {
      type: [String, Boolean],
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value2: this.value || this.defaultChecked,
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
  },
};
</script>
