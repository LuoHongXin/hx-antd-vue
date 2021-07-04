<template>
  <button class="y-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon" />
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="y-button-content">
      <slot />
    </div>
  </button>
</template>
<script>
/*
 * @Author: zhangbinzhbb
 * @Date: 2021-02-24 17:23:33
 * @Last Modified by: zhangbiaobin
 * @Last Modified time: 2021-02-24 17:23:33
 * 封装button
 */
import Icon from '../../icon';
export default {
  name: 'YButton',
  components: {
    'g-icon': Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import '~/src/styles/components/button.less';
</style>
