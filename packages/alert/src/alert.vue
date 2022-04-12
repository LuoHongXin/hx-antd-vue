<template>
  <a-alert class="y-alert" v-on="$listeners" v-bind="$attrs">
    <slot />
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-alert>
</template>
<script>
export default {
  name: 'YAlert',
};
</script>
<style lang="less">
.y-alert {
  .y-btn {
    height: 22px;
    line-height: 22px;
    padding: 0 @y-spacing-xs;
  }
  &.ant-alert.ant-alert-closable {
    padding-right: 64px;
  }
  &.ant-alert-with-description {
    .ant-alert-message {
      color: @y-color-text-primary;
      font-weight: @y-font-weight-medium;
    }
    .ant-alert-description {
      color: @y-color-text-secondary;
      font-weight: @y-font-weight-regular;
    }
  }
}
.ant-alert-info {
  background-color: @y-color-info-light;
  border: 1px solid @y-color-info-border;
  .ant-alert-icon {
    color: @y-color-info;
  }
}
.ant-alert-error {
  background-color: @y-color-primary-light;
  border: 1px solid @y-color-primary-border;
}
</style>
