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
      get: function() {
        return this.val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    classActive() {
      let disabled = Object.prototype.hasOwnProperty.call(this.$attrs, 'disabled');
      let bodered = this.bodered;
      let classActive = 'y-radio-group';
      if (bodered) classActive += ' y-radio-group-bodered';
      if (disabled) classActive += ' y-radio-group-disabled';
      return classActive;
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/radioGroup.less';
</style>
