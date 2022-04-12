<template>
  <span :class="classActive" :style="{ marginRight: radius }" @mouseenter="classHover = true" @mouseleave="classHover = false">
    <a-radio :value="value" v-if="radio" :disabled="disabled" />
    <a-radio-button class="y-radio-content" :value="value" :disabled="disabled" :style="radio ? '' : `padding: 5px 16px`">
      <span class="y-radio-title">
        <slot />
      </span>
      <div class="y-radio-content-content" v-if="radio">
        <slot name="content" />
      </div>
    </a-radio-button>
  </span>
</template>

<script>
export default {
  name: 'YRadioContent',
  inject: {
    YRadioGroup: {
      default: '',
    },
    radio: {
      default: true,
    },
  },
  props: {
    value: {
      type: null,
    },
    borderRadius: {
      type: [String, Number],
      default: 8,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classHover: false,
    };
  },
  computed: {
    radius() {
      let borderRadius = this.borderRadius;
      if (!borderRadius) return 0;
      return borderRadius + 'px';
    },
    classActive() {
      let disabled = this.disabled;
      let classHover = this.classHover;
      if (disabled) return 'y-radio-content-box y-radio-group-disabled';
      if (classHover) return 'y-radio-content-box y-radio-content-hover';
      return 'y-radio-content-box';
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/radioContent.less';
</style>
