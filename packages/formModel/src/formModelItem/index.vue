<template>
  <a-form-model-item class="y-form-item" v-on="$listeners" v-bind="$attrs" ref="YFormModelItem">
    <template v-for="(val, key) in $scopedSlots" :slot="key">
      <slot :name="key"></slot>
    </template>
    <y-tooltip v-if="label" :placement="placement" slot="label">
      <template slot="title">
        <span>{{ label }}</span>
      </template>
      <span class="y-form-item-label-title">{{ label }}</span>
    </y-tooltip>
  </a-form-model-item>
</template>
<script>
export default {
  name: 'YFormModelItem',
  inheritAttrs: false,
  provide() {
    return {
      yFormItem: this,
    };
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
    },
  },
  computed: {
    y_props({ $refs }) {
      return $refs.YFormModelItem._props || {};
    },
    validateDisabled({ $refs }) {
      return $refs.YFormModelItem.validateDisabled || false;
    },
    validateMessage({ $refs }) {
      return $refs.YFormModelItem.validateMessage || '';
    },
    validateState({ $refs }) {
      return $refs.YFormModelItem.validateState || '';
    },
    validator({ $refs }) {
      return $refs.YFormModelItem.validator || {};
    },
  },
  methods: {
    onFieldBlur(event) {
      this.$refs.YFormModelItem.onFieldBlur(event);
    },
    onFieldChange(event) {
      this.$refs.YFormModelItem.onFieldChange(event);
    },
  },
};
</script>
