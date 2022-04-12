<template>
  <div class="y-custom-date-picker">
    <a-button>近7天</a-button>
    <a-button>近30天</a-button>
    <div class="y-custom-date-picker-tinme">
      <a-button disabled>自定义</a-button>
      <a-range-picker />
    </div>
  </div>
</template>

<script>
export default {
  name: 'YCustomDatePicker',
};
</script>

<style lang="less">
@import '~/src/styles/components/customDatePicker.less';
</style>
