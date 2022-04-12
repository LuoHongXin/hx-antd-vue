<template>
  <a-input-password
    class="y-input-password"
    v-on="$listeners"
    v-bind="$attrs"
    v-model="inValue"
    v-if="value !== false"
    :class="widthSizeClass"
  >
    <!-- <slot /> -->
    <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
  </a-input-password>
  <a-input-password class="y-input-password" v-on="$listeners" v-bind="$attrs" v-else>
    <!-- <slot /> -->
    <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
  </a-input-password>
</template>
<script>
export default {
  name: 'YInputPassword',
  props: {
    value: {
      type: null,
      default: false,
    },
    widthSize: {
      type: String,
      default: 'm',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  watch: {
    value(value) {
      this.inValue = value;
    },
  },
  computed: {
    inValue: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/inputAll.less';
</style>
