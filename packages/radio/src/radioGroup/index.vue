<template>
  <a-radio-group v-model="inValue" :class="classActive" v-on="$listeners" v-bind="$attrs">
    <slot />
  </a-radio-group>
</template>
<script>
export default {
  name: 'YRadioGroup',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  provide() {
    return {
      YRadioGroup: this,
      radio: this.radio,
    };
  },
  props: {
    value: {
      type: null,
    },
    bodered: {
      type: Boolean,
      default: false,
    },
    radio: {
      type: Boolean,
      default: true,
    },
    defaultValue: {
      type: null,
    },
  },
  data() {
    return {
      val: this.value ?? this.defaultValue,
    };
  },
  watch: {
    value(value) {
      this.val = value;
    },
  },
  computed: {
    inValue: {
      get: function({ val }) {
        return val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    classActive({ $attrs, bodered }) {
      let disabled = Object.prototype.hasOwnProperty.call($attrs, 'disabled');
      let classActive = 'y-radio-group';
      if (bodered) classActive += ' y-radio-group-bodered';
      if (disabled) classActive += ' y-radio-group-disabled';
      return classActive;
    },
  },
};
</script>
