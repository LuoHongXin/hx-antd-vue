<template>
  <div>
    <com-show>
      <y-form-model ref="dynamicValidateForm" :model="dynamicValidateForm" v-bind="formItemLayoutWithOutLabel">
        <y-form-model-item :colon="false" v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" class="more-form-item">
          <template #label>
            {{ index === 0 ? 'Domains:' : ' ' }}
          </template>
          <y-form-model-item
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '请输入',
              trigger: 'blur',
            }"
          >
            <y-input v-model="domain.value" />
            ：
          </y-form-model-item>
          <y-form-model-item
            :prop="'domains.' + index + '.port'"
            :rules="{
              required: true,
              message: '请输入',
              trigger: 'blur',
            }"
          >
            <y-input-number v-model="domain.port" />
          </y-form-model-item>
          <div class="more-form-icon">
            <y-svg-icon
              icon-class="move-up"
              v-if="index > 0 && dynamicValidateForm.domains.length > 1"
              @click="move(domain, index, 'up')"
            />
            <y-svg-icon
              icon-class="move-down"
              v-if="index + 1 !== dynamicValidateForm.domains.length && dynamicValidateForm.domains.length > 1"
              @click="move(domain, index)"
            />
            <y-svg-icon icon-class="plus" @click="addDomain" />
            <y-svg-icon icon-class="subtract" v-if="dynamicValidateForm.domains.length > 1" @click="removeDomain(domain)" />
          </div>
        </y-form-model-item>
        <y-form-model-item :colon="false" label=" ">
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
                    formItemLayoutWithOutLabel: {
                        wrapperCol: {
                        xs: { span: 24, offset: 0 },
                        sm: { span: 20, offset: 4 },
                        },
                    },
                    dynamicValidateForm: {
                        domains: [
                          {
                            value: '',
                            port: '',
                            key: Date.now(),
                          },
                        ],
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
                move(item, index, type) {
                  const _index = type === 'up' ? index - 1 : index + 1;
                  if (_index {{jt}} 0 || _index >= this.dynamicValidateForm.domains.length) return;
                  const _item = this.dynamicValidateForm.domains[_index];
                  const values = ['value', 'port'];
                  for (const key of values) {
                    //赋值
                    const _value = _item[key];
                    const value = item[key];
                    this.$set(_item, [key], value);
                    this.$set(item, [key], _value);
                    //校验
                    const _prop = 'domains.' + _index + '.' + key;
                    const prop = 'domains.' + index + '.' + key;
                    this.$refs.dynamicValidateForm?.validateField?.(_prop);
                    this.$refs.dynamicValidateForm?.validateField?.(prop);
                  }
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
                    port: '',
                    key: Date.now(),
                  });
                },
              },
            };
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
        <y-form-model-item :colon="false" v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" class="more-form-item">
          <template #label>
            {{ index === 0 ? 'Domains:' : ' ' }}
          </template>
          <y-form-model-item
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '请输入',
              trigger: 'blur',
            }"
          >
            <y-input v-model="domain.value" />
            ：
          </y-form-model-item>
          <y-form-model-item
            :prop="'domains.' + index + '.port'"
            :rules="{
              required: true,
              message: '请输入',
              trigger: 'blur',
            }"
          >
            <y-input-number v-model="domain.port" />
          </y-form-model-item>
          <div class="more-form-icon">
            <y-svg-icon
              icon-class="move-up"
              v-if="index > 0 && dynamicValidateForm.domains.length > 1"
              @click="move(domain, index, 'up')"
            />
            <y-svg-icon
              icon-class="move-down"
              v-if="index + 1 !== dynamicValidateForm.domains.length && dynamicValidateForm.domains.length > 1"
              @click="move(domain, index)"
            />
            <y-svg-icon icon-class="plus" @click="addDomain" />
            <y-svg-icon icon-class="subtract" v-if="dynamicValidateForm.domains.length > 1" @click="removeDomain(domain)" />
          </div>
        </y-form-model-item>
        <y-form-model-item :colon="false" label=" ">
          <y-button type="primary" html-type="submit" @click="submitForm('dynamicValidateForm')">
            Submit
          </y-button>
          <y-button style="margin-left: 10px" @click="resetForm('dynamicValidateForm')">
            Reset
          </y-button>
        </y-form-model-item>
      </y-form-model>`,
      jt: '<',
      formItemLayoutWithOutLabel: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      dynamicValidateForm: {
        domains: [
          {
            value: '',
            port: '',
            key: Date.now(),
          },
        ],
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
    move(item, index, type) {
      const _index = type === 'up' ? index - 1 : index + 1;
      if (_index < 0 || _index >= this.dynamicValidateForm.domains.length) return;
      const _item = this.dynamicValidateForm.domains[_index];
      const values = ['value', 'port'];
      for (const key of values) {
        //赋值
        const _value = _item[key];
        const value = item[key];
        this.$set(_item, [key], value);
        this.$set(item, [key], _value);
        //校验
        const _prop = 'domains.' + _index + '.' + key;
        const prop = 'domains.' + index + '.' + key;
        this.$refs.dynamicValidateForm?.validateField?.(_prop);
        this.$refs.dynamicValidateForm?.validateField?.(prop);
      }
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
        port: '',
        key: Date.now(),
      });
    },
  },
};
</script>
