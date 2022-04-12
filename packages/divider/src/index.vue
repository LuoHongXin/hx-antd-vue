<template>
  <a-divider v-on="$listeners" v-bind="$attrs" class="y-divider">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-divider>
</template>
<script>
export default {
  name: 'YDivider',
};
</script>
<style lang="less">
.y-divider {
  margin: 16px 0;
}
</style>
