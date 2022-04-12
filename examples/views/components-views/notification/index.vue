<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Notification 通知提醒" detail="响应用户的操作，提供操作结果反馈。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList title="类型" :value="declareList" />
    <funTitleDetail title="各状态无操作通知提醒"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button @click="openNotification('open')">无状态通知提醒</y-button>
        <y-button @click="openNotification('info')">告知（蓝）</y-button>
        <y-button @click="openNotification('success')">成功（绿）</y-button>
        <y-button @click="openNotification('warn')">警示（黄）</y-button>
        <y-button @click="openNotification('error')">失败（红）</y-button>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
    <funTitleDetail title="带操作通知提醒"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button @click="openBtnNotification">带操作通知提醒</y-button>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
        <code class="language-JavaScript" v-text="js2">
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  data() {
    return {
      declareList: [
        '告知（蓝）：对于用户操作的结果既无积极，也无消息影响的事实的告知。比如帮助、指南、辅助类信息等。',
        '成功（绿）：当用户操作成果的时候，用以传达成功、积极的信息。',
        '警示（黄）：当用户操作的结果有风险的时候，用以传达提醒与警示信息。此时用户当前的操作流程通常没有结束，所以建议不要有操作。',
        '失败（红）：当用户操作失败的时候，用以传达错误、失败等严重信息。此时用户当前的操作流程通常没有结束，所以建议不要有操作。',
      ],
      html: `<div>
        <y-button @click="openNotification('open')">无状态通知提醒</y-button>
        <y-button @click="openNotification('info')">告知（蓝）</y-button>
        <y-button @click="openNotification('success')">成功（绿）</y-button>
        <y-button @click="openNotification('warn')">警示（黄）</y-button>
        <y-button @click="openNotification('error')">失败（红）</y-button>
      </div>`,
      js: `export default {
            methods: {
                openNotification(type) {
                    this.$YNotification[type]({
                        message: '系统通知',
                        description: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    });
                },
            }
        }`,
      html2: `<div>
        <y-button @click="openBtnNotification">带操作通知提醒</y-button>
      </div>`,
      js2: `export default {
            methods: {
                openBtnNotification() {
                    this.$YNotification.success({
                        message: '系统通知',
                        duration: null,
                        check: {
                            text: '查看',
                            click: () => {
                                window.alert('查看');
                            },
                        },
                        ignore: {
                            text: '忽略',
                            click: event => {
                                window.alert('忽略');
                                event.stopPropagation(); // 可通过阻止事件冒泡避免触发了onClick点击通知事件
                            },
                        },
                        description: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
                        onClick: () => {
                            window.alert('点击通知事件');
                        },
                    });
                },
            }
        }`,
      tableData: [
        { params: 'btn', explain: '自定义关闭按钮', type: 'vueNode |function(h)', default: '-' },
        { params: 'bottom', explain: '消息从底部弹出时，距离底部的位置，单位像素。', type: 'string', default: '24px' },
        { params: 'class', explain: '自定义 CSS class', type: 'string', default: '-' },
        { params: 'description', explain: '通知提醒内容，必选', type: 'string |vueNode |function(h)', default: '-' },
        { params: 'duration', explain: '默认 4.5 秒后自动关闭，配置为 null 则不自动关闭', type: 'number', default: '4.5' },
        { params: 'getContainer', explain: '配置渲染节点的输出位置', type: '() => HTMLNode', default: '() => document.body' },
        { params: 'icon', explain: '自定义图标', type: 'vueNode |function(h)', default: '-' },
        { params: 'key', explain: '当前通知唯一标志', type: 'string', default: '-' },
        { params: 'message', explain: '通知提醒标题，必选', type: 'string |vueNode |function(h)', default: '-' },
        { params: 'placement', explain: '弹出位置，可选 topLeft topRight bottomLeft bottomRight', type: 'string', default: 'topRight' },
        { params: 'style', explain: '自定义内联样式', type: 'Object | string', default: '-' },
        { params: 'onClose', explain: '点击默认关闭按钮时触发的回调函数', type: 'Function', default: '-' },
        { params: 'onClick', explain: '点击通知时触发的回调函数', type: 'Function', default: '-' },
        { params: 'top', explain: '消息从顶部弹出时，距离顶部的位置，单位像素。', type: 'string', default: '24px' },
        { params: 'closeIcon', explain: '自定义关闭图标', type: 'VNode | function(h)', default: '-' },
        {
          params: 'check',
          explain: '查看按钮，其属性text为按钮文字，click为点击事件，若不想触发onClick，可阻止冒泡',
          type: 'Object',
          default: '-',
        },
        { params: 'ignore', explain: '同上check', type: 'Object', default: '-' },
      ],
    };
  },
  methods: {
    openNotification(type) {
      this.$YNotification[type]({
        message: '系统通知',
        description: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
    openBtnNotification() {
      this.$YNotification.success({
        message: '系统通知',
        duration: null,
        check: {
          text: '查看',
          click: () => {
            window.alert('查看');
          },
        },
        ignore: {
          text: '忽略',
          click: event => {
            window.alert('忽略');
            event.stopPropagation(); // 可通过阻止事件冒泡避免触发了onClick点击通知事件
          },
        },
        description: '这里是一段简要的描述性信息，尽量控制在三行以内，告知用户可能需要采取行动的重要事情。',
        onClick: () => {
          window.alert('点击通知事件');
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.y-btn {
  margin-right: 14px;
}
</style>
