<template>
  <div class="y-sign-title">
    <span class="sign"></span>
    <slot name="title" v-if="$slots.title" />
    <span v-else>{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'YSignTitle',
  props: {
    title: String,
  },
};
</script>
<style lang="less" scoped>
.y-sign-title {
  color: #1f2229;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  .sign {
    margin-right: 8px;
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 8px;
      background-color: #d93934;
    }
    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 8px;
      background-color: #3d3c3c;
    }
  }
}
</style>
