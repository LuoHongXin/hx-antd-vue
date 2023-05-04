<template>
  <div>
    <Click />
    <Hover />
  </div>
</template>
<script>
import Click from './click.vue';
import Hover from './hover.vue';
export default {
  name: 'DragClassExample',
  components: {
    Click,
    Hover,
  },
};
</script>
