<template>
  <div><demo :start="start" /></div>
</template>

<script>
import demo from '@/components/demo';
export default {
  components: {
    demo,
  },
  data() {
    return {
      start: 140,
    };
  },
};
</script>