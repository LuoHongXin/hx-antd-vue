<template>
  <JsonViewer class="y-json-viewer" v-on="$listeners" v-bind="$attrs" />
</template>
<script>
import JsonViewer from 'vue-json-viewer';
export default {
  name: 'YJsonViewer',
  components: {
    JsonViewer,
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
};
</script>
