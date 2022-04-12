<template>
  <a-tabs class="y-tabs" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </a-tabs>
</template>
<script>
export default {
  name: 'YTabs',
};
</script>

<style lang="less">
// @import '~/src/styles/components/tag.less';
.y-tabs {
  // default
  .ant-tabs-nav {
    .ant-tabs-tab {
      padding: 0;
      line-height: @y-height-l;
    }
  }
  // small
  .ant-tabs-small-bar {
    .ant-tabs-nav {
      .ant-tabs-tab {
        line-height: @y-height-m;
      }
    }
  }
  .ant-tabs-left-bar,
  .ant-tabs-right-bar {
    .ant-tabs-tab {
      padding: 0px @y-spacing-m;
    }
  }
}
</style>
