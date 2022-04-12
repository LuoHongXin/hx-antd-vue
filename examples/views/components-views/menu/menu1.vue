<template>
  <div>
    <funTitleDetail title="内嵌菜单" detail="垂直菜单，子菜单内嵌在菜单区域。"></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <a-menu mode="inline" style="width: 200px" @click="handleClick">
        <template v-for="item in menuData">
          <a-sub-menu v-if="item.children" :key="item.title" @titleClick="titleClick">
            <span slot="title"><a-icon :type="item.icon" />{{ item.title }}</span>
            <a-menu-item :key="child.title" v-for="child in item.children">
              {{ child.title }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="item.title"> <a-icon :type="item.icon" />{{ item.title }}</a-menu-item>
        </template>
      </a-menu>
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="html">
        </code>
        <code class="language-JavaScript">
        export default {
            data() {
                return {
                    menuData: [
                      {
                        title: '首页',
                        icon: 'android',
                      },
                      {
                        title: '主机管理',
                        icon: 'apple',
                      },
                      {
                        title: '对象用户管理',
                        icon: 'windows',
                      },
                      {
                        title: '系统管理',
                        icon: 'ie',
                      },
                      {
                        title: '弹性伸缩',
                        icon: 'chrome',
                        children: [{ title: '菜单项名称1' }, { title: '菜单项名称2' }, { title: '菜单项名称3' }],
                      },
                      {
                        title: '弹性伸缩2',
                        icon: 'github',
                        children: [{ title: '菜单项名称21' }, { title: '菜单项名称22' }, { title: '菜单项名称23' }],
                      },
                    ],
                }
            },
            methods: {
                handleClick(e) {
                  console.log('click', e);
                },
                titleClick(e) {
                  console.log('titleClick', e);
                },
            },
        }
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'myMenu1',
  data() {
    return {
      html: `<a-menu mode="inline" style="width: 200px" @click="handleClick">
        <template v-for="item in menuData">
          <a-sub-menu v-if="item.children" :key="item.title" @titleClick="titleClick">
            <span slot="title"><a-icon :type="item.icon" />{{ item.title }}</span>
            <a-menu-item :key="child.title" v-for="child in item.children">
              {{ child.title }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="item.title"> <a-icon :type="item.icon" />{{ item.title }}</a-menu-item>
        </template>
      </a-menu>`,
      menuData: [
        {
          title: '首页',
          icon: 'android',
        },
        {
          title: '主机管理',
          icon: 'apple',
        },
        {
          title: '对象用户管理',
          icon: 'windows',
        },
        {
          title: '系统管理',
          icon: 'ie',
        },
        {
          title: '弹性伸缩',
          icon: 'chrome',
          children: [{ title: '菜单项名称1' }, { title: '菜单项名称2' }, { title: '菜单项名称3' }],
        },
        {
          title: '弹性伸缩2',
          icon: 'github',
          children: [{ title: '菜单项名称21' }, { title: '菜单项名称22' }, { title: '菜单项名称23' }],
        },
      ],
    };
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
