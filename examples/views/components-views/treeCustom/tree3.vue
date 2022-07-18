<template>
  <div>
    <funTitleDetail title="树节点拖拽用法" detail="将节点拖拽到其他节点内部或前后。"></funTitleDetail>
    <!-- 组件展示 -->
    <!-- 组件展示 -->
    <com-show>
      <!-- 组件展示 -->
      <y-custom-tree
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        @dragenter="onDragEnter"
        @drop="onDrop"
        draggable
        :treeData="treeData"
      >
      </y-custom-tree>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript">
          export default {
            data() {
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
                        disabled: true,
                        children: [
                          { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
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
            methods: {
              // 拖动时触发
              onDragEnter(info) {
                console.log(info);
              },
              // 拖动停止
              onDrop(info) {
                let children = 'children'; //对应 children，可根据情况修改
                const dropKey = info.node.eventKey;
                const dragKey = info.dragNode.eventKey;
                const dropPos = info.node.pos.split('-');
                const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
                const loop = (data, key, callback) => {
                  data.forEach((item, index, arr) => {
                    if (item.key === key) {
                      return callback(item, index, arr);
                    }
                    if (item[children]) {
                      return loop(item[children], key, callback);
                    }
                  });
                };
                const data = [...this.treeData];

                // Find dragObject
                let dragObj;
                loop(data, dragKey, (item, index, arr) => {
                  arr.splice(index, 1);
                  dragObj = item;
                });
                if (!info.dropToGap) {
                  // Drop on the content
                  loop(data, dropKey, item => {
                    item[children] = item[children] || [];
                    // where to insert 示例添加到尾部，可以是随意位置
                    item[children].push(dragObj);
                  });
                } else if (
                  (info.node[children] || []).length > 0 && // Has[children]
                  info.node.expanded && // Is expanded
                  dropPosition === 1 // On the bottom gap
                ) {
                  loop(data, dropKey, item => {
                    item[children] = item[children] || [];
                    // where to insert 示例添加到尾部，可以是随意位置
                    item[children].unshift(dragObj);
                  });
                } else {
                  let ar;
                  let i;
                  loop(data, dropKey, (item, index, arr) => {
                    ar = arr;
                    i = index;
                  });
                  if (dropPosition === -1) {
                    ar.splice(i, 0, dragObj);
                  } else {
                    ar.splice(i + 1, 0, dragObj);
                  }
                }
                this.treeData = data;
              },
            },
          };
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myTree3',
  data() {
    return {
      html: `<y-custom-tree
        :replaceFields="replaceFields"
        :default-expanded-keys="['0-0', '0-0-0']"
        @dragenter="onDragEnter"
        @drop="onDrop"
        draggable
        :treeData="treeData"
      >
      </y-custom-tree>`,
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
              disabled: true,
              children: [
                { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
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
  methods: {
    // 拖动时触发
    onDragEnter(info) {
      console.log(info);
    },
    // 拖动停止
    onDrop(info) {
      let children = 'children'; //对应 children，可根据情况修改
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item[children]) {
            return loop(item[children], key, callback);
          }
        });
      };
      const data = [...this.treeData];

      // Find dragObject
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, item => {
          item[children] = item[children] || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item[children].push(dragObj);
        });
      } else if (
        (info.node[children] || []).length > 0 && // Has[children]
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, item => {
          item[children] = item[children] || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item[children].unshift(dragObj);
        });
      } else {
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      this.treeData = data;
    },
  },
};
</script>
