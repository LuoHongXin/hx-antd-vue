<template>
  <com-show>
    <div id="components-form-demo-global-state">
      <customized-form :username="fields.username" @change="handleFormChange" />
      <pre class="language-bash">
          {{ JSON.stringify(fields, null, 2) }}
      </pre>
    </div>

    <title-detail title="代码展示" detail=""></title-detail>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='html'>
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
        const CustomizedForm = {
          props: ['username'],
          template: `
            {{jt}}y-form layout='inline' :form="form">
              {{jt}}y-form-item label='Username'>
                {{jt}}y-input
                  v-decorator="[
                    'username',
                    {
                      rules: [{ required: true, message: 'Username is required!' }],
                    }
                  ]"
                />
              {{jt}}/y-form-item>
            {{jt}}/y-form>
          `,
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

        export default {
          components: {
            CustomizedForm,
          },
          data() {
            return {
              fields: {
                username: {
                  value: 'benjycui',
                },
              },
            };
          },
          methods: {
            handleFormChange(changedFields) {
              console.log('changedFields', changedFields);
              this.fields = { ...this.fields, ...changedFields };
            },
          },
        };
        {{jt}}/script>
        {{jt}}style>
        #components-form-demo-global-state .language-bash {
          max-width: 400px;
          border-radius: 6px;
          margin-top: 24px;
        }
        {{jt}}/style>
        </code>
      </pre>
  </com-show>
</template>

<script>
import CustomizedForm from './CustomizedForm';
export default {
  components: {
    CustomizedForm,
  },
  data() {
    return {
      html: `<div id="components-form-demo-global-state">
        <customized-form :username="fields.username" @change="handleFormChange" />
        <pre class="language-bash">
          {{ JSON.stringify(fields, null, 2) }}
        </pre>
      </div>`,
      jt: '<',
      fields: {
        username: {
          value: 'benjycui',
        },
      },
    };
  },
  methods: {
    handleFormChange(changedFields) {
      console.log('changedFields', changedFields);
      this.fields = { ...this.fields, ...changedFields };
    },
  },
};
</script>
<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
