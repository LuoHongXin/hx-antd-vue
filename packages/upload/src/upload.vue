<template>
  <a-upload class="y-upload" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-upload>
</template>
<script>
export default {
  name: 'YUpload',
};
</script>
<style lang="less">
.y-upload {
  .ant-upload-list-item-name {
    color: #454852;
  }
}
</style>
