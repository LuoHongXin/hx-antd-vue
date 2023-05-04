<template>
  <a-form-model class="y-form-model" v-on="$listeners" v-bind="$attrs" ref="ruleForm">
    <slot />
  </a-form-model>
</template>
<script>
export default {
  name: 'YFormModel',
  inheritAttrs: false,
  props: {
    failedValidScroll: {
      type: Boolean,
      default: true,
    },
  },
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
      this.$refs.ruleForm.validate((valid, data) => {
        if (!valid && this.failedValidScroll) {
          this.$refs.ruleForm.$el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
        callback && callback(valid, data);
      });
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
