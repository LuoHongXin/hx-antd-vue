<template>
  <a-radio-group
    v-model="inValue"
    v-if="bodered"
    class="y-radio"
    :class="classActive"
    @mouseenter="classHover = true"
    @mouseleave="classHover = false"
  >
    <a-radio :value="true" :class="activeRadio" :disabled="disabled">
      <span class="title"><slot /></span>
      <div class="content">
        <slot name="content" />
      </div>
    </a-radio>
  </a-radio-group>
  <a-radio v-else-if="YRadioGroup" v-on="$listeners" v-bind="$attrs" :value="value">
    <slot />
  </a-radio>
  <a-radio v-on="$listeners" v-bind="$attrs" v-else>
    <slot />
  </a-radio>
</template>
<script>
export default {
  name: 'YRadio',
  inject: {
    YRadioGroup: {
      default: '',
    },
  },
  props: {
    bodered: {
      type: Boolean,
      default: false,
    },
    value: {
      type: null,
    },
    defaultValue: {
      type: null,
    },
  },
  model: {
    prop: 'value',
    event: 'update-value',
  },
  data() {
    return {
      radioVal: this.value || this.defaultValue,
      classHover: false,
    };
  },
  watch: {
    value(value) {
      this.radioVal = value;
    },
  },
  computed: {
    inValue: {
      get: function() {
        return this.radioVal;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.radioVal = newValue;
      },
    },
    activeRadio() {
      let title = 'radio-wrapper';
      let disabled = this.disabled;
      if (this.radioVal) title += ' radio-wrapper-active';
      if (disabled) title += ' radio-wrapper-disabled';
      if (this.bodered) {
        return title;
      } else {
        return '';
      }
    },
    disabled() {
      let disabled = Object.prototype.hasOwnProperty.call(this.$attrs, 'disabled');
      return disabled || false;
    },
    classActive() {
      let disabled = this.disabled;
      let radioVal = this.radioVal;
      let classHover = this.classHover;
      if (disabled) return 'y-radio-group-disabled';
      if (radioVal) return 'y-radio-group-active';
      if (classHover) return 'y-radio-wrapper-hover';
      return '';
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/components/radio.less';
</style>
