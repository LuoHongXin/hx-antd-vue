<template>
  <div class="y-textarea" :class="widthSizeClass">
    <a-textarea @input.native="textarea" v-on="$listeners" v-bind="{ ...$attrs, ...params }" v-model="inValue" v-if="value !== false" />
    <a-textarea @change="textarea" v-on="$listeners" v-bind="{ ...$attrs, ...params }" v-else />
    <div v-if="fixedNumber" class="text-num">{{ valueLength }}/{{ maxLength }}</div>
  </div>
</template>
<script>
export default {
  name: 'YTextarea',
  props: {
    value: {
      type: null,
      default: false,
    },
    fixedNumber: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: [Number, String],
      default: 256,
    },
    autoSize: {
      type: [Boolean, Object],
      default: () => {
        return { minRows: 4, maxRows: 4 };
      },
    },
    widthSize: {
      type: String,
      default: 'xl',
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
      params: {},
      valueLength: 0,
    };
  },
  created() {
    if (this.fixedNumber) {
      this.$set(this.params, 'maxLength', Number(this.maxLength));
    }
    this.$set(this.params, 'autoSize', this.autoSize);
  },
  methods: {
    textarea(e) {
      if (e && e.type === 'input' && this.fixedNumber) {
        this.valueLength = e.target.value.length || 0;
      }
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
@import '~/src/styles/components/textarea.less';
// @import '~/src/styles/components/inputAll.less';
</style>
