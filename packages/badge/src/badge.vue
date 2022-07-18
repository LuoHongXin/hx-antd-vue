<template>
  <a-badge class="y-badge" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-badge>
</template>
<script>
export default {
  name: 'YBadge',
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-badge {
  .ant-badge-count {
    background: @y-color-primary;
  }
}
</style>
