<template>
  <div>
    <funTitleDetail
      title="普通型"
      detail="默认使用的类型，既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。分横向和纵向两种展示形式。"
    />

    <!-- 组件展示 -->
    <com-show>
      <y-radio-group v-model="size" style="margin-bottom: 16px">
        <y-radio-button value="small">
          小尺寸
        </y-radio-button>
        <y-radio-button value="default">
          大尺寸
        </y-radio-button>
      </y-radio-group>
      <y-tabs default-active-key="1" :size="size">
        <y-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </y-tab-pane>
        <y-tab-pane key="2" tab="Tab 2" force-render>
          Content of Tab Pane 2
        </y-tab-pane>
        <y-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </y-tab-pane>
      </y-tabs>
      <y-radio-group v-model="mode" style="margin: 16px 0">
        <y-radio-button value="top">
          顶部
        </y-radio-button>
        <y-radio-button value="right">
          右侧
        </y-radio-button>
        <y-radio-button value="bottom">
          底部
        </y-radio-button>
        <y-radio-button value="left">
          左侧
        </y-radio-button>
      </y-radio-group>
      <y-tabs v-model="activeKey" :tab-position="mode">
        <y-tab-pane v-for="i in 24" :key="i" :tab="`Tab ${i}`"> Content of Tab Pane {{ i }} </y-tab-pane>
      </y-tabs>
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
                        activeKey: 2,
                    };
                },
            };
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'NormalTabs',
  data() {
    return {
      size: 'default',
      mode: 'top',
      activeKey: 2,
      html: `<y-radio-group v-model="size" style="margin-bottom: 16px">
        <y-radio-button value="small">
          小尺寸
        </y-radio-button>
        <y-radio-button value="default">
          大尺寸
        </y-radio-button>
      </y-radio-group>
      <y-tabs default-active-key="1" :size="size">
        <y-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </y-tab-pane>
        <y-tab-pane key="2" tab="Tab 2" force-render>
          Content of Tab Pane 2
        </y-tab-pane>
        <y-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </y-tab-pane>
      </y-tabs>
      <y-radio-group v-model="mode" style="margin: 16px 0">
        <y-radio-button value="top">
          顶部
        </y-radio-button>
        <y-radio-button value="right">
          右侧
        </y-radio-button>
        <y-radio-button value="bottom">
          底部
        </y-radio-button>
        <y-radio-button value="left">
          左侧
        </y-radio-button>
      </y-radio-group>
      <y-tabs v-model="activeKey" :tab-position="mode">
        <y-tab-pane v-for="i in 24" :key="i" :tab="\`Tab \${i}\`"> Content of Tab Pane {{ i }} </y-tab-pane>
      </y-tabs>`,
    };
  },
};
</script>
