<template>
  <div>
    <funTitleDetail title="基本用法" detail="最简单的用法，禁用，默认展开等功能。"></funTitleDetail>
    <!-- 组件展示 -->
    <div style="width:300px">
      <!-- 组件展示 -->
      <y-custom-tree
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        @select="onSelect"
        :treeData="treeData"
        :showTooltip="false"
      >
      </y-custom-tree>
    </div>
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
  name: 'myTree1',
  data() {
    return {
      replaceFields: {
        title: 'name',
      },
      treeData: [
        {
          name: 'parent',
          key: '0-0',
          class: 'no-style', // 添加此类名，标题不会有任何样式
          children: [
            {
              name: 'parent 1-0 ',
              key: '0-0-0',
              disabled: true,
              children: [
                { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                { name: 'leaf123', key: '0-0-0-1' },
              ],
            },
            {
              name: 'parent 1-1  12222222222222222222222222222222222222222',
              key: '0-0-1',
              children: [{ key: '0-0-1-0', name: 'leaf1235' }],
            },
          ],
        },
      ],
      html: `<div style="width:300px">
      <!-- 组件展示 -->
      <y-custom-tree :default-expanded-keys="['0-0', '0-0-0']" @select="onSelect" :treeData="treeData" :showTooltip="false"> </y-custom-tree>
      </div>`,
      js: `
      export default {
        name: 'myTree1',
        data() {
          return {
            treeData: [
              {
                title: 'parent 1',
                class: 'no-style', // 添加此类名，标题不会有任何样式
                key: '0-0',
                children: [
                  {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                      { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                      { title: 'leaf123', key: '0-0-0-1' },
                    ],
                  },
                  {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{ key: '0-0-1-0', title: 'leaf1235' }],
                  },
                ],
              },
            ],
          };
        },
      };
    `,
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>
