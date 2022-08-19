<template>
  <a-alert class="y-alert" v-on="$listeners" v-bind="$attrs">
    <slot />
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-alert>
</template>
<script>
export default {
  name: 'YAlert',
};
</script>
