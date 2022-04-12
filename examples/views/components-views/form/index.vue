<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="表单验证">
        <rules-from />
      </a-tab-pane>
      <a-tab-pane key="2" tab="动态增减表单项">
        <dynamic-validate-form />
      </a-tab-pane>
    </a-tabs>
    <title-detail title="form" detail=""></title-detail>
    <api-table :data="tableData"></api-table>
    <title-detail title="Form事件" detail=""></title-detail>
    <api-table :data="tableDataChange"></api-table>
    <title-detail title="Form.create(options) | this.$form.createForm(this, options)" detail=""></title-detail>
    单文件 template 使用方式
    <pre class="line-numbers">
        <code class="language-html" v-text='`<template>
          <a-form :form="form" />
        </template>
        <script>
          export default {
            beforeCreate() {
              this.form = this.$form.createForm(this, options);
            },
          };
        </script>`'>
        </code>
    </pre>
    jsx 使用方式，使用方式和 React 版 antd 一致
    <pre class="line-numbers">
        <code class="language-html" v-text='`const CustomizedForm = {};

        CustomizedForm = Form.create({})(CustomizedForm);`'>
        </code>
    </pre>
    <title-detail title="options" detail=""></title-detail>
    <api-table :data="tableDataOptions"></api-table>
    <title-detail title="经过 Form.create 包装的组件将会自带 this.form 属性" detail=""></title-detail>
    <api-table :data="tableDataFn"></api-table>
    <title-detail title="validateFields/validateFieldsAndScroll" detail=""></title-detail>
    <pre class="line-numbers">
        <code class="language-html" v-text="`const {
          form: { validateFields },
        } = this;
        validateFields((errors, values) => {
          // ...
        });
        validateFields(['field1', 'field2'], (errors, values) => {
          // ...
        });
        validateFields(['field1', 'field2'], options, (errors, values) => {
          // ...
        });`">
        </code>
    </pre>
    <api-table :data="tableDaValidateFields"></api-table>
    <title-detail title="validateFields 的 callback 参数示例 #" detail="errors:"></title-detail>
    <pre class="line-numbers">
        <code class="language-html" v-text='`{
          "userName": {
            "errors": [
              {
                "message": "Please input your username!",
                "field": "userName"
              }
            ]
          },
          "password": {
            "errors": [
              {
                "message": "Please input your Password!",
                "field": "password"
              }
            ]
          }
        }`'>
        </code>
    </pre>
    <title-detail title="" detail="values:"></title-detail>
    <pre class="line-numbers">
        <code class="language-html" v-text='`{
          "userName": "username",
          "password": "password",
        }`'>
        </code>
    </pre>
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
import DynamicValidateForm from './dynamicValidateForm';
export default {
  name: 'myFormModel',
  components: { RulesFrom, DynamicValidateForm },
  data() {
    return {
      tableData: [
        {
          params: 'form',
          explain:
            '经 Form.create() 包装过的组件会自带 this.form 属性，如果使用 template 语法，可以使用 this.$form.createForm(this, options)',
          type: 'object',
          default: '无',
        },
        { params: 'hideRequiredMark', explain: '隐藏所有表单项的必选标记', type: 'Boolean', default: 'false' },
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
          params: 'selfUpdate',
          explain: '自定义字段更新逻辑，说明见下，需 1.3.17 版本以上',
          type: 'boolean',
          default: false,
        },
        {
          params: 'colon',
          explain: '配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)',
          type: 'boolean',
          default: false,
        },
      ],
      tableDataChange: [{ params: 'submit', explain: '数据验证成功后回调事件', type: 'Function(e:Event)' }],
      tableDataOptions: [
        {
          params: 'prop',
          explain: '仅仅支持 Form.create({})(CustomizedForm)的使用方式，父组件需要映射到表单项上的属性声明(和vue 组件 props 一致)',
          type: '{ }',
          default: '',
        },
        {
          params: 'mapPropsToFields',
          explain:
            '把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 Form.createFormField 标记，如果使用$form.createForm 创建收集器，你可以将任何数据映射到 Field 中，不受父组件约束',
          type: '(props) => ({ [fieldName]: FormField { value } })',
        },
        {
          params: 'name',
          explain: '设置表单域内字段 id 的前缀',
          type: '',
        },
        {
          params: 'validateMessages',
          explain: '默认校验信息，可用于把默认错误信息改为中文等，格式与 newMessages 返回值一致',
          type: 'Object { [nested.path]: String }',
        },
        {
          params: 'onFieldsChange',
          explain: '当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store',
          type: 'Function(props, fields)',
        },
        {
          params: 'onValuesChange',
          explain: '任一表单域的值发生改变时的回调',
          type: '(props, values) => void',
        },
      ],
      tableDataFn: [
        {
          params: 'getFieldDecorator',
          explain: '用于和表单进行双向绑定，单文件 template 可以使用指令v-decorator进行绑定，详见下方描述',
        },
        {
          params: 'getFieldError',
          explain: '获取某个输入控件的 Error',
          type: 'Function(name)',
        },
        {
          params: 'getFieldsError',
          explain: '获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error',
          type: 'Function([names: string[]])',
        },
        {
          params: 'getFieldsValue',
          explain: '获取一组输入控件的值，如不传入参数，则获取全部组件的值',
          type: 'Function(props: array | string)',
        },
        {
          params: 'getFieldValue',
          explain: '获取一个输入控件的值',
          type: 'Function(fieldName: string)',
        },
        {
          params: 'isFieldsTouched',
          explain: '判断是否任一输入控件经历过 getFieldDecorator 或 v-decorator 的值收集时机 options.trigger',
          type: '(names?: string[]) => boolean',
        },
        {
          params: 'isFieldValidating',
          explain: '判断一个输入控件是否在校验状态',
          type: 'Function(name)',
        },
        {
          params: 'resetFields',
          explain: '重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件',
          type: 'Function([names: string[]])',
        },
        {
          params: 'setFields',
          explain: '设置一组输入控件的值与错误状态。',
          type: 'Function({ [fieldName]: { value: any, errors: [Error] } })',
        },
        {
          params: 'setFieldsValue',
          explain: '设置一组输入控件的值',
          type: 'Function({ [fieldName]: value })',
        },
        {
          params: 'validateFields',
          explain: '校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件',
          type: 'Function([fieldNames: string[]], [options: object], callback: Function(errors, values))',
        },
        {
          params: 'validateFieldsAndScroll',
          explain: '与 validateFields 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围',
          type: '参考 validateFields',
        },
      ],
      tableDaValidateFields: [
        {
          params: 'options.first',
          explain: '若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'options.firstFields',
          explain: '指定表单域会在碰到第一个失败了的校验规则后停止校验',
          type: 'String[ ]',
          default: '[ ]',
        },
        {
          params: 'options.force',
          explain: '对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'options.scroll',
          explain: '定义 validateFieldsAndScroll 的滚动行为，详细配置见 dom-scroll-into-view config',
          type: 'Object',
          default: '{ }',
        },
      ],
      tableDataItem: [
        {
          params: 'htmlFor',
          explain: '设置子元素 label htmlFor 属性',
          type: 'string',
        },
        {
          params: 'validateStatus',
          explain: "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
          type: 'string',
        },
        {
          params: 'selfUpdate',
          explain:
            '自定义字段更新逻辑，你可以通过 Form 的 selfUpdate 进行统一设置。当和 Form 同时设置时，以 Item 为准。 说明见下 需 1.3.17 版本以上',
          type: 'boolean',
          default: false,
        },
        { params: 'rules', explain: '表单验证规则', type: 'object | array' },
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
