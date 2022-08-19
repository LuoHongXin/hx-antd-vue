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
      get({ status, $attrs, strokeColor }) {
        let color = colorVariables.yColorInfo;
        switch (status) {
          case 'success':
            color = colorVariables.yColorSuccess;
            break;
          case 'exception':
            color = colorVariables.yColorPrimary;
            break;
        }
        if ($attrs && $attrs.percent === 100) {
          color = colorVariables.yColorSuccess;
        }
        return strokeColor ? strokeColor : color;
      },
    },
    status2: {
      get({ $attrs, status }) {
        if ($attrs && $attrs.percent === 100) {
          return 'success';
        }
        return status ? status : 'normal';
      },
    },
  },
};
</script>
