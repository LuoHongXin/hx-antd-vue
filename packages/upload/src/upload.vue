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
