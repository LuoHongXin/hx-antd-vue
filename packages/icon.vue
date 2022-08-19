<template>
  <svg class="g-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import './svg';
export default {
  name: 'gIcon',
  props: ['name'],
};
</script>
