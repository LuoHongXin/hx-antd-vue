<template>
  <div>
    <funTitleDetail title="卡片型" detail="常用于较大容器区域的顶部，如详情页。" />

    <!-- 组件展示 -->
    <com-show>
      <a-tabs type="card">
        <a-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2">
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
    </pre>
    <pre class="line-numbers">
        <code class="language-JavaScript">
            export default {
                data() {
                    return {
                        size: 'default',
                        mode: 'top',
                    };
                },
            };
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'CardTabs',
  data() {
    return {
      size: 'default',
      mode: 'top',
      html: `<a-radio-group v-model="size" style="margin-bottom: 16px">
        <a-radio-button value="small">
          小尺寸
        </a-radio-button>
        <a-radio-button value="default">
          大尺寸
        </a-radio-button>
      </a-radio-group>
      <y-tabs default-active-key="1" :size="size">
        <a-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </a-tab-pane>
      </y-tabs>
      <a-radio-group v-model="mode" style="margin: 16px 0">
        <a-radio-button value="top">
          顶部
        </a-radio-button>
        <a-radio-button value="right">
          右侧
        </a-radio-button>
        <a-radio-button value="bottom">
          底部
        </a-radio-button>
        <a-radio-button value="left">
          左侧
        </a-radio-button>
      </a-radio-group>
      <y-tabs default-active-key="1" :tab-position="mode">
        <a-tab-pane v-for="i in 24" :key="i" :tab="'Tab'+ i"> Content of Tab Pane {{ i }} </a-tab-pane>
      </y-tabs>`,
    };
  },
};
</script>
