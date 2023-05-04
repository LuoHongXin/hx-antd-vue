<template>
  <com-show>
    <y-form :form="form" @submit="handleSubmit">
      <y-form-item v-bind="formItemLayout" label="E-mail">
        <y-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            },
          ]"
        />
      </y-form-item>
      <y-form-item v-bind="formItemLayout" label="Password" has-feedback>
        <y-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </y-form-item>
      <y-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
        <y-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </y-form-item>
      <y-form-item v-bind="formItemLayout">
        <span slot="label">
          Nickname&nbsp;
          <y-tooltip title="What do you want others to call you?" :getPopupContainer="getPopupContainer">
            <y-svg-icon icon-class="formTipsIcon" style="width:16px;height:16px" />
          </y-tooltip>
        </span>
        <y-input
          v-decorator="[
            'nickname',
            {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            },
          ]"
        />
      </y-form-item>
      <y-form-item v-bind="formItemLayout" label="Phone Number">
        <y-input
          v-decorator="[
            'phone',
            {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            },
          ]"
          style="width: 100%"
        >
          <y-select slot="addonBefore" v-decorator="['prefix', { initialValue: '86' }]" style="width: 70px">
            <y-select-option value="86">
              +86
            </y-select-option>
            <y-select-option value="87">
              +87
            </y-select-option>
          </y-select>
        </y-input>
      </y-form-item>
      <y-form-item v-bind="formItemLayout" label="Website">
        <y-auto-complete
          v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
          placeholder="website"
          @change="handleWebsiteChange"
        >
          <template slot="dataSource">
            <y-select-option v-for="website in autoCompleteResult" :key="website">
              {{ website }}
            </y-select-option>
          </template>
          <y-input />
        </y-auto-complete>
      </y-form-item>
      <y-form-item v-bind="formItemLayout" label="Captcha" extra="We must make sure that your are a human.">
        <a-row :gutter="8">
          <a-col :span="12">
            <y-input autoWidth v-decorator="['captcha', { rules: [{ required: true, message: 'Please input the captcha you got!' }] }]" />
          </a-col>
          <a-col :span="12">
            <y-button>Get captcha</y-button>
          </a-col>
        </a-row>
      </y-form-item>
      <y-form-item v-bind="tailFormItemLayout">
        <y-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
          I have read the
          <a href="">
            agreement
          </a>
        </y-checkbox>
      </y-form-item>
      <y-form-item v-bind="tailFormItemLayout">
        <y-button type="primary" html-type="submit">
          Register
        </y-button>
      </y-form-item>
    </y-form>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
      </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          export default {
            data() {
              return {
              confirmDirty: false,
              autoCompleteResult: [],
              formItemLayout: {
                labelCol: {
                  xs: { span: 6 },
                  sm: { span: 4 },
                },
                wrapperCol: {
                  xs: { span: 24 },
                  sm: { span: 16 },
                },
              },
              tailFormItemLayout: {
                wrapperCol: {
                  xs: {
                    span: 24,
                    offset: 0,
                  },
                  sm: {
                    span: 16,
                    offset: 8,
                  },
                },
              },
              form: this.$form.createForm(this, { name: 'register' }),
            };
          },
          methods: {
            handleSubmit(e) {
              e.preventDefault();
              this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                  console.log('Received values of form: ', values);
                }
              });
            },
            handleConfirmBlur(e) {
              const value = e.target.value;
              this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
              const form = this.form;
              if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
              } else {
                callback();
              }
            },
            validateToNextPassword(rule, value, callback) {
              const form = this.form;
              if (value && this.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
              }
              callback();
            },
            handleWebsiteChange(value) {
              let autoCompleteResult;
              if (!value) {
                autoCompleteResult = [];
              } else {
                autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
              }
              this.autoCompleteResult = autoCompleteResult;
            },
          },
        };
        </code>
    </pre>
  </com-show>
</template>
<script>
export default {
  data() {
    return {
      getPopupContainer: () => document.body,
      html: `<y-form :form="form" @submit="handleSubmit">
        <y-form-item v-bind="formItemLayout" label="E-mail">
          <y-input
            v-decorator="[
              'email',
              {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              },
            ]"
          />
        </y-form-item>
        <y-form-item v-bind="formItemLayout" label="Password" has-feedback>
          <y-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              },
            ]"
            type="password"
          />
        </y-form-item>
        <y-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
          <y-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              },
            ]"
            type="password"
            @blur="handleConfirmBlur"
          />
        </y-form-item>
        <y-form-item v-bind="formItemLayout">
          <span slot="label">
            Nickname&nbsp;
            <y-tooltip title="What do you want others to call you?" :getPopupContainer="getPopupContainer">
             <y-svg-icon icon-class="formTipsIcon" style="width:16px;height:16px" />
            </y-tooltip>
          </span>
          <y-input
            v-decorator="[
              'nickname',
              {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              },
            ]"
          />
        </y-form-item>
        <y-form-item v-bind="formItemLayout" label="Phone Number">
          <y-input
            v-decorator="[
              'phone',
              {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              },
            ]"
            style="width: 100%"
          >
            <y-select slot="addonBefore" v-decorator="['prefix', { initialValue: '86' }]" style="width: 70px">
              <y-select-option value="86">
                +86
              </y-select-option>
              <y-select-option value="87">
                +87
              </y-select-option>
            </y-select>
          </y-input>
        </y-form-item>
        <y-form-item v-bind="formItemLayout" label="Website">
          <y-auto-complete
            v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
            placeholder="website"
            @change="handleWebsiteChange"
          >
            <template slot="dataSource">
              <y-select-option v-for="website in autoCompleteResult" :key="website">
                {{ website }}
              </y-select-option>
            </template>
            <y-input />
          </y-auto-complete>
        </y-form-item>
        <y-form-item v-bind="formItemLayout" label="Captcha" extra="We must make sure that your are a human.">
          <a-row :gutter="8">
            <a-col :span="12">
              <y-input v-decorator="['captcha', { rules: [{ required: true, message: 'Please input the captcha you got!' }] }]" />
            </a-col>
            <a-col :span="12">
              <y-button>Get captcha</y-button>
            </a-col>
          </a-row>
        </y-form-item>
        <y-form-item v-bind="tailFormItemLayout">
          <y-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
            I have read the
            <a href="">
              agreement
            </a>
          </y-checkbox>
        </y-form-item>
        <y-form-item v-bind="tailFormItemLayout">
          <y-button type="primary" html-type="submit">
            Register
          </y-button>
        </y-form-item>
      </y-form>`,
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 6 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      form: this.$form.createForm(this, { name: 'register' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
};
</script>
