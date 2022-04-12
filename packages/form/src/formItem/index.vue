<template>
  <a-form-item class="y-form-item" v-on="$listeners" v-bind="$attrs" ref="YFormItem">
    <template v-for="(val, key) in $scopedSlots" :slot="key">
      <slot :name="key"></slot>
    </template>
    <y-tooltip v-if="label" :placement="placement" slot="label">
      <template slot="title">
        <span>{{ label }}</span>
      </template>
      <span class="y-form-item-label-title">{{ label }}</span>
    </y-tooltip>
  </a-form-item>
</template>
<script>
export default {
  name: 'YFormItem',
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
  methods: {
    onFieldBlur(callback) {
      return this.$refs.YFormItem.onFieldBlur(callback);
    },
    onFieldChange(callback) {
      return this.$refs.YFormItem.onFieldChange(callback);
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/formModelItem';
</style>
