<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="y-svg-external-icon y-svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '../../../src/utils/validate';

export default {
  name: 'YSvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    isExternal({ iconClass }) {
      return isExternal(iconClass);
    },
    iconName({ iconClass }) {
      return `#icon-${iconClass}`;
    },
    svgClass({ className }) {
      if (className) {
        return 'y-svg-icon-' + className + ' y-icon';
      } else {
        return 'y-svg-icon y-icon';
      }
    },
    styleExternalIcon({ iconClass }) {
      return {
        mask: `url(${iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`,
      };
    },
  },
};
</script>
