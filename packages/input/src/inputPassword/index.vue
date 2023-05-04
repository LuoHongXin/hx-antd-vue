<template>
  <a-input-password
    class="y-input-password"
    v-on="$listeners"
    v-bind="$attrs"
    v-model="inValue"
    v-if="value !== false"
    :class="widthSizeClass"
    :allowClear="allowClear"
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
      type: [String, Number],
      default: undefined,
    },
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    widthSize: {
      type: String,
      default: 'm',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      val: this.defaultValue,
    };
  },
  watch: {
    value(val) {
      this.val = val;
    },
  },
  computed: {
    inValue: {
      get: function({ value, val }) {
        if (value !== undefined) {
          return value;
        }
        return val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
  },
};
</script>
