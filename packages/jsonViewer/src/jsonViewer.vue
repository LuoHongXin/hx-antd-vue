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
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-json-viewer {
  &.jv-container {
    &.jv-light {
      background-color: @y-color-fill-bg-gray;
      border-radius: @y-radius-default;
    }
    .jv-code {
      padding: @y-spacing-m;
    }
  }
}
</style>
