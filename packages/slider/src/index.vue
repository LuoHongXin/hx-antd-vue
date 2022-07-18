<template>
  <a-slider v-on="$listeners" v-bind="$attrs" v-model="inValue">
    <slot />
  </a-slider>
</template>
<script>
export default {
  name: 'YSlider',
  props: {
    value: {
      type: [String, Number, Array],
      default: null,
    },
    defaultValue: {
      type: [String, Number, Array],
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
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function() {
        return this.value === null ? this.val : this.value;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
  },
};
</script>
