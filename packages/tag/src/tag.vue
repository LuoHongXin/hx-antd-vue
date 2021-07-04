<template>
  <a-tag :color="color" class="y-tag">
    <slot></slot>
  </a-tag>
</template>



<script>
// 根据状态所代表的含义，使用不同的状态标签：
// 1、代表成功：绿色green；
// 2、代表进行中，正常状态：极客蓝geekblue；
// 3、代表错误、失败：红色red；
// 4、代表警示、提示：默认金色 gold（当有两个状态都代表警示时，更严重的警示用日暮volcano，次警示用金色gold ）；

export default {
  name: 'YTag',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
@import '~/src/styles/components/tag.less';
</style>