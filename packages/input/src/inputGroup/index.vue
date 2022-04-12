<template>
  <a-input-group v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-input-group>
</template>
<script>
export default {
  name: 'YInputGroup',
};
</script>
