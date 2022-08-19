<template>
  <a-timeline v-on="$listeners" v-bind="$attrs" class="y-time-line">
    <slot></slot>
  </a-timeline>
</template>

<script>
export default {
  name: 'YTimeLine',
};
</script>
