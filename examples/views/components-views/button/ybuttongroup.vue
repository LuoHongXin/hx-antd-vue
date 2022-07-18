<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="操作按钮" detail="表头或页头等一些地方的操作按钮" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="基本用法" detail=""></funTitleDetail>
    <com-show>
      <y-button-group :buttonList="buttonList"></y-button-group>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="html1">
        </code>
        <code class="language-javascript" v-text="js">
        </code>
    </pre>
    <funTitleDetail title="倒转" detail="常用于页头右侧操作按钮"></funTitleDetail>
    <com-show>
      <y-button-group reversed :buttonList="buttonList"></y-button-group>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
    </pre>
    <funTitleDetail title="ellipsis 类型" detail="常用于页头右侧操作按钮"></funTitleDetail>
    <com-show>
      <y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html3">
        </code>
    </pre>
    <funTitleDetail title="自定义下拉菜单" detail="常用于多层级菜单情况，多层级的按钮选项尽量放入更多中，通过菜单去显示"></funTitleDetail>
    <com-show>
      <y-button-group reversed omitType="ellipsis" :buttonList="subButtonList">
        <y-menu slot="dropdown" slot-scope="{ menuData }">
          <template v-for="item in menuData">
            <y-menu-item :key="item.text" v-if="!item.children">
              <span>{{ item.text }}</span>
            </y-menu-item>
            <y-sub-menu :key="item.text" v-else>
              <span slot="title"
                ><span>{{ item.text }}</span></span
              >
              <y-menu-item v-for="child in item.children" :key="child.text">
                {{ child.text }}
              </y-menu-item>
            </y-sub-menu>
          </template>
        </y-menu>
      </y-button-group>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html4">
        </code>
        <code class="language-javascript" v-text="js2">
        </code>
    </pre>
    <api-table :data="tableData2"></api-table>
    <api-table title="buttonList数组中对象属性" :data="tableData3"></api-table>
  </div>
</template>
<script>
export default {
  name: 'ybtngroupviews',
  data() {
    return {
      html1: `<y-button-group :buttonList="buttonList"></y-button-group>`,
      html2: `<y-button-group reversed :buttonList="buttonList"></y-button-group>`,
      html3: `<y-button-group reversed omitType="ellipsis" :buttonList="buttonList"></y-button-group>`,
      html4: `<y-button-group reversed omitType="ellipsis" :buttonList="subButtonList">
        <y-menu slot="dropdown" slot-scope="{ menuData }">
          <template v-for="item in menuData">
            <y-menu-item :key="item.text" v-if="!item.children">
              <span>{{ item.text }}</span>
            </y-menu-item>
            <y-sub-menu :key="item.text" v-else>
              <span slot="title"
                ><span>{{ item.text }}</span></span
              >
              <y-menu-item v-for="child in item.children" :key="child.text">
                {{ child.text }}
              </y-menu-item>
            </y-sub-menu>
          </template>
        </y-menu>
      </y-button-group>`,
      js: `export default {
          data() {
            return {
              buttonList: [
                {
                    text: '新增',
                    tips: {
                        text: '数据添加',
                        placement: 'left',
                    },
                    type: 'primary',
                    icon: 'plus',
                    click: () => {
                        this.action('新增');
                    },
                },
                {
                    text: '修改',
                    click: () => {
                        this.action('修改');
                    },
                    tips: '请先选择数据',
                    disable: true,
                },
                {
                    text: '复制',
                    click: () => {
                        this.action('复制');
                    },
                },
                {
                    text: '粘贴操作操作操作',
                },
                {
                    text: '删除',
                    tips: '危险操作',
                    click: () => {
                        this.action('删除');
                    },
                    disable: true,
                },
                ]
            };
          },
          methods: {
            add() {
              alert('新增');
            },
            action(val) {
              alert(val);
            },
          }
        };`,
      js2: `export default {
          data() {
            return {
              subButtonList: [
                {
                  text: '新增',
                  tips: {
                    text: '数据添加',
                    placement: 'left',
                  },
                  type: 'primary',
                  icon: 'plus',
                  click: () => {
                    this.action('新增');
                  },
                },
                {
                  text: '修改',
                  click: () => {
                    this.action('修改');
                  },
                  tips: '请先选择数据',
                  disable: true,
                },
                {
                  text: '复制',
                  click: () => {
                    this.action('复制');
                  },
                },
                {
                  text: '粘贴操作操作操作',
                  children: [
                    {
                      text: '粘贴操作1',
                    },
                    {
                      text: '粘贴操作2',
                    },
                  ],
                },
                {
                  text: '删除',
                  tips: '危险操作',
                  click: () => {
                    this.action('删除');
                  },
                  disable: true,
                },
              ],
            };
          },
          methods: {
            add() {
              alert('新增');
            },
            action(val) {
              alert(val);
            },
          }
        };`,

      buttonList: [
        {
          text: '新增',
          tips: {
            text: '数据添加',
            placement: 'left',
          },
          type: 'primary',
          icon: 'plus',
          click: () => {
            this.action('新增');
          },
        },
        {
          text: '修改',
          click: () => {
            this.action('修改');
          },
          tips: '请先选择数据',
          disable: true,
        },
        {
          text: '复制',
          click: () => {
            this.action('复制');
          },
        },
        {
          text: '粘贴操作操作操作',
        },
        {
          text: '删除',
          tips: '危险操作',
          click: () => {
            this.action('删除');
          },
          disable: true,
        },
      ],
      subButtonList: [
        {
          text: '新增',
          tips: {
            text: '数据添加',
            placement: 'left',
          },
          type: 'primary',
          icon: 'plus',
          click: () => {
            this.action('新增');
          },
        },
        {
          text: '修改',
          click: () => {
            this.action('修改');
          },
          tips: '请先选择数据',
          disable: true,
        },
        {
          text: '复制',
          click: () => {
            this.action('复制');
          },
        },
        {
          text: '粘贴操作操作操作',
          children: [
            {
              text: '粘贴操作1',
            },
            {
              text: '粘贴操作2',
            },
          ],
        },
        {
          text: '删除',
          tips: '危险操作',
          click: () => {
            this.action('删除');
          },
          disable: true,
        },
      ],

      tableData2: [
        {
          params: 'buttonList',
          explain: '详情查看【buttonList数组中对象属性】',
          type: 'Array',
          default: '[]',
        },
        { params: 'moreBtnNum', explain: '显示第几个就采用更多收起', type: 'Number', default: '3' },
        { params: 'moreText', explain: '更多按钮显示的文字', type: 'String', default: '更多' },
        {
          params: 'omitType',
          explain: '更多按钮的设计类型，目前只有两种，一种 default 默认，一种 ellipsis 省略',
          type: 'String',
          default: 'default',
        },
        { params: 'reversed', explain: '是否倒转', type: 'Boolean', default: 'false' },
        {
          params: 'moreBtnTrigger',
          explain: '触发更多按钮展开的事件类型，有 click | hover | contextmenu',
          type: 'Array',
          default: '[hover]',
        },
      ],
      tableData3: [
        {
          params: 'text',
          explain: '按钮文字',
          type: 'String',
          default: '',
        },
        {
          params: 'click',
          explain: '按钮点击事件',
          type: 'Function',
          default: '',
        },
        {
          params: 'disabled',
          explain: '按钮是否禁用',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'show',
          explain: '按钮的显示隐藏',
          type: 'Boolean',
          default: 'true',
        },
        {
          params: 'tips',
          explain:
            '提示信息，若为字符串，则默认显示top位置；若为对象可根据对象中的placement（可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom）属性修改位置，text属性为字符串',
          type: 'String|Object',
          default: '',
        },
        {
          params: 'icon',
          explain: '图标',
          type: 'String',
          default: '',
        },
        {
          params: 'type',
          explain: '按钮类型',
          type: '可选值为 primary dashed danger link 或者不设',
          default: 'default',
        },
      ],
    };
  },
  methods: {
    action(val) {
      alert(val);
    },
  },
};
</script>
