<template>
  <a-spin class="y-loading" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-spin>
</template>

<script>
export default {
  name: 'YLoading',
};
</script>

<style lang="less"></style>
