<template>
  <div class="y-common-table-contanier">
    <div class="y-common-table-operator-group">
      <slot name="button"></slot>
    </div>
    <slot name="table"></slot>
  </div>
</template>

<script>
export default {
  name: 'YTableBox',
};
</script>

<style lang="less">
@import '~/src/styles/components/tableBox.less';
</style>
