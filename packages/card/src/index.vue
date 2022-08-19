<template>
  <div :class="['y-card', titleBorderBottom ? '' : 'titleBorderBottom']">
    <a-card v-bind="$attrs" v-on="$listeners">
      <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
        <slot :name="key" v-bind="bind"></slot>
      </template>
      <template v-for="(val, key) in $slots" :slot="key">
        <slot :name="key"></slot>
      </template>
    </a-card>
  </div>
</template>

<script>
// 基于 Card 的基础上再封装
export default {
  name: 'YCard',
  inheritAttrs: false,
  props: {
    titleBorderBottom: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
