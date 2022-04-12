<template>
  <div>
    <com-show>
      <y-form-model ref="dynamicValidateForm" :model="dynamicValidateForm" v-bind="formItemLayoutWithOutLabel">
        <y-form-model-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          v-bind="index === 0 ? formItemLayout : {}"
          :label="index === 0 ? 'Domains' : ''"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
        >
          <y-input v-model="domain.value" placeholder="please input domain" style="width: 60%; margin-right: 8px" />
          <a-icon
            v-if="dynamicValidateForm.domains.length > 1"
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="dynamicValidateForm.domains.length === 1"
            @click="removeDomain(domain)"
          />
        </y-form-model-item>
        <y-form-model-item v-bind="formItemLayoutWithOutLabel">
          <y-button type="dashed" style="width: 60%" @click="addDomain"> <a-icon type="plus" /> Add field </y-button>
        </y-form-model-item>
        <y-form-model-item v-bind="formItemLayoutWithOutLabel">
          <y-button type="primary" html-type="submit" @click="submitForm('dynamicValidateForm')">
            Submit
          </y-button>
          <y-button style="margin-left: 10px" @click="resetForm('dynamicValidateForm')">
            Reset
          </y-button>
        </y-form-model-item>
      </y-form-model>
      <!-- 代码展示 -->
      <pre class="line-numbers">
        <code class="language-html" v-text='html'>
        </code>
      </pre>
      <pre class="line-numbers">
        <code class="language-javascript">
         export default {
            data() {
                return {
                    languageJavascript: '',
                    formItemLayout: {
                        labelCol: {
                        xs: { span: 24 },
                        sm: { span: 4 },
                        },
                        wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 20 },
                        },
                    },
                    formItemLayoutWithOutLabel: {
                        wrapperCol: {
                        xs: { span: 24, offset: 0 },
                        sm: { span: 20, offset: 4 },
                        },
                    },
                    dynamicValidateForm: {
                        domains: [],
                    },
                };
            },
                methods: {
                    submitForm(formName) {
                        this.$refs[formName].validate(valid => {
                            if (valid) {
                            alert('submit!');
                            } else {
                            console.log('error submit!!');
                            return false;
                            }
                        });
                    },
                    resetForm(formName) {
                        this.$refs[formName].resetFields();
                    },
                    removeDomain(item) {
                        let index = this.dynamicValidateForm.domains.indexOf(item);
                        if (index !== -1) {
                            this.dynamicValidateForm.domains.splice(index, 1);
                        }
                    },
                    addDomain() {
                        this.dynamicValidateForm.domains.push({
                            value: '',
                            key: Date.now(),
                        });
                    },
                },
            };
            {{jt}}{{ style }}
                .dynamic-delete-button {
                    cursor: pointer;
                    position: relative;
                    top: 4px;
                    font-size: 24px;
                    color: #999;
                    transition: all 0.3s;
                }
                .dynamic-delete-button:hover {
                    color: #777;
                }
                .dynamic-delete-button[disabled] {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            {{jt}}/{{ style }}
        </code>
      </pre>
    </com-show>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: `<y-form-model ref="dynamicValidateForm" :model="dynamicValidateForm" v-bind="formItemLayoutWithOutLabel">
        <y-form-model-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          v-bind="index === 0 ? formItemLayout : {}"
          :label="index === 0 ? 'Domains' : ''"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
        >
          <y-input v-model="domain.value" placeholder="please input domain" style="width: 60%; margin-right: 8px" />
          <a-icon
            v-if="dynamicValidateForm.domains.length > 1"
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="dynamicValidateForm.domains.length === 1"
            @click="removeDomain(domain)"
          />
        </y-form-model-item>
        <y-form-model-item v-bind="formItemLayoutWithOutLabel">
          <y-button type="dashed" style="width: 60%" @click="addDomain"> <a-icon type="plus" /> Add field </y-button>
        </y-form-model-item>
        <y-form-model-item v-bind="formItemLayoutWithOutLabel">
          <y-button type="primary" html-type="submit" @click="submitForm('dynamicValidateForm')">
            Submit
          </y-button>
          <y-button style="margin-left: 10px" @click="resetForm('dynamicValidateForm')">
            Reset
          </y-button>
        </y-form-model-item>`,
      style: 'style>',
      jt: '<',
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
      dynamicValidateForm: {
        domains: [],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now(),
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
