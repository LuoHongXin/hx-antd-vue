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
    y_props() {
      return this.$refs.YFormModelItem._props || {};
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
<style lang="less">
@import '~/src/styles/components/formModelItem';
</style>
