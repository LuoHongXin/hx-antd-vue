<template>
  <div>
    <funTitleDetail
      title="带图标、提示框、操作栏、异步加载用法"
      detail="通过slot插槽方式,slot名字与数据源节点的slots: { icon: 'smile' },icon里的值一致则渲染对应图标内容。"
    ></funTitleDetail>
    <div style="width:300px">
      <!-- 组件展示 -->
      <h3 class="fun-title">大尺寸</h3>
      <p>check模式</p>
      <y-custom-tree
        checkable
        v-model="aa"
        nodeHeightSize="s"
        @select="handleSelect"
        :default-expanded-keys="['0-0', '0-0-0']"
        :treeData="treeData"
        :operates="commonOperates"
        :load-data="onLoadData"
      >
        <template slot="smile">
          <y-svg-icon icon-class="eyes_visible" style="width:16px;height:16px" />
        </template>
        <a-icon slot="user" type="user" style="width:16px;height:16px" />
      </y-custom-tree>
      <p>普通模式</p>
      <y-custom-tree @select="handleSelect" :default-expanded-keys="['0-0', '0-0-0']" :treeData="treeData" :operates="commonOperates">
        <a-icon slot="smile" type="smile" style="width:16px;height:16px" />
        <a-icon slot="user" type="user" style="width:16px;height:16px" />
      </y-custom-tree>
      <h3 class="fun-title">小尺寸</h3>
      <y-custom-tree
        :default-expanded-keys="['0-0', '0-0-0']"
        :treeData="treeData2"
        :operates="commonOperates"
        :load-data="onLoadData"
        :operateTriggerMethod="['hover']"
        operatePlacement="topRight"
        :showTooltip="false"
      >
        <a-icon slot="smile" type="smile" style="width:16px;height:16px" />
        <a-icon slot="user" type="user" style="width:16px;height:16px" />
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
  name: 'myTree2',
  data() {
    return {
      aa: ['0-0-0'],
      html: `
      <div style="width:300px">
      <!-- 组件展示 -->
       <h3 class="fun-title">大尺寸</h3>
       <y-custom-tree
          checkable
          v-model="aa"
           nodeHeightSize="s"
          @select="handleSelect"
          :default-expanded-keys="['0-0', '0-0-0']"
          :treeData="treeData"
          :operates="commonOperates"
          :load-data="onLoadData"
        >
        <a-icon slot="smile" type="smile" />
        <a-icon slot="user" type="user" />
      </y-custom-tree>
      <y-custom-tree
        @select="handleSelect"
        :default-expanded-keys="['0-0', '0-0-0']"
        :treeData="treeData"
        :operates="commonOperates"
        :load-data="onLoadData"
      >
        <template slot="smile">
          <y-svg-icon icon-class="eyes_visible" style="width:14px;height:14px" />
        </template>
        <a-icon slot="user" type="user" />
      </y-custom-tree>
      <h3 class="fun-title">小尺寸</h3>
      <y-custom-tree
        @select="handleSelect"
        :default-expanded-keys="['0-0', '0-0-0']"
        :treeData="treeData"
        :operates="commonOperates"
        :load-data="onLoadData"
        :operateTriggerMethod="['hover']"
        operatePlacement="topRight"
        :showTooltip="false"
        nodeHeightSize="m"
      >
        <a-icon slot="smile" type="smile" />
        <a-icon slot="user" type="user" />
      </y-custom-tree>
      </div>`,
      js: `
       export default {
        name: 'MyCustomTree',
        data() {
          return {
            aa: ['0-0-0'],
            commonOperates: [
              {
                title: '全局方法1',
                click: i => {
                  // console.log(i, '点击了创建');
                  this.handleCreat(i);
                },
              },
              {
                title: '全局方法2',
                click: i => {
                  this.handleDelete(i);
                  // console.log(i, '点击了删除');
                },
              },
            ],
            treeData: [
              {
                title: '默认组织111166666666666666666666666666666666666',
                key: '0-0',
                isLeaf: false,
                slots: { icon: 'smile' },
                scopedSlots: { title: 'dropdown' },
                operates: [
                  {
                    title: '创建',
                    click: i => {
                      // console.log(i, '点击了创建');
                      this.handleCreat(i);
                    },
                  },
                  {
                    title: '删除',
                    click: i => {
                      this.handleDelete(i);
                      // console.log(i, '点击了创建');
                    },
                  },
                ],
                children: [
                  {
                    title: '研发中心大树底',
                    key: '0-0-0',
                    isLeaf: true,
                    slots: { icon: 'user' },
                    scopedSlots: { title: 'dropdown' },
                    operates: [
                      {
                        title: '创建子节点2',
                        click: i => {
                          // console.log(i, '点击了创建');
                          this.handleCreat(i);
                        },
                      },
                      {
                        title: '删除子节点2',
                        click: i => {
                          this.handleDelete(i);
                          // console.log(i, '点击了创建');
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
          handleSelect(selectedKeys, info) {
            console.log(selectedKeys, info, '选择了树节点');
          },
          //点击删除创建可以获取对应的节点信息
          handleDelete(i) {
            console.log('点击了删除', i);
          },
          handleCreat(i) {
            console.log('点击了创建', i);
          },
          //异步加载的时候需要添加 isLeaf属性  isLeaf为true则代表为最后一层无法继续展开 isLeaf为false则代表是还可以继续展开
          //如果是异步数据加这个方法进行加载
          onLoadData(treeNode) {
            return new Promise(resolve => {
              if (treeNode.dataRef.children) {
                resolve();
                return;
              }
              //这里发异步请求 把setTimeout改成api请求 把请求回来的数据赋值给treeNode.dataRef.children
              setTimeout(() => {
                let asyncArray = [
                  {
                    title: '测试部1231',
                    key: new Date().getTime(),
                    // isLeaf: true,
                    slots: { icon: 'smile' },
                    scopedSlots: { title: 'dropdown' },
                  },
                ];
                this.$set(treeNode.dataRef, 'children', asyncArray);
                resolve();
              }, 5000);
            });
          },
        },
      };
      `,
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
          title: '默认组织1111666888888888888',
          key: '0-0',
          isLeaf: false,
          disabled: true,
          slots: { icon: 'smile' },
          scopedSlots: { title: 'dropdown' },
          operates: [
            {
              title: '创建',
              click: i => {
                this.handleCreat(i);
              },
            },
            {
              title: '删除',
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
      treeData2: [
        {
          title: '默认组织1111666888888888888',
          key: '0-0',
          isLeaf: false,
          slots: { icon: 'smile' },
          operates: [
            {
              title: '创建',
              click: i => {
                this.handleCreat(i);
              },
            },
            {
              title: '删除',
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
    handleSelect(selectedKeys, info) {
      console.log(selectedKeys, info, '选择了树节点');
    },
    //异步加载的时候需要添加 isLeaf属性  isLeaf为true则代表为最后一层无法继续展开 isLeaf为false则代表是还可以继续展开isLeaf为false且该节点没有children属性则执行异步
    //如果是异步数据加这个方法进行加载
    onLoadData(treeNode) {
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        //这里发异步请求 把setTimeout改成api请求 这里需要通过this.$set响应式更改数据源
        setTimeout(() => {
          let asyncArray = [
            {
              title: '测试部1231',
              key: new Date().getTime(),
              // isLeaf: true,
              slots: { icon: 'smile' },
              scopedSlots: { title: 'dropdown' },
            },
          ];
          this.$set(treeNode.dataRef, 'children', asyncArray);
          resolve();
        }, 5000);
      });
    },
    handleCreat(item) {
      console.log(item);
    },
  },
};
</script>
