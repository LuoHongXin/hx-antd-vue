<template>
  <a-dropdown v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-dropdown>
</template>

<script>
export default {
  name: 'YDropdown',
};
</script>
