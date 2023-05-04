<template>
  <div>
    <funTitleDetail title="卡片型" detail="常用于较大容器区域的顶部，如详情页。" />

    <!-- 组件展示 -->
    <com-show>
      <y-tabs type="card">
        <template #tabBarExtraContent>自定义右侧内容</template>
        <y-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </y-tab-pane>
        <y-tab-pane key="2" tab="Tab 2">
          Content of Tab Pane 2
        </y-tab-pane>
        <y-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </y-tab-pane>
      </y-tabs>
    </com-show>
    <!-- 组件展示2 -->
    <com-show>
      <y-tabs type="card">
        <y-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </y-tab-pane>
        <y-tab-pane key="2" tab="Tab 2">
          Content of Tab Pane 2
        </y-tab-pane>
        <y-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </y-tab-pane>
      </y-tabs>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
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
      html: `<y-tabs type="card">
        <y-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </y-tab-pane>
        <y-tab-pane key="2" tab="Tab 2">
          Content of Tab Pane 2
        </y-tab-pane>
        <y-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </y-tab-pane>
      </y-tabs>`,
    };
  },
};
</script>
