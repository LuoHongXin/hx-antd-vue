<template>
  <a-form class="y-form" v-on="$listeners" v-bind="$attrs" ref="ruleForm">
    <slot />
  </a-form>
</template>
<script>
export default {
  name: 'YForm',
  provide() {
    return {
      yForm: this,
    };
  },
  computed: {
    y_props() {
      return this.$refs.ruleForm._props || {};
    },
  },
};
</script>
