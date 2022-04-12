<template>
  <a-progress class="y-progress" :status="status2" :strokeColor="strokeColor2" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-progress>
</template>
<script>
import colorVariables from '@src/styles/variables/index.less';
export default {
  name: 'YProgress',
  props: {
    status: {
      type: String,
      default: null,
    },
    strokeColor: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    strokeColor2: {
      get() {
        let color = colorVariables.yColorInfo;
        switch (this.status) {
          case 'success':
            color = colorVariables.yColorSuccess;
            break;
          case 'exception':
            color = colorVariables.yColorPrimary;
            break;
        }
        if (this.$attrs && this.$attrs.percent === 100) {
          color = colorVariables.yColorSuccess;
        }
        return this.strokeColor ? this.strokeColor : color;
      },
    },
    status2: {
      get() {
        let status = 'normal';
        if (this.$attrs && this.$attrs.percent === 100) {
          return (status = 'success');
        }
        return this.status ? this.status : status;
      },
    },
  },
};
</script>
<style lang="less"></style>
