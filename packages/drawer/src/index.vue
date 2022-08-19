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
      get({ size }) {
        return sizeWidth[size] || sizeWidth.m;
      },
    },
    sizeHeight: {
      get({ size }) {
        return sizeHeight[size] || sizeHeight.m;
      },
    },
  },
};
</script>
