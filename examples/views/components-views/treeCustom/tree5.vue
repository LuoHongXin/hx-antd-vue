<template>
  <div>
    <div style="width: 300px">
      <h3 class="fun-title">不带图标右键操作</h3>
      <com-show>
        <y-custom-tree
          :default-expanded-keys="['0-0', '0-0-0']"
          :treeData="treeData"
          :operates="commonOperates"
          :operateTriggerMethod="['contextmenu']"
          :noIconOperate="true"
        >
          <a-icon slot="smile" type="smile" style="width: 16px; height: 16px" />
          <a-icon slot="user" type="user" style="width: 16px; height: 16px" />
        </y-custom-tree>
      </com-show>
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
  name: 'myTree2',
  data() {
    return {
      aa: ['0-0-0'],
      html: `
          <y-custom-tree
              :default-expanded-keys="['0-0', '0-0-0']"
              :treeData="treeData"
              :operates="commonOperates"
              :operateTriggerMethod="['contextmenu']"
              :noIconOperate="true"
            >
              <a-icon slot="smile" type="smile" style="width:16px;height:16px" />
              <a-icon slot="user" type="user" style="width:16px;height:16px" />
            </y-custom-tree>
          `,
      js: `
          data() {
        return {
          commonOperates: [
            {
              title: '全局方法1',
              click: i => {
                this.handleCreat(i);
              },
            },
            {
              title: '全局方法2',
              click: i => {
                this.handleDelete(i);
              },
            },
          ],
            treeData: [
          {
            title: '默认组织111166688888888888888888888888',
            key: '0-0',
            isLeaf: false,
            slots: { icon: 'smile' },
            scopedSlots: { title: 'dropdown' },
            operates: [
              {
                title: '创建数据',
                line: true,
                children: [
                  {
                    title: '子创建1',
                    click: i => {
                      this.handleCreat(i);
                    },
                    disabled: true,
                    tips: '自定义提示',
                  },
                  {
                    title: '子创建2',
                    disabled: true,
                    click: i => {
                      this.handleCreat(i);
                    },
                  },
                ],
              },
              {
                title: '创建数据2',
                disabled: true,
                tips: '自定义禁用提示',
                click: i => {
                  this.handleDelete(i);
                },
              },
            ],
            children: [
              {
                title: '研发中心大树底1111111111111111111111111111111',
                key: '0-0-0',
                isLeaf: true,
                slots: { icon: 'user' },
                scopedSlots: { title: 'dropdown' },
                operates: [
                  {
                    title: '创建子节点2',
                    click: i => {
                      this.handleCreat(i);
                    },
                  },
                  {
                    title: '删除子节点2',
                    click: i => {
                      this.handleDelete(i);
                    },
                  },
                ],
              },
              { title: '测试部', key: '0-0-1', isLeaf: false, slots: { icon: 'user' }, scopedSlots: { title: 'dropdown' } },
            ],
          },
        ]
          },
          methods: {
        handleCreat(item) {
          console.log(item);
        },
      },`,
      commonOperates: [
        {
          title: '全局方法1',
          click: i => {
            this.handleCreat(i);
          },
        },
        {
          title: '全局方法2',
          click: i => {
            this.handleDelete(i);
          },
        },
      ],
      treeData: [
        {
          title: '默认组织111166688888888888888888888888',
          key: '0-0',
          isLeaf: false,
          slots: { icon: 'smile' },
          scopedSlots: { title: 'dropdown' },
          operates: [
            {
              title: '创建数据',
              line: true,
              children: [
                {
                  title: '子创建1',
                  click: i => {
                    this.handleCreat(i);
                  },
                  disabled: true,
                  tips: '自定义提示',
                },
                {
                  title: '子创建2',
                  disabled: true,
                  click: i => {
                    this.handleCreat(i);
                  },
                },
              ],
            },
            {
              title: '创建数据2',
              disabled: true,
              tips: '自定义禁用提示',
              click: i => {
                this.handleDelete(i);
              },
            },
          ],
          children: [
            {
              title: '研发中心大树底1111111111111111111111111111111',
              key: '0-0-0',
              isLeaf: true,
              slots: { icon: 'user' },
              scopedSlots: { title: 'dropdown' },
              operates: [
                {
                  title: '创建子节点2',
                  click: i => {
                    this.handleCreat(i);
                  },
                },
                {
                  title: '删除子节点2',
                  click: i => {
                    this.handleDelete(i);
                  },
                },
              ],
            },
            { title: '测试部', key: '0-0-1', isLeaf: false, slots: { icon: 'user' }, scopedSlots: { title: 'dropdown' } },
          ],
        },
      ],
    };
  },
  methods: {
    handleCreat(item) {
      console.log(item);
    },
  },
};
</script>
