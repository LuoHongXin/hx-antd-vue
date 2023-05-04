<template>
  <y-tooltip placement="left">
    <template slot="title">
      <span>{{ title }}</span>
    </template>
    <div :class="`y-column-check-select-item ${$attrs.disabled ? 'disabled' : 'y-column-check-select-item-drag'}`">
      <y-button icon-class="dragLine" class="no-bg icon-line" :disabled="$attrs.disabled" />
      <span>{{ title }}</span>
      <y-button icon-class="close-icon" @click="$emit('close', $attrs.value)" v-if="!$attrs.disabled" class="no-bg icon-close"></y-button>
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
