<template>
  <a-transfer v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, slot) in $scopedSlots">
      <slot v-bind="bind" slot-scope="bind" :name="slot" :slot="slot" />
    </template>
  </a-transfer>
</template>
<script>
export default {
  name: 'YTransfer',
};
</script>
