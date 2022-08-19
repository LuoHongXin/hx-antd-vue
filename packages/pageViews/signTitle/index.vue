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
