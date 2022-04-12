<template>
  <div>
    <funTitleDetail title="基本用法" detail="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-tree
        checkable
        :tree-data="treeData"
        :default-expanded-keys="['0-0-0', '0-0-1']"
        :default-selected-keys="['0-0-0', '0-0-1']"
        :default-checked-keys="['0-0-0', '0-0-1']"
        @select="onSelect"
        @check="onCheck"
      >
        <span slot="title0010" style="color: #1890ff">sss</span>
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
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
];
export default {
  name: 'myTree1',
  data() {
    return {
      treeData,
      html: `<y-tree
        checkable
        :tree-data="treeData"
        :default-expanded-keys="['0-0-0', '0-0-1']"
        :default-selected-keys="['0-0-0', '0-0-1']"
        :default-checked-keys="['0-0-0', '0-0-1']"
        @select="onSelect"
        @check="onCheck"
      >
        <span slot="title0010" style="color: #1890ff">sss</span>
      </y-tree>`,
      js: `
      const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                        { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                        { title: 'leaf', key: '0-0-0-1' },
                    ],
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
                },
            ],
        },
     ];
      export default {
          data() {
            return {
                treeData,
            };
          },
          methods: {
           onSelect(selectedKeys, info) {
                console.log('selected', selectedKeys, info);
            },
            onCheck(checkedKeys, info) {
                console.log('onCheck', checkedKeys, info);
            },
          },
        };`,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
  },
};
</script>
