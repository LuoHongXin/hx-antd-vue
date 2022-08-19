<template>
  <transition name="fade">
    <div :class="classes" v-if="fullscreenVisible">
      <div :class="mainClasses">
        <span :class="dotClasses"></span>
        <div :class="textClasses"><slot></slot></div>
      </div>
    </div>
  </transition>
</template>
<script>
import { oneOf } from '../../../src/utils/assist';
import ScrollbarMixins from '../mixins-scrollbar';

const prefixCls = 'y-spin';

export default {
  name: 'YSpin',
  mixins: [ScrollbarMixins],
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default']);
      },
      default() {
        return 'default';
      },
    },
    fix: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showText: false,
      // used for $Spin
      visible: false,
    };
  },
  computed: {
    classes({ size, fix, showText, fullscreen }) {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${size}`]: !!size,
          [`${prefixCls}-fix`]: fix,
          [`${prefixCls}-show-text`]: showText,
          [`${prefixCls}-fullscreen`]: fullscreen,
        },
      ];
    },
    mainClasses() {
      return `${prefixCls}-main`;
    },
    dotClasses() {
      return `${prefixCls}-dot`;
    },
    textClasses() {
      return `${prefixCls}-text`;
    },
    fullscreenVisible({ fullscreen, visible }) {
      if (fullscreen) {
        return visible;
      } else {
        return true;
      }
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    },
  },
  mounted() {
    this.showText = this.$slots.default !== undefined;
  },
};
</script>
