<template>
  <a-tabs class="y-tabs" v-on="$listeners" v-model="activeKey2" v-bind="$attrs">
    <slot></slot>
  </a-tabs>
</template>
<script>
export default {
  name: 'YTabs',
  model: {
    prop: 'activeKey',
    event: 'update-activeKey',
  },
  props: {
    activeKey: {
      type: [String, Number],
    },
    defaultActiveKey: {
      type: [String, Number],
    },
  },
  data() {
    return {
      activeKey3: this.activeKey || this.defaultActiveKey,
    };
  },
  computed: {
    activeKey2: {
      get() {
        return this.activeKey3;
      },
      set(val) {
        this.$emit('update-activeKey', val);
        this.activeKey3 = val;
      },
    },
  },
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
