<template>
  <div id="app" style="height: 100%">
    <a-layout style="height: 100%">
      <a-layout-sider style="height: 100%">
        <a-menu v-model="selectdRoute" mode="inline">
          <a-menu-item @click="routerLink(item)" v-for="item in routes" :key="item.name">{{ item.meta.title }}</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content style="padding: 10px 60px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      selectdRoute: [],
    };
  },
  watch: {
    $route: function (val) {
      this.selectdRoute = [val.name];
    },
  },
  created() {
    this.routes = this.$router.options.routes.filter((item) => {
      return item.meta && item.meta.title;
    }); // 有title的才作为菜单
    this.selectdRoute = [this.routes[0].name];
  },
  methods: {
    routerLink(route) {
      this.$router.push(route.path);
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  .ant-layout-sider {
    background: #fff;
    line-height: 120px;
  }
  .ant-layout-content {
    background: #fff;
  }
  .com-title {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
  }
  .com-text {
    text-align: left;
    font-size: 14px;
  }
  .fun-title {
    margin-top: 20px;
    text-align: left;
    font-size: 20px;
    font-weight: 550;
  }
  .fun-show {
    border: 1px solid #ebedf0;
    padding: 42px 24px 50px;
  }
  .fun-detail-title {
    text-align: left;
    font-size: 18px;
    color: #777;
  }
  .fun-detail-show {
    text-align: left;
    font-size: 14px;
    color: #314659;
    padding-bottom: 10px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
