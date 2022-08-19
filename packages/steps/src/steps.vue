<template>
  <a-steps class="y-steps" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-steps>
</template>
<script>
export default {
  name: 'YSteps',
};
</script>
