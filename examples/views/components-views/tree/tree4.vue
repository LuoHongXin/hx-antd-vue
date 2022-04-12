<template>
  <div>
    <funTitleDetail title="自定义图标" detail="可以针对不同的节点定制图标。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div style="margin-bottom: 16px">
        显示连接线: <y-switch v-model="showLine" />
        <br />
        <br />
        显示图标: <y-switch v-model="showIcon" />
      </div>
      <y-tree :show-line="showLine" :show-icon="showIcon" :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']" @select="onSelect">
        <a-icon slot="icon" type="carry-out" />
        <y-tree-node key="0-0">
          <a-icon slot="icon" type="carry-out" />
          <span slot="title" style="color: #1890ff">parent 1</span>
          <y-tree-node key="0-0-0" title="parent 1-0">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-0-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-0-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-0-2" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
          </y-tree-node>
          <y-tree-node key="0-0-1" title="parent 1-1">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-1-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
          </y-tree-node>
          <y-tree-node key="0-0-2" title="parent 1-2">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-2-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-2-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
              <a-icon slot="switcherIcon" type="form" />
            </y-tree-node>
          </y-tree-node>
        </y-tree-node>
      </y-tree>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myTree4',
  data() {
    return {
      showLine: true,
      showIcon: false,
      html: `<div style="margin-bottom: 16px">
        显示连接线: <y-switch v-model="showLine" />
        <br />
        <br />
        显示图标: <y-switch v-model="showIcon" />
      </div>
      <y-tree :show-line="showLine" :show-icon="showIcon" :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']" @select="onSelect">
        <a-icon slot="icon" type="carry-out" />
        <y-tree-node key="0-0">
          <a-icon slot="icon" type="carry-out" />
          <span slot="title" style="color: #1890ff">parent 1</span>
          <y-tree-node key="0-0-0" title="parent 1-0">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-0-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-0-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-0-2" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
          </y-tree-node>
          <y-tree-node key="0-0-1" title="parent 1-1">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-1-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
          </y-tree-node>
          <y-tree-node key="0-0-2" title="parent 1-2">
            <a-icon slot="icon" type="carry-out" />
            <y-tree-node key="0-0-2-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </y-tree-node>
            <y-tree-node key="0-0-2-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
              <a-icon slot="switcherIcon" type="form" />
            </y-tree-node>
          </y-tree-node>
        </y-tree-node>
      </y-tree>`,
      js: `
      export default {
          data() {
            return {
                showLine: true,
                showIcon: false,
            };
          },
          methods: {
            onSelect(selectedKeys, info) {
              console.log('selected', selectedKeys, info);
            },
          },
        };`,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
