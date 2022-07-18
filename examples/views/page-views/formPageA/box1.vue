<template>
  <div class="box">
    <y-sign-title><span slot="title">标题</span></y-sign-title>
    <!-- 表单内容 -->
    <y-form-model labelAlign="left" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <y-form-model-item ref="name" label="输入框" prop="name">
        <y-input v-model="form.name" />
      </y-form-model-item>
      <y-form-model-item label="标题过长标题过长标题过长出现省略号" prop="name">
        <y-input v-model="form.name" />
      </y-form-model-item>
      <y-form-model-item label="数字输入框" prop="number">
        <y-input-number calculator :min="0" :max="99" v-model="form.number" /> 台
      </y-form-model-item>
      <y-form-model-item label="数字输入框" prop="number">
        <y-input-number :min="0" :max="99" v-model="form.number" /> 天
      </y-form-model-item>
      <y-form-model-item prop="region">
        <span slot="label"
          >选择器
          <y-tooltip title="提示信息">
            <a-icon type="info-circle" />
          </y-tooltip>
        </span>
        <y-select v-model="form.region" placeholder="请选择">
          <y-select-option value="shanghai">Zone one</y-select-option>
          <y-select-option value="beijing">Zone two</y-select-option>
        </y-select>
      </y-form-model-item>
      <y-form-model-item label="选择器多选不限高度" prop="region2">
        <y-select checkbox :options="options"> </y-select>
      </y-form-model-item>
      <y-form-model-item label="选择器多选限定一行" prop="region2">
        <y-select mode="multiple" :options="options" />
      </y-form-model-item>
      <y-form-model-item label="标签" prop="tagData">
        <y-tag-action v-model="form.tagData" />
      </y-form-model-item>
      <y-form-model-item label="开关" prop="delivery">
        <y-switch v-model="form.delivery" />
      </y-form-model-item>
      <y-form-model-item label="按钮型单选" prop="type">
        <y-radio-group v-model="form.type" :radio="false" bodered>
          <y-radio-content :value="1">
            单选项目1
          </y-radio-content>
          <y-radio-content :value="2">
            名词较长的单选项
          </y-radio-content>
          <y-radio-content :value="r + 2" v-for="r in 10" :key="r + 2"> 单选项目{{ r }} </y-radio-content>
        </y-radio-group>
      </y-form-model-item>
      <y-form-model-item label="单选按钮组">
        <y-radio-group default-value="a">
          <a-radio-button value="a">
            单选按钮a
          </a-radio-button>
          <a-radio-button value="b">
            单选按钮b
          </a-radio-button>
          <a-radio-button value="c">
            单选按钮c
          </a-radio-button>
          <a-radio-button value="d">
            单选按钮d
          </a-radio-button>
        </y-radio-group>
      </y-form-model-item>
      <y-form-model-item label="按钮型多选" prop="type">
        <y-link-tag :data="dataArr" v-model="form.linkTagValue" :selectType="1"> </y-link-tag>
      </y-form-model-item>
      <y-form-model-item label="文本域" prop="desc">
        <y-textarea v-model="form.desc" />
      </y-form-model-item>
      <y-form-model-item label="ipv4" prop="ip">
        <y-input-ip v-model="form.ip" />
      </y-form-model-item>
    </y-form-model>
  </div>
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
  name: 'box1',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      options: [
        {
          value: 'jack1',
          label: 'jack1',
        },
        {
          value: 'jack2',
          scopedSlots: {
            title: 'title',
          },
          label: 'jack2',
        },
        {
          value: 'jack3',
          label: 'jack3',
        },
        {
          value: 'jack4',
          label: 'jack4',
        },
        {
          value: 'jack6',
          label: 'jack5',
        },
        {
          value: 'jack8',
          label: 'jack7',
        },
      ],
      dataArr: [
        {
          label: 'CNware',
          value: '1',
          disabled: true,
        },
        {
          label: '多选项多选项',
          value: '2',
        },
        {
          label: 'PowerVC',
          value: '3',
        },
        {
          label: '标签4',
          value: '4',
          disabled: true,
        },
        {
          label: '标签5',
          value: '5',
        },
        {
          label: '多选项多选项多选项多选项',
          value: '6',
        },
        {
          label: '多选项7',
          value: '7',
        },
        {
          label: '多选项8',
          value: '8',
        },
        {
          label: '多选项9',
          value: '9',
        },
        {
          label: '多选项10',
          value: '10',
        },
      ],
      form: {
        name: '',
        tagData: ['标签1', '标签2', '标签3'],
        linkTagValue: '2',
        number: 1,
        region: undefined,
        region2: undefined,
        date1: undefined,
        delivery: false,
        type: [],
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
            required: true,
            message: '请选择按钮型单选',
            trigger: 'change',
          },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
        ip: [{ validator: validator, message: 'ip 不正确', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit(callback) {
      this.$refs.ruleForm.validate(callback);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
