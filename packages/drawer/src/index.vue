<template>
  <a-drawer
    v-on="$listeners"
    v-bind="$attrs"
    :width="sizeWidth"
    :height="sizeHeight"
    :class="`y-drawer ${$slots.footer ? 'has-footer' : ''}`"
  >
    <!-- :body-style="{ paddingBottom: $slots.footer ? '53px' : '0', paddingTop: '47px' }" -->
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key" v-if="key !== 'footer'"></slot>
    </template>
    <div class="drawer-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </a-drawer>
</template>
<script>
import { sizeWidth, sizeHeight } from '../../dataMap.js';
export default {
  name: 'YDrawer',
  props: {
    size: {
      type: String,
      default: 'm',
    },
  },
  inheritAttrs: false,
  computed: {
    sizeWidth: {
      get() {
        return sizeWidth[this.size] || sizeWidth.m;
      },
    },
    sizeHeight: {
      get() {
        return sizeHeight[this.size] || sizeHeight.m;
      },
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-drawer {
  .ant-drawer-header {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
  }
  &.has-footer {
    .ant-drawer-content {
      .ant-drawer-wrapper-body {
        height: calc(100% - 100px);
        margin-bottom: 53px;
        margin-top: 47px;
      }
    }
  }
  .ant-drawer-content {
    .ant-drawer-wrapper-body {
      height: calc(100% - 47px);
      margin-top: 47px;
    }
    .ant-drawer-header {
      padding: @y-spacing-s @y-spacing-xl;
      .ant-drawer-close {
        height: 100%;
        line-height: 100%;
      }
    }
    .drawer-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #ebeef5;
      padding: @y-spacing-s @y-spacing-xl;
      left: 0;
      background: #fff;
      border-radius: 0 0 4px 4px;
      .y-btn {
        margin-left: @y-spacing-xs;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
