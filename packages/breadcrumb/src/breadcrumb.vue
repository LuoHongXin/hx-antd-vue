<template>
  <div class="y-breadcrumb-container">
    <div class="back-btn" v-if="back" @click="goBack">
      <a-icon type="left" />
      <span>{{ $wci18n.t('wh.breadcrumb.back') }}</span>
    </div>
    <a-breadcrumb class="y-breadcrumb" :separator="separator">
      <a-breadcrumb-item v-for="(item, index) in levelList2" :key="item.path">
        <template v-if="item.isEllips">
          <span @click="ellips = false">...</span>
        </template>
        <template v-else>
          <template v-if="item.meta.redirect === 'noRedirect' || index == levelList2.length - 1">
            <a-icon :type="item.meta.antIcon" v-if="item.meta.antIcon" class="no-redirect" />
            <span class="no-redirect">{{ translate(item.meta.title) }}</span>
          </template>
          <template v-else>
            <a-icon :type="item.meta.antIcon" v-if="item.meta.antIcon" />
            <span @click.prevent="handleLink(item)">{{ translate(item.meta.title) }}</span>
          </template>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
import * as pathToRegexp from 'path-to-regexp';
export default {
  name: 'YBreadcrumb',
  data() {
    return {
      levelList: null,
      ellips: false,
    };
  },
  props: {
    separator: {
      type: String,
      default: function() {
        return '/';
      },
    },
    // 自定义面包屑数据
    data: {
      type: Array,
      default: function() {
        return null;
      },
    },
    // 超出指定数量显示省略
    ellipsNum: {
      type: Number,
      default: function() {
        return 5;
      },
    },
    // 是否显示返回按钮
    back: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
  },
  computed: {
    levelList2: function() {
      const levelList = [...this.levelList];
      if (this.ellips && levelList.length > this.ellipsNum - 1) {
        // 需省略时，只有前面两个和后面两个显示
        let showIndex = [0, levelList.length - 1, levelList.length - 2];
        let newLevelList = this.levelList.filter((i, index) => showIndex.includes(index));
        newLevelList.splice(1, 0, { isEllips: true });
        return newLevelList;
      }
      return levelList;
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    goBack() {
      let backObj = this.levelList.slice(-2, -1) && this.levelList.slice(-2, -1)[0]; //倒数第二个的路由
      if (backObj) {
        this.handleLink(backObj);
      } else {
        this.$router.back();
      }
    },
    // 根据所在应用的国际化进行翻译
    translate(str) {
      if (window.app && window.app.$t) {
        return window.app.$t(str);
      }
      return str;
    },
    getBreadcrumb() {
      if (this.data) {
        this.levelList = this.data;
      } else {
        // only show routes with meta.title
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
        // const first = matched[0];
        // if (!this.isDashboard(first)) {
        //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched);
        // }

        this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
      }
      if (this.levelList.length > this.ellipsNum - 1) {
        this.ellips = true;
      }
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path, meta } = item;
      if (meta.redirect) {
        this.$router.push(meta.redirect);
        return;
      }
      if (redirect && redirect.slice(0, 1) === '/') {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="less">
@import '~/src/styles/components/breadcrumb.less';
</style>
