<template>
  <a-popover v-on="$listeners" v-bind="$attrs" class="y-popover">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-popover>
</template>
<script>
export default {
  name: 'YPopover',
  inheritAttrs: false,
};
</script>
