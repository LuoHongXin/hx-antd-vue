<template>
  <div>
    <funTitleDetail title="通用菜单" detail="基于基础菜单进行封装，常用于子应用的菜单。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <div style="width: 200px">
        <y-model-menu :menuData="menuData" @click="modelMenuClick">
          <template slot="title">
            <y-search-select autoWidth placeholder="请选择账号" inputPlaceholder="请输入账号名" @ok="ok" okText="222" />
          </template>
        </y-model-menu>
      </div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript">
        export default {
          data() {
            return {
              collapsed: false,
              menuData: [
                  {
                    title: '主机管理',
                    key: 'aa',
                    antIcon: 'windows',
                  },
                  {
                    title: '存储管理',
                    key: 'bb',
                    antIcon: 'ie',
                    link: true,
                  },
                  {
                    title: '对象用户管理超长的超长的',
                    antIcon: 'chrome',
                  },
                  {
                    title: '系统管理',
                    key: 'dd',
                    icon: 'eyes_visible',
                    link: true,
                  },
                  {
                    title: '弹性伸缩1超长的超长的',
                    key: 'qq',
                    icon: 'eyes_visible',
                    children: [
                      {
                        title: '对象用户管理1',
                        key: 'cc',
                        link: true,
                      },
                      {
                        title: '系统管理1',
                        antIcon: 'weibo',
                      },
                    ],
                  },
                  {
                    title: '弹性伸缩2',
                    children: [
                      {
                        title: '超长的超长的对象用户管理2',
                        antIcon: 'qq',
                        link: true,
                      },
                      {
                        title: '系统管理2',
                      },
                    ],
                  },
                ],
            };
          },
          methods: {
            modelMenuClick({ item, key, keyPath }) {
              console.log({ item, key, keyPath });
            },
          },
        }
        </code>
    </pre>
    <!-- 组件展示 -->
    <com-show>
      <div style="width: 200px">
        <y-model-menu
          :menuData="menuData"
          title="访问控制"
          relevanTitle="关联功能"
          :relevanMenuData="relevanMenuData"
          @click="modelMenuClick"
        />
      </div>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html2">
        </code>
        <code class="language-JavaScript">
        export default {
          data() {
            return {
              collapsed: false,
              menuData: [
                {
                  title: '主机管理',
                  key: 'aa',
                  antIcon: 'windows',
                },
                {
                  title: '存储管理',
                  key: 'bb',
                  antIcon: 'ie',
                  link: true,
                },
                {
                  title: '对象用户管理超长的超长的',
                  antIcon: 'chrome',
                },
                {
                  title: '系统管理',
                  key: 'dd',
                  icon: 'eyes_visible',
                  link: true,
                },
                {
                  title: '弹性伸缩1超长的超长的',
                  key: 'qq',
                  icon: 'eyes_visible',
                  children: [
                    {
                      title: '对象用户管理1',
                      key: 'cc',
                      link: true,
                    },
                    {
                      title: '系统管理1',
                      antIcon: 'weibo',
                    },
                  ],
                },
                {
                  title: '弹性伸缩2',
                  children: [
                    {
                      title: '超长的超长的对象用户管理2',
                      antIcon: 'qq',
                      link: true,
                    },
                    {
                      title: '系统管理2',
                    },
                  ],
                },
              ],
              relevanMenuData: [
                  {
                    title: '系统设置',
                    key: '/aa',
                    antIcon: 'windows',
                    link: true,
                  },
                  {
                    title: 'VDC管理',
                    antIcon: 'ie',
                    link: true,
                  },
                  {
                    title: '业务系统',
                    antIcon: 'chrome',
                    link: true,
                  },
                  {
                    title: '系统管理',
                    icon: 'eyes_visible',
                    link: true,
                  },
                ],
            };
          },
          methods: {
            modelMenuClick({ item, key, keyPath }) {
              console.log({ item, key, keyPath });
            },
          },
        }
        </code>
    </pre>
    <api-table title="modelMenu API" :data="tableData"></api-table>
    <api-table title="menuData 和 relevanMenuData 菜单数据数组中的对象 API" :data="tableData2"></api-table>
  </div>
</template>
<script>
export default {
  name: 'myMenu2',
  data() {
    return {
      html: `<y-model-menu :menuData="menuData" @click="modelMenuClick">
        <template slot="title">
          <y-search-select autoWidth placeholder="请选择账号" inputPlaceholder="请输入账号名" @ok="ok" okText="222" />
        </template>
      </y-model-menu>`,
      html2: `<y-model-menu
          :menuData="menuData"
          title="访问控制"
          relevanTitle="关联功能"
          :relevanMenuData="relevanMenuData"
          @click="modelMenuClick"
        />`,
      collapsed: false,
      menuData: [
        {
          title: '主机管理',
          key: 'aa',
          antIcon: 'windows',
        },
        {
          title: '存储管理',
          key: 'bb',
          antIcon: 'ie',
          link: true,
        },
        {
          title: '对象用户管理超长的超长的',
          antIcon: 'chrome',
        },
        {
          title: '系统管理',
          key: 'dd',
          icon: 'eyes_visible',
          link: true,
        },
        {
          title: '弹性伸缩1超长的超长的',
          key: 'qq',
          icon: 'eyes_visible',
          children: [
            {
              title: '对象用户管理1',
              key: 'cc',
              link: true,
            },
            {
              title: '系统管理1',
              antIcon: 'weibo',
            },
          ],
        },
        {
          title: '弹性伸缩2',
          children: [
            {
              title: '超长的超长的对象用户管理2',
              antIcon: 'qq',
              link: true,
            },
            {
              title: '系统管理2',
            },
          ],
        },
      ],
      relevanMenuData: [
        {
          title: '系统设置',
          key: '/aa',
          antIcon: 'windows',
          link: true,
        },
        {
          title: 'VDC管理',
          antIcon: 'ie',
          link: true,
        },
        {
          title: '业务系统',
          antIcon: 'chrome',
          link: true,
        },
        {
          title: '系统管理',
          icon: 'eyes_visible',
          link: true,
        },
      ],
      tableData: [
        {
          params: 'menuData',
          explain: '菜单数据',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'relevanMenuData',
          explain: '下方副菜单数据',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'title',
          explain: '主菜单标题  插槽权重优先',
          type: 'String | slot',
          default: '',
        },
        {
          params: 'relevanTitle',
          explain: '副菜单标题',
          type: 'String',
          default: '',
        },
        {
          params: 'selectedKeys（v-model）',
          explain: '选中菜单的key数据，仅对主菜单有用',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'openKeys（.sync）',
          explain: '有子菜单的菜单展开key数据，仅对主菜单有用',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'collapsedClick',
          explain: '收起展开点击事件',
          type: 'function(collapsed)',
          default: '-',
        },
        {
          params: 'click',
          explain: '菜单点击事件',
          type: 'function({ item, key, keyPath })',
          default: '-',
        },
        {
          params: 'routerLight',
          explain:
            '是否自动根据路由高亮展开菜单，菜单数据menuData必须绑定key值，且key值为对应路由的name名称；根据子路由的命名规范，路由名称中包含对应菜单key也会是菜单高亮；也可以通过路由的 meta 设置 menuLightKey 对应菜单 key 高亮指定菜单',
          type: 'Boolean',
          default: 'false',
        },
      ],
      tableData2: [
        {
          params: 'title',
          explain: '菜单名称，没有key则用title作为key',
          type: 'String',
          default: '-',
        },
        {
          params: 'key',
          explain: '菜单的key值，若不设则默认用title作为key',
          type: 'String',
          default: '-',
        },
        {
          params: 'antIcon',
          explain: '使用antd的图标作为菜单图标',
          type: 'String',
          default: '-',
        },
        {
          params: 'link',
          explain: '是否需要在菜单选项右边带有链接跳转图标',
          type: 'Boolean',
          default: 'false',
        },
        {
          params: 'icon',
          explain: '使用自定义的y-svg-icon作为图标',
          type: 'String',
          default: '-',
        },
        {
          params: 'children',
          explain: '是否有子菜单，注意最多两层，children里面不能再有children',
          type: 'String',
          default: '-',
        },
      ],
    };
  },
  methods: {
    ok() {
      console.log(1);
    },
    modelMenuClick({ item, key, keyPath }) {
      console.log({ item, key, keyPath });
    },
  },
};
</script>
