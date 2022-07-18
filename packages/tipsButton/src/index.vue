<template>
  <div style="display:inline-block" class="tips-btn">
    <a-tooltip v-if="tooltip" :placement="placement" :getPopupContainer="getPopupContainer">
      <template slot="title">
        <span>{{ title }}</span>
      </template>
      <span>
        <slot></slot>
      </span>
    </a-tooltip>
    <slot v-else></slot>
  </div>
</template>
<script>
export default {
  name: 'YTipsButton',
  props: {
    tooltip: {
      // 是否显示提示
      type: Boolean,
      default: function() {
        return true;
      },
    },
    placement: {
      // 提示位置
      type: String,
      default: function() {
        return 'bottom';
      },
    },
    title: {
      // 提示信息
      type: String,
      default: function() {
        return '请先选择数据';
      },
    },
    getPopupContainer: {
      type: Function,
      // default: triggerNode => triggerNode || document.body,
      default: () => document.body,
    },
  },
};
</script>
