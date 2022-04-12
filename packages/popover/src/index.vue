<template>
  <a-popover v-on="$listeners" v-bind="$attrs" class="y-popover">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-popover>
</template>
<script>
export default {
  name: 'YPopover',
};
</script>
<style lang="less">
.ant-popover-title {
  border-bottom: none;
  color: #454852;
  font-size: 14px;
  line-height: 22px;
  padding-top: 12px;
  padding-bottom: 0;
}
.ant-popover-title + .ant-popover-inner-content {
  padding-top: 8px;
}
.ant-popover-inner-content {
  padding: 16px;
}
</style>
