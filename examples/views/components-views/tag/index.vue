<template>
  <div>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="标签">
        <myTag />
      </a-tab-pane>
      <a-tab-pane key="2" tab="可选中标签">
        <ylinktag />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import myTag from './myTag/index.vue';
import ylinktag from './ylinktag.vue';
export default {
  name: 'tag',
  components: {
    myTag,
    ylinktag,
  },
};
</script>
