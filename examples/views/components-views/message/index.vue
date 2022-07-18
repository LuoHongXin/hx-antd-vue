<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Message 全局提示" detail="全局展示操作反馈信息。" />
    <h3 class="fun-title">代码演示</h3>
    <declareList :value="declareList" />
    <funTitleDetail title="各状态全局提示"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div>
        <y-button @click="openMessage('info')">信息提示</y-button>
        <y-button @click="openMessage('success')">成功提示</y-button>
        <y-button @click="openMessage('warn')">告警提示</y-button>
        <y-button @click="openMessage('error')">错误提示</y-button>
        <y-button @click="openMessage('loading')">加载提示</y-button>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
    <funTitleDetail title="更新消息内容"></funTitleDetail>
    <com-show>
      <div>
        <y-button @click="openLoadingMessage">更新提示</y-button>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
        <code class="language-JavaScript" v-text="js2">
        </code>
    </pre>
    <declareList :value="declareList2" />
    <api-table :data="tableData"></api-table>
    <declareList :value="declareList3" />
    <api-table :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      declareList: ['可提供成功、警告和错误等反馈信息。', '顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。'],
      declareList2: [
        'message.success(content, [duration], onClose)',
        'message.error(content, [duration], onClose)',
        'message.info(content, [duration], onClose)',
        'message.warning(content, [duration], onClose)',
        'message.warn(content, [duration], onClose)',
        'message.loading(content, [duration], onClose)',
      ],
      declareList3: [
        'message.open(config)',
        'message.success(config)',
        'message.error(config)',
        'message.info(config)',
        'message.warning(config)',
        'message.warn(config)',
        'message.loading(config)',
      ],
      html: `<div>
        <y-button @click="openMessage('info')">信息提示</y-button>
        <y-button @click="openMessage('success')">成功提示</y-button>
        <y-button @click="openMessage('warn')">告警提示</y-button>
        <y-button @click="openMessage('error')">错误提示</y-button>
        <y-button @click="openMessage('loading')">加载提示</y-button>
      </div>`,
      html2: `<div>
        <y-button @click="openLoadingMessage">提示</y-button>
      </div>`,
      js: `export default {
          methods: {
            openMessage(type) {
              this.$YMessage[type]('这里一条结果反馈消息，会自动消失。', 5);
            },
          }
      }`,
      js2: `export default {
        methods: {
            openLoadingMessage() {
              const key = 'updatable';
              this.$YMessage.loading({ content: '加载中...', key, duration: 0});
              setTimeout(() => {
                this.$YMessage.success({ content: '加载完成!', key, duration: 2 });
              }, 1000);
            },
          }
      }`,
      tableData: [
        { params: 'content', explain: '提示内容', type: 'string| VNode |(h) => VNode', default: '-' },
        { params: 'duration', explain: '自动关闭的延时，单位秒。设为 0 时不自动关闭。', type: 'number', default: '3' },
        { params: 'onClose', explain: '关闭时触发的回调函数', type: 'Function', default: '-' },
      ],
      tableData2: [
        { params: 'content', explain: '提示内容', type: 'string| VNode |(h) => VNode', default: '-' },
        { params: 'duration', explain: '自动关闭的延时，单位秒。设为 0 时不自动关闭。', type: 'number', default: '3' },
        { params: 'onClose', explain: '关闭时触发的回调函数', type: 'Function', default: '-' },
        { params: 'icon', explain: '自定义图标', type: '	string| VNode |(h) => VNode', default: '-' },
        { params: 'key', explain: '当前提示的唯一标志', type: 'string|number', default: '-' },
      ],
    };
  },
  methods: {
    openMessage(type) {
      this.$YMessage[type]('这里一条结果反馈消息，会自动消失。', 5);
    },
    openLoadingMessage() {
      const key = 'updatable';
      this.$YMessage.loading({ content: '加载中...', key, duration: 0 });
      setTimeout(() => {
        this.$YMessage.success({ content: '加载完成!', key, duration: 2 });
      }, 5000);
    },
  },
};
</script>
<style lang="less" scoped>
.y-btn {
  margin-right: 14px;
}
</style>
