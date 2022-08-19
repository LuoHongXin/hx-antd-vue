<template>
  <a-form-model class="y-form-model" v-on="$listeners" v-bind="$attrs" ref="ruleForm">
    <slot />
  </a-form-model>
</template>
<script>
export default {
  name: 'YFormModel',
  provide() {
    return {
      yForm: this,
    };
  },
  computed: {
    y_props({ $refs }) {
      return $refs.ruleForm._props || {};
    },
  },
  methods: {
    validate(callback) {
      this.$refs.ruleForm.validate(callback);
    },
    validateField(callback) {
      this.$refs.ruleForm.validateField(callback);
    },
    resetFields(callback) {
      this.$refs.ruleForm.resetFields(callback);
    },
    clearValidate(callback) {
      this.$refs.ruleForm.clearValidate(callback);
    },
  },
};
</script>
