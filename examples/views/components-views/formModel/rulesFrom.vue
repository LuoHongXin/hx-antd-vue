<template>
  <com-show>
    <y-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <y-form-model-item ref="name" label="Activity name" prop="name">
        <y-input
          v-model="form.name"
          @blur="
            () => {
              $refs.name.onFieldBlur();
            }
          "
        />
      </y-form-model-item>
      <y-form-model-item label="Activity zone" prop="region">
        <y-select v-model="form.region" placeholder="please select your zone">
          <y-select-option value="shanghai">Zone one</y-select-option>
          <y-select-option value="beijing">Zone two</y-select-option>
        </y-select>
      </y-form-model-item>
      <y-form-model-item label="Activity time" required prop="date1">
        <y-date-picker v-model="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%;" />
      </y-form-model-item>
      <y-form-model-item label="Instant delivery" prop="delivery">
        <y-switch v-model="form.delivery" />
      </y-form-model-item>
      <y-form-model-item label="Activity type" prop="type">
        <y-checkbox-group v-model="form.type">
          <y-checkbox value="1" name="type">Online</y-checkbox>
          <y-checkbox value="2" name="type">Promotion</y-checkbox>
          <y-checkbox value="3" name="type">Offline</y-checkbox>
        </y-checkbox-group>
      </y-form-model-item>
      <y-form-model-item label="Resources" prop="resource">
        <y-radio-group v-model="form.resource">
          <y-radio value="1">Sponsor</y-radio>
          <y-radio value="2">Venue</y-radio>
        </y-radio-group>
      </y-form-model-item>
      <y-form-model-item label="Activity form" prop="desc">
        <y-input v-model="form.desc" type="textarea" />
      </y-form-model-item>
      <y-form-model-item label="ipv4" prop="ip">
        <y-input-ip v-model="form.ip" />
      </y-form-model-item>
      <y-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <y-button type="primary" @click="onSubmit">Create</y-button>
        <y-button style="margin-left: 10px;" @click="resetForm">Reset</y-button>
      </y-form-model-item>
    </y-form-model>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
      </pre>
    <pre class="line-numbers">
        <code class="language-javascript">
          const validator = (rules, value, callback) => {
            const reg = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
            if (!reg.test(value)) {
              callback(new Error('ip 不正确'));
            }
            callback();
          };
         export default {
            data() {
              return {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                other: '',
                form: {
                  name: '',
                  region: undefined,
                  date1: undefined,
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: '',
                },
                rules: {
                  name: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                  ],
                  region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
                  date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
                  type: [
                    {
                      type: 'array',
                      required: true,
                      message: 'Please select at least one activity type',
                      trigger: 'change',
                    },
                  ],
                  resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
                  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
                  ip: [{ validator: validator, message: 'ip 不正确', trigger: 'blur' }],
                },
              };
            },
            methods: {
              onSubmit() {
                this.$refs.ruleForm.validate(valid => {
                  if (valid) {
                    alert('submit!');
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              },
              resetForm() {
                this.$refs.ruleForm.resetFields();
              },
            },
          };
        </code>
    </pre>
  </com-show>
</template>
<script>
const validator = (rules, value, callback) => {
  const reg = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
  if (!reg.test(value)) {
    callback(new Error('ip 不正确'));
  }
  callback();
};
export default {
  data() {
    return {
      html: `<y-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <y-form-model-item ref="name" label="Activity name" prop="name">
          <y-input
            v-model="form.name"
            @blur="
              () => {
                $refs.name.onFieldBlur();
              }
            "
          />
        </y-form-model-item>
        <y-form-model-item label="Activity zone" prop="region">
          <y-select v-model="form.region" placeholder="please select your zone">
            <y-select-option value="shanghai">Zone one</y-select-option>
            <y-select-option value="beijing">Zone two</y-select-option>
          </y-select>
        </y-form-model-item>
        <y-form-model-item label="Activity time" required prop="date1">
          <y-date-picker v-model="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%;" />
        </y-form-model-item>
        <y-form-model-item label="Instant delivery" prop="delivery">
          <y-switch v-model="form.delivery" />
        </y-form-model-item>
        <y-form-model-item label="Activity type" prop="type">
          <y-checkbox-group v-model="form.type">
            <y-checkbox value="1" name="type">Online</y-checkbox>
            <y-checkbox value="2" name="type">Promotion</y-checkbox>
            <y-checkbox value="3" name="type">Offline</y-checkbox>
          </y-checkbox-group>
        </y-form-model-item>
        <y-form-model-item label="Resources" prop="resource">
          <y-radio-group v-model="form.resource">
            <y-radio value="1">Sponsor</y-radio>
            <y-radio value="2">Venue</y-radio>
          </y-radio-group>
        </y-form-model-item>
        <y-form-model-item label="Activity form" prop="desc">
          <y-input v-model="form.desc" type="textarea" />
        </y-form-model-item>
        <y-form-model-item label="ipv4" prop="ip">
          <y-input-ip v-model="form.ip" />
        </y-form-model-item>
        <y-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <y-button type="primary" @click="onSubmit">Create</y-button>
          <y-button style="margin-left: 10px;" @click="resetForm">Reset</y-button>
        </y-form-model-item>
    </y-form-model>`,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        ip: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
        ip: [{ validator: validator, message: 'ip 不正确', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
