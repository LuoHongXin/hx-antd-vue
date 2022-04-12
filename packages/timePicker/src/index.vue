<template>
  <a-time-picker
    popupClassName="y-time-picker-popup"
    class="y-time-picker"
    :class="widthSizeClass"
    v-on="$listeners"
    v-bind="$attrs"
    v-model="inValue"
    :getPopupContainer="getPopupContainer"
  >
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
    <template v-for="(val, key) in $scopedSlots" :slot="key" slot-scope="bind">
      <slot :name="key" v-bind="bind"></slot>
    </template>
  </a-time-picker>
</template>
<script>
export default {
  name: 'YTimePicker',
  props: {
    value: null,
    getPopupContainer: {
      type: Function,
      default: trigger => trigger.parentNode || document.body,
    },
    widthSize: {
      type: String,
      default: 's',
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
  data() {
    return {
      val: this.value,
    };
  },
  watch: {
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get() {
        return this.val;
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/timePicker.less';
</style>
