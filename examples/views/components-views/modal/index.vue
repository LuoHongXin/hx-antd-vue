<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="Modal 弹窗"
      detail="模态对话框是伴随着半透明黑色遮罩出现的一种弹窗形式，用于关键信息录入或信息确认，需要用户进行操作，会中断用户当前的任务流程，所以请谨慎使用对话框以避免对用户过度干扰。"
    />
    <declareList title="通用原则" :value="declareList" />
    <y-tabs default-active-key="1" type="card">
      <a-tab-pane key="1" tab="基础型">
        <modal2 />
        <modal1 />
        <api-table :data="tableData"></api-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="确认型">
        <confirm />
        <api-table :data="tableData2"></api-table>
      </a-tab-pane>
      <a-tab-pane key="3" tab="提示型">
        <message />
        <api-table :data="tableData2"></api-table>
      </a-tab-pane>
    </y-tabs>
  </div>
</template>
<script>
import modal1 from './modal1.vue';
import modal2 from './modal2.vue';
import confirm from './confirm.vue';
import message from './message.vue';
export default {
  name: 'MyModal',
  components: {
    modal1,
    modal2,
    confirm,
    message,
  },
  data() {
    return {
      declareList: [
        '这个信息很重要，需要打断用户的流程来获取注意力，并需要用户给予操作反馈；',
        '内容过多，伴随着复杂的交互，导致对话框过分密集，此时应该考虑更大的容器载体，比如 Drawer 抽屉、新开页面；',
        '简单频繁的确认操作，请使用 Popconfirm 气泡确认框，鼠标操作路径短更便于用户操作；',
        '一段无需操作的简单信息想要告知用户，且又不阻断用户当前的流程，请使用 Notification 通知提示；',
      ],
      tableData: [
        { params: 'move', explain: '是否支持移动窗口，默认为 true 支持移动', type: 'Boolean', default: 'true' },
        { params: 'dragSet', explain: '限制拖拽范围，对象中有maxLeft，minLeft，maxTop，minTop选择进行限制', type: 'Object', default: '{}' },
        {
          params: 'maskClosable',
          explain: 'antd的弹窗组件是默认支持点击遮罩关闭的，但是根据需求，我将y-modal设置为默认不支持，但是有需要也可以传 true 支持。',
          type: 'Boolean',
          default: 'false',
        },
        { params: 'afterClose', explain: 'Modal 完全关闭后的回调', type: 'function', default: '无' },
        { params: 'bodyStyle', explain: 'Modal body 样式', type: 'Object', default: '{}' },
        { params: 'cancelText', explain: '取消按钮文字', type: 'string| slot', default: '取消' },
        { params: 'centered', explain: '垂直居中展示 Modal', type: 'Boolean', default: 'false' },
        { params: 'closable', explain: '是否显示右上角的关闭按钮', type: 'Boolean', default: 'true' },
        { params: 'closeIcon', explain: '自定义关闭图标', type: 'VNode | slot', default: '-' },
        { params: 'confirmLoading', explain: '确定按钮 loading', type: 'boolean', default: 'false' },
        { params: 'destroyOnClose', explain: '关闭时销毁 Modal 里的子元素', type: 'boolean', default: 'false' },
        {
          params: 'footer',
          explain: '底部内容，当不需要默认底部按钮时，可以设为 :footer="null"',
          type: 'string|slot',
          default: '确定取消按钮	',
        },
        { params: 'forceRender', explain: '强制渲染 Modal', type: 'boolean', default: 'false' },
        { params: 'getContainer', explain: '指定 Modal 挂载的 HTML 节点', type: '(instance): HTMLElement', default: '() => document.body' },
        { params: 'keyboard', explain: '是否支持键盘 esc 关闭', type: 'boolean', default: 'true' },
        { params: 'mask', explain: '是否展示遮罩', type: 'boolean', default: 'true' },
        { params: 'maskStyle', explain: '遮罩样式', type: 'object', default: '{}' },
        { params: 'okText', explain: '确认按钮文字', type: 'string|slot', default: '确定' },
        { params: 'okType', explain: '确认按钮类型', type: 'string', default: 'primary' },
        { params: 'title', explain: '标题', type: 'string|slot', default: '无' },
        { params: 'visible(v-model)', explain: '对话框是否可见', type: 'boolean', default: '' },
        {
          params: 'size',
          explain: '宽度尺寸',
          type: '有 xs、s、m、l、xl、xxl六种，分别对应368、528、688、848、1008、1168',
          default: 'm',
        },
        { params: 'wrapClassName', explain: '对话框外层容器的类名', type: 'string', default: '-' },
        { params: 'zIndex', explain: '设置 Modal 的 z-index', type: 'Number', default: '1000' },
        { params: 'dialogStyle', explain: '可用于设置浮层的样式，调整浮层位置等', type: 'object', default: '-' },
        { params: 'dialogClass', explain: '可用于设置浮层的类名', type: 'string', default: '-' },
      ],
      tableData2: [
        { params: 'move', explain: 'antd 的 confirm 没有的配置', type: 'Boolean', default: 'true' },
        { params: 'autoFocusButton', explain: '指定自动获得焦点的按钮', type: 'null|string: ok cancel', default: 'ok' },
        { params: 'cancelText', explain: '取消按钮文字', type: 'string', default: '取消' },
        { params: 'centered', explain: '垂直居中展示 Modal', type: 'Boolean', default: 'false' },
        { params: 'closable', explain: '是否显示右上角的关闭按钮', type: 'Boolean', default: 'false' },
        { params: 'class', explain: '容器类名', type: 'string', default: '-' },
        { params: 'content', explain: '内容', type: 'string |vNode |function(h)', default: '无' },
        { params: 'icon', explain: '自定义图标（1.14.0 新增）', type: 'string|()=>VNode', default: '' },
        { params: 'mask', explain: '是否展示遮罩', type: 'Boolean', default: 'true' },
        { params: 'maskClosable', explain: '点击蒙层是否允许关闭', type: 'Boolean', default: 'false' },
        { params: 'keyboard', explain: '是否支持键盘 esc 关闭', type: 'Boolean', default: 'true' },
        { params: 'okText', explain: '确认按钮文字', type: 'string', default: '确定' },
        { params: 'okType', explain: '确认按钮类型', type: 'string', default: 'primary' },
        { params: 'title', explain: '标题', type: 'string|vNode |function(h)', default: '无' },
        { params: 'width', explain: '宽度', type: 'string|number', default: '416' },
        { params: 'zIndex', explain: '设置 Modal 的 z-index', type: 'Number', default: '1000' },
        { params: 'onCancel', explain: '取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭', type: 'function', default: '' },
        { params: 'onOk', explain: '点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭', type: 'function', default: '' },
      ],
    };
  },
};
</script>
