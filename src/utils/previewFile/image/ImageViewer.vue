<template>
  <Viewer :images="images" style="height: 800px;">
    <img v-for="item in images" alt="图片" :src="item.src" :key="item.index" class="image" />
  </Viewer>
</template>

<script>
import 'viewerjs/dist/viewer.css';
import { component as Viewer } from 'v-viewer';
export default {
  name: 'ImageViewer',
  props: {
    image: String,
  },
  components: { Viewer },
  computed: {
    images() {
      return this.image ? [{ src: this.image }] : [];
    },
  },
};
</script>

<style scoped>
.image {
  display: block;
  width: auto;
  height: 100%;
  margin: 0 auto;
}
</style>
