<template>
  <a-input v-on="$listeners" v-bind="{ ...$attrs, ...params }" v-model="inValue" ref="input" class="y-input" :class="widthSizeClass">
    <!-- <slot /> -->
    <slot :name="slot" :slot="slot" v-for="(val, slot) in $scopedSlots" />
    <template slot="prefix" v-if="passwordMode && !$scopedSlots.prefix">
      <i
        aria-label="icon: eye-invisible"
        tabindex="-1"
        class="anticon anticon-eye-invisible ant-input-password-icon"
        style="cursor:default;"
      >
        <y-svg-icon icon-class="password" className="ant-input-prefix" style="width:14px;height:14px;" />
      </i>
    </template>
    <template slot="suffix" v-if="passwordMode && !$scopedSlots.suffix">
      <i
        aria-label="icon: eye-invisible"
        tabindex="-1"
        class="anticon anticon-eye-invisible ant-input-password-icon"
        @click.stop="onclick('input')"
      >
        <y-svg-icon
          :icon-class="params.type ? 'close_eyes' : 'eyes_visible'"
          className="ant-input-suffix"
          style="width:14px;height:14px;fill: #C4C6CC;"
        />
      </i>
    </template>
  </a-input>
</template>
<script>
export default {
  name: 'YInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
    },
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    passwordMode: {
      type: Boolean,
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
  data() {
    return {
      val: this.defaultValue,
      params: {},
    };
  },
  created() {
    if (this.passwordMode) {
      this.$set(this.params, 'type', 'password');
    }
  },
  watch: {
    value(val) {
      this.val = val;
    },
  },
  computed: {
    inValue: {
      get: function() {
        if (this.value !== undefined) {
          return this.value;
        }
        return this.val;
      },
      set: function(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
  methods: {
    onclick(name) {
      let el = this.$refs[name];
      el.focus();
      if (this.params.type) {
        this.$set(this, 'params', {});
      } else {
        this.$set(this.params, 'type', 'password');
      }
    },
  },
};
</script>
