<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="Input" tab="Input输入框">
        <myInput />
        <api-table :data="tableDataInput" title="Input"></api-table>
        <api-table :data="tableDataInputEvent" title="Input 事件"></api-table>
      </a-tab-pane>
      <a-tab-pane key="password" tab="input-password">
        <myInputPassword />
      </a-tab-pane>
      <a-tab-pane key="search" tab="搜索框search">
        <myInputSearch />
      </a-tab-pane>
      <a-tab-pane key="number" tab="input-number">
        <myInputNumber />
      </a-tab-pane>
      <a-tab-pane key="textarea" tab="文本域">
        <myTextarea />
        <api-table :data="tableDataInput" title="Input(y-textarea 拥有所有input api)"></api-table>
        <api-table :data="tableDataInputEvent" title="Input.textarea事件(y-textarea 拥有所有input事件)"></api-table>
      </a-tab-pane>
      <a-tab-pane key="inputIp" tab="ip输入框">
        <myInputIp />
      </a-tab-pane>
      <a-tab-pane key="1" tab="可输入新增标签">
        <myTagInput />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import myTagInput from './YTagInput.vue';
export default {
  name: 'myinput',
  data() {
    return {
      tableDataInput: [
        { params: 'trim', explain: '开启trim去除前后空格', type: 'Boolean', default: 'true' },
        {
          params: 'autoWidth',
          explain: '默认宽度, 父盒子撑开',
          type: 'boolean',
          default: 'false',
        },
        {
          params: 'widthSize',
          explain: '尺寸,尺寸针对宽度有 xs(102px)、s(212px)、m(322px)、l(432px)、xl(542px)五种',
          type: 'string',
          default: 'm',
        },
        { params: 'passwordMode', explain: '开启密码框模式', type: 'Boolean', default: 'false' },
        { params: 'addonAfter', explain: '带标签的 input，设置后置标签', type: 'string|slot', default: '' },
        { params: 'addonBefore', explain: '带标签的 input，设置前置标签', type: 'string|slot', default: '' },
        { params: 'defaultValue', explain: '输入框默认内容', type: 'string', default: '' },
        { params: 'disabled', explain: '是否禁用状态，默认为 false', type: 'boolean', default: 'false	' },
        { params: 'id', explain: '输入框的 id', type: 'string', default: '' },
        { params: 'maxLength', explain: '最大长度', type: 'number', default: '' },
        { params: 'prefix', explain: '带有前缀图标的 input', type: 'string|slot', default: '' },
        {
          params: 'size',
          explain: '控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small',
          type: 'string',
          default: 'default',
        },
        { params: 'suffix', explain: '带有后缀图标的 input', type: 'string|slot', default: '' },
        {
          params: 'type',
          explain: '声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")。',
          type: 'string',
          default: 'text',
        },
        { params: 'value(v-model)', explain: '输入框内容', type: 'string', default: '' },
        { params: 'allowClear', explain: '可以点击清除图标删除内容', type: 'boolean', default: '' },
      ],
      tableDataInputEvent: [
        { params: 'change', explain: '输入框内容变化时的回调', type: 'function(e)', default: '' },
        { params: 'pressEnter', explain: '按下回车的回调', type: 'function(e)', default: '' },
      ],
    };
  },
  components: {
    myTagInput,
    myInput: () => import('./input.vue'),
    myTextarea: () => import('./textarea.vue'),
    myInputPassword: () => import('./inputPassword.vue'),
    myInputNumber: () => import('./inputNumber'),
    myInputSearch: () => import('./inputSearch'),
    myInputIp: () => import('./inputIp'),
  },
};
</script>
