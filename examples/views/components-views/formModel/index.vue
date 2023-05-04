<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="表单验证">
        <rules-from />
        <RulesFrom2 />
      </a-tab-pane>
      <a-tab-pane key="2" tab="动态增减表单项">
        <dynamic-validate-form />
      </a-tab-pane>
      <a-tab-pane key="3" tab="动态增减表单(上/下/加/减)">
        <dynamic-validate-form2 />
      </a-tab-pane>
    </a-tabs>
    <title-detail title="FormModel" detail=""></title-detail>
    <api-table :data="tableData"></api-table>
    <title-detail title="FormModel 事件" detail=""></title-detail>
    <api-table :data="tableDataChange"></api-table>
    <title-detail title="FormModel 方法" detail=""></title-detail>
    <api-table :data="tableDataFn"></api-table>
    <title-detail title="Form.Item" detail=""></title-detail>
    <api-table :data="tableDataItem"></api-table>
    注意： # Form.Item 会对唯一子元素进行劫持，并监听 blur 和 change
    事件，来达到自动校验的目的，所以请确保表单域没有其它元素包裹。如果有多个子元素，将只会监听第一个子元素的变化。
    如果要监听的表单域不满足自动监听的条件，可以通过如下方式关联表单域：
    <pre class="line-numbers">
        <code class="language-html" v-text='`<a-form-model-item prop="form.name" ref="name" :autoLink="false">
          <a-input v-model="other" />
          <span>hahha</span>
          <div>
            <a-input
              v-model="form.name"
              @blur="() => {$refs.name.onFieldBlur()}"
              @change="() => {$refs.name.onFieldChange()}"
            />
          </div>
        </a-form-model-item>`'>
        </code>
    </pre>
    <title-detail title="校验规则" detail=""></title-detail>
    <api-table :data="tableDataRules"></api-table>
  </div>
</template>
<script>
import RulesFrom from './rulesFrom';
import RulesFrom2 from './rulesFrom2';
import DynamicValidateForm from './dynamicValidateForm';
import DynamicValidateForm2 from './dynamicValidateForm2';
export default {
  name: 'myFormModel',
  components: { RulesFrom, DynamicValidateForm, RulesFrom2, DynamicValidateForm2 },
  data() {
    return {
      tableData: [
        { params: 'model', explain: '表单数据对象', type: 'object', default: '' },
        { params: 'rules', explain: '表单验证规则', type: 'object', default: '' },
        { params: 'hideRequiredMark', explain: '隐藏所有表单项的必选标记', type: 'Boolean', default: 'false' },
        { params: 'failedValidScroll', explain: '校验不通过滚动到对应错误位置', type: 'Boolean', default: 'true' },
        { params: 'labelAlign', explain: 'label 标签的文本对齐方式', type: "'left' | 'right'", default: "'right'" },
        { params: 'layout', explain: '表单布局', type: "'horizontal'|'vertical'|'inline'", default: "'horizontal'" },
        {
          params: 'labelCol',
          explain: 'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
          type: 'object',
          default: '',
        },
        {
          params: 'wrapperCol',
          explain: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          type: 'object',
          default: '',
        },
        {
          params: 'colon',
          explain: '配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)',
          type: 'boolean',
          default: true,
        },
        {
          params: 'validateOnRuleChange',
          explain: '是否在 rules 属性改变后立即触发一次验证',
          type: 'boolean',
          default: true,
        },
      ],
      tableDataChange: [
        { params: 'submit', explain: '数据验证成功后回调事件', type: 'Function(e:Event)' },
        {
          params: 'validate',
          explain: '任一表单项被校验后触发',
          type: '	被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）',
        },
      ],
      tableDataFn: [
        {
          params: 'validate',
          explain:
            '对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise',
          type: 'Function(callback: Function(boolean, object))',
        },
        {
          params: 'validateField',
          explain: '对部分表单字段进行校验的方法',
          type: 'Function(props: array | string, callback: Function(errorMessage: string))',
        },
        {
          params: 'resetFields',
          explain: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
          type: '-',
        },
        {
          params: 'clearValidate',
          explain: '移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果',
          type: 'Function(props: array | string)',
        },
      ],
      tableDataItem: [
        {
          params: 'prop',
          explain: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
          type: 'string',
          default: '',
        },
        { params: 'rules', explain: '表单验证规则', type: 'object | array', default: '' },
        {
          params: 'autoLink',
          explain: '是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项',
          type: 'Boolean',
          default: 'true',
        },
        { params: 'colon', explain: '配合 label 属性使用，表示是否显示 label 后面的冒号', type: 'boolean', default: 'true' },
        {
          params: 'extra',
          explain: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。',
          type: 'string|slot',
          default: "'horizontal'",
        },
        {
          params: 'labelCol',
          explain: 'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
          type: 'object',
          default: '',
        },
        {
          params: 'wrapperCol',
          explain: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          type: 'object',
          default: '',
        },
        {
          params: 'hasFeedback',
          explain: '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用',
          type: 'boolean',
          default: false,
        },
        {
          params: 'help',
          explain: '提示信息，如不设置，则会根据校验规则自动生成',
          type: 'string|slot',
        },
        {
          params: 'label',
          explain: 'label 标签的文本',
          type: 'string|slot',
        },
      ],
      tableDataRules: [
        { params: 'trigger', explain: '校验触发的时机', type: "	'blur' | 'change' | ['change', 'blur']" },
        { params: 'enum', explain: '枚举类型', type: 'string' },
        { params: 'len', explain: '字段长度', type: 'number' },
        { params: 'max', explain: '最大长度', type: 'number' },
        { params: 'min', explain: '最小长度', type: 'number' },
        { params: 'message', explain: '校验文案', type: 'string' },
        { params: 'pattern', explain: '正则表达式校验', type: 'RegExp' },
        { params: 'required', explain: '是否必选', type: 'boolean', default: 'false' },
        { params: 'transform', explain: '校验前转换字段值', type: 'function(value) => transformedValue:any' },
        { params: 'type', explain: '内建校验类型，可选项', type: 'string', default: "'string'" },
        { params: 'validator', explain: '自定义校验（注意，callback 必须被调用）', type: 'function(rule, value, callback)' },
        { params: 'whitespace', explain: '必选时，空格是否会被视为错误', type: 'boolean', default: 'false' },
      ],
    };
  },
};
</script>
