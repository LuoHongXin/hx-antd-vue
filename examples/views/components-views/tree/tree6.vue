<template>
  <div>
    <funTitleDetail title="自定义展开/折叠图标。" detail="自定义展开/折叠图标。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
        <a-icon slot="switcherIcon" type="down" />
        <y-tree-node key="0-0" title="parent 1">
          <y-tree-node key="0-0-0" title="parent 1-0">
            <y-tree-node key="0-0-0-0" title="leaf" />
            <y-tree-node key="0-0-0-1" title="leaf" />
            <y-tree-node key="0-0-0-2" title="leaf" />
          </y-tree-node>
          <y-tree-node key="0-0-1" title="parent 1-1">
            <y-tree-node key="0-0-1-0" title="leaf" />
          </y-tree-node>
          <y-tree-node key="0-0-2" title="parent 1-2">
            <y-tree-node key="0-0-2-0" title="leaf" />
            <y-tree-node key="0-0-2-1" title="leaf" />
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
  name: 'myTree6',
  data() {
    return {
      html: `<y-tree show-line :default-expanded-keys="['0-0-0']" @select="onSelect">
        <a-icon slot="switcherIcon" type="down" />
        <y-tree-node key="0-0" title="parent 1">
          <y-tree-node key="0-0-0" title="parent 1-0">
            <y-tree-node key="0-0-0-0" title="leaf" />
            <y-tree-node key="0-0-0-1" title="leaf" />
            <y-tree-node key="0-0-0-2" title="leaf" />
          </y-tree-node>
          <y-tree-node key="0-0-1" title="parent 1-1">
            <y-tree-node key="0-0-1-0" title="leaf" />
          </y-tree-node>
          <y-tree-node key="0-0-2" title="parent 1-2">
            <y-tree-node key="0-0-2-0" title="leaf" />
            <y-tree-node key="0-0-2-1" title="leaf" />
          </y-tree-node>
        </y-tree-node>
      </y-tree>`,
      js: `
      export default {
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
