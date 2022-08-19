<template>
  <a-badge class="y-badge" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-badge>
</template>
<script>
export default {
  name: 'YBadge',
};
</script>
