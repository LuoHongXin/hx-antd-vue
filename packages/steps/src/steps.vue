<template>
  <a-steps class="y-steps" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-steps>
</template>
<script>
export default {
  name: 'YSteps',
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-steps {
  // 完成
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: @y-color-primary-border;
  }
  // 完成文字
  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: @y-color-text-regular;
  }
  // 正在处理文字
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: @y-color-text-primary;
    font-weight: 500;
  }
  // 执行错误标题
  .ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    font-weight: 500;
    .ant-steps-item-subtitle {
      color: @y-color-text-error;
    }
  }
  // 等待处理
  .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title,

    // 描述中的文字
  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
    color: @y-color-text-secondary;
  }
  // 正在处理的点状样式
  &.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,
  &.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {
    width: 8px;
    height: 8px;
    line-height: 8px;
  }
  // 白色的点
  &.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot {
    background-color: #fff;
    border: @y-border-width-default @y-border-style-default @y-color-primary;
  }
  &.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
    left: 0px;
  }
  &.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot,
  &.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot {
    top: 1px;
  }
}
</style>
