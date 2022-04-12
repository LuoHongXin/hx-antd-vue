<template>
  <y-form layout="inline" :form="form">
    <y-form-item label="Username">
      <y-input
        v-decorator="[
          'username',
          {
            rules: [{ required: true, message: 'Username is required!' }],
          },
        ]"
      />
    </y-form-item>
  </y-form>
</template>

<script>
export default {
  name: 'CustomizedForm',
  props: ['username'],
  created() {
    this.form = this.$form.createForm(this, {
      name: 'global_state',
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            ...this.username,
            value: this.username.value,
          }),
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      },
    });
  },
  watch: {
    username() {
      this.form.updateFields({
        username: this.$form.createFormField({
          ...this.username,
          value: this.username.value,
        }),
      });
    },
  },
};
</script>

<style></style>
