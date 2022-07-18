<template>
  <div>
    <funTitleDetail title="选中互相没关系" detail="checkStrictly 模式，选中节点与其它节点没有任何关系"></funTitleDetail>
    <!-- 组件展示 -->
    <!-- 组件展示 -->
    <com-show>
      <!-- 组件展示 -->
      <y-custom-tree
        checkable
        checkStrictly
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        draggable
        :treeData="treeData"
      >
      </y-custom-tree>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript" v-text="js">
        </code>
    </pre>
    <funTitleDetail
      title="子选父"
      detail="checkStrictly + strictCheckParent 模式，选中节点会自动选中以上关系的节点，但选父不会自动选以下关系节点"
    ></funTitleDetail>
    <com-show>
      <!-- 组件展示 -->
      <y-custom-tree
        checkable
        checkStrictly
        strictCheckParent
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        draggable
        :treeData="treeData"
      >
      </y-custom-tree>
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
      html: `<y-custom-tree
        checkable
        checkStrictly
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        draggable
        :treeData="treeData"
      >`,
      html2: `<y-custom-tree
        checkable
        checkStrictly
        strictCheckParent
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        draggable
        :treeData="treeData"
      >
      </y-custom-tree>`,
      js: ` data() {
                return {
                    replaceFields: {
                        title: 'name',
                    },
                    treeData: [
                        {
                        name: 'parent 1',
                        key: '0-0',
                        class: 'no-style', // 添加此类名，标题不会有任何样式
                        children: [
                            {
                            name: 'parent 1-0',
                            key: '0-0-0',
                            children: [
                                { name: 'leaf', key: '0-0-0-0' },
                                { name: 'leaf123', key: '0-0-0-1' },
                            ],
                            },
                            {
                            name: 'parent 1-1',
                            key: '0-0-1',
                            children: [{ key: '0-0-1-0', name: 'leaf1235' }],
                            },
                        ],
                    },
                ],
                };
            },`,
      replaceFields: {
        title: 'name',
      },
      treeData: [
        {
          name: 'parent 1',
          key: '0-0',
          checkable: false,
          class: 'no-style', // 添加此类名，标题不会有任何样式
          children: [
            {
              name: 'parent 1-0',
              key: '0-0-0',
              children: [
                { name: 'leaf', key: '0-0-0-0' },
                { name: 'leaf123', key: '0-0-0-1' },
              ],
            },
            {
              name: 'parent 1-1',
              key: '0-0-1',
              children: [{ key: '0-0-1-0', name: 'leaf1235' }],
            },
          ],
        },
      ],
    };
  },
};
</script>
