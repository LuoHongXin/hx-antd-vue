<template>
  <div>
    <funTitleDetail title="多表单示例" detail="通过类名 more-form-item 调整多表单的样式"></funTitleDetail>
    <com-show>
      <y-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <y-form-model-item class="more-form-item" label="ip地址" prop="ip">
          <y-form-model-item prop="ip">
            <y-input v-model="form.ip" />
            ：
          </y-form-model-item>
          <y-form-model-item prop="port">
            <y-input-number v-model="form.port" />
          </y-form-model-item>
        </y-form-model-item>
      </y-form-model>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-javascript" v-text="js"/>
      </pre>
  </div>
</template>
<script>
export default {
  name: 'rulesFrom2',
  data() {
    return {
      html: `<y-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <y-form-model-item class="more-form-item" label="ip地址" prop="ip">
          <y-form-model-item prop="ip">
            <y-input v-model="form.ip" />
            ：
          </y-form-model-item>
          <y-form-model-item prop="port">
            <y-input-number v-model="form.port" />
          </y-form-model-item>
        </y-form-model-item>
      </y-form-model>`,
      js: `export default {
        data() {
            return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            form: {
                ip: '',
                port: '',
            },
            rules: {
                ip: [{ required: true, message: '请输入正确的ip地址', trigger: 'blur' }],
                port: [{ required: true, message: '请输入端口号', trigger: 'blur' }],
            },
            };
        },
    };`,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        ip: '',
        port: '',
      },
      rules: {
        ip: [{ required: true, message: '请输入正确的ip地址', trigger: 'blur' }],
        port: [{ required: true, message: '请输入端口号', trigger: 'blur' }],
      },
    };
  },
};
</script>
