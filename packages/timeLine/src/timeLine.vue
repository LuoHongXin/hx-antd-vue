<template>
  <a-timeline v-on="$listeners" v-bind="$attrs" class="y-time-line">
    <slot></slot>
  </a-timeline>
</template>

<script>
export default {
  name: 'YTimeLine',
};
</script>

<style lang="less">
// @import '~/src/styles/components/tag.less';
.y-time-line {
  .ant-timeline-item-head-blue {
    color: @y-color-info;
    border-color: @y-color-info;
  }
  .ant-timeline-item-content {
    & > p {
      margin: @y-spacing-xxs 0px;
      font-size: @y-font-size-s;
      line-height: 20px;
    }
    .y-timeline-item-title {
      color: @y-color-text-primary;
      font-size: @y-font-size-m;
      line-height: 22px;
      font-weight: @y-font-weight-medium;
    }
    .y-timeline-item-time {
      color: @y-color-text-secondary;
    }
    .y-timeline-item-description {
      color: @y-color-text-regular;
    }
  }
}
</style>
