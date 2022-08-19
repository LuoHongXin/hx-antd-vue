<template>
  <y-tooltip placement="left">
    <template slot="title">
      <span>{{ title }}</span>
    </template>
    <div :class="`y-column-check-select-item ${$attrs.disabled ? 'disabled' : 'y-column-check-select-item-drag'}`">
      <y-svg-icon icon-class="dragLine" class-name="line" />
      <span>{{ title }}</span>
      <y-svg-icon @click="$emit('close', $attrs.value)" v-if="!$attrs.disabled" icon-class="close-icon" class-name="close" />
    </div>
  </y-tooltip>
</template>
<script>
export default {
  name: 'YColumnCheckSelectItem',
  props: {
    title: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>
