<template>
  <a-popconfirm v-on="$listeners" v-bind="$attrs" class="y-popconfirm">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
    <a-icon v-if="!$slots.icon" type="question-circle" :style="{ color: colorVariables.yColorInfo }" slot="icon" theme="filled" />
  </a-popconfirm>
</template>
<script>
import colorVariables from '../../../src/styles/variables/index.less';
export default {
  name: 'YPopconfirm',
  inheritAttrs: false,
  data() {
    return {
      colorVariables,
    };
  },
};
</script>
