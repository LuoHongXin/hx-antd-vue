<template>
  <div>
    <ytag />
    <ylinktag />
  </div>
</template>
<script>
import ytag from './ytag.vue';
import ylinktag from './ylinktag.vue';
export default {
  name: 'tag',
  components: {
    ytag,
    ylinktag,
  },
};
</script>