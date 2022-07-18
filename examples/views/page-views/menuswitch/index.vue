<template>
  <div class="menu-container">
    <div class="menu-container-sidebar">
      <y-model-menu
        title="访问控制"
        relevanTitle="关联功能"
        :relevanMenuData="relevanMenuData"
        :menuData="menuData"
        @click="modelMenuClick"
      />
    </div>
    <section class="menu-container-section">
      <tablePage />
    </section>
  </div>
</template>
<script>
import tablePage from '../tablePage';
export default {
  name: 'menuswitch',
  data() {
    return {
      menuData: [
        {
          title: '主机管理',
          key: '/aa',
          antIcon: 'windows',
        },
        {
          title: '存储管理',
          antIcon: 'ie',
          link: true,
        },
        {
          title: '对象用户管理超长的超长的',
          antIcon: 'chrome',
        },
        {
          title: '系统管理',
          icon: 'eyes_visible',
          link: true,
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
  components: { tablePage },
  methods: {
    modelMenuClick({ item, key, keyPath }) {
      console.log({ item, key, keyPath });
    },
  },
};
</script>
