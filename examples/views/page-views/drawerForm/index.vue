<template>
  <div class="contanier">
    <funTitleDetail
      title="抽屉表单"
      detail="抽屉表单也是最常见的表单输入场景之一，在表单内容过多，弹窗表单不适合时，我们就采用抽屉表单，根据开发情况，我们可以调整 抽屉drawer 的宽度以及表单的 label-col 和 wrapperCol，建议为 3 : 21 ,最大为 5 : 19，最小为 2:22。"
    ></funTitleDetail>
    <com-show style="padding:16px 24px">
      <y-button type="primary" @click="visible = !visible">{{ visible ? '关闭' : '打开' }}抽屉表单</y-button>
      <y-drawer title="标题" :visible="visible" @close="visible = false">
        <div slot="footer" style="text-align:right">
          <y-button @click="visible = false"> 取消 </y-button>
          <y-button type="primary" @click="onSubmit">
            确定
          </y-button>
        </div>
        <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <y-form-model-item ref="name" label="输入框" prop="name">
            <y-input
              v-model="form.name"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            />
          </y-form-model-item>
          <y-form-model-item label="文本域" prop="info">
            <y-textarea v-model="form.info" />
          </y-form-model-item>
          <y-form-model-item label="数字输入框" prop="num">
            <y-input-number calculator :min="0" :max="10" v-model="form.num" />
          </y-form-model-item>
          <y-form-model-item label="选择器" prop="select">
            <y-select v-model="form.select">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
            </y-select>
          </y-form-model-item>
        </y-form-model>
      </y-drawer>
    </com-show>
  </div>
</template>
<script>
export default {
  name: 'drawerForm',
  data() {
    return {
      visible: false,
      labelCol: {
        span: 3,
      },
      wrapperCol: {
        span: 21,
      },
      form: {
        name: '',
        info: '',
        num: 0,
        select: 'jack',
      },
      rules: {
        name: [
          { required: true, message: '请输入输入框', trigger: 'blur' },
          { min: 3, max: 5, message: '最短3个字符，最长5个字符', trigger: 'blur' },
        ],
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
  },
};
</script>
