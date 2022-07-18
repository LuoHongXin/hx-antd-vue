<template>
  <div class="y-range-time-picker" :disabled="disabled" :class="widthSizeClass">
    <y-time-picker
      :placeholder="titles[0]"
      v-model="value1"
      :disabled="disabled"
      :allowClear="false"
      v-bind="params.option1"
    ></y-time-picker>
    <span class="y-range-time-picker-icon">
      <a-icon type="swap-right" />
    </span>
    <y-time-picker
      :placeholder="titles[1]"
      v-model="value2"
      :disabled="disabled"
      :allowClear="false"
      v-bind="params.option2"
    ></y-time-picker>
    <span class="y-range-time-picker-clock">
      <template v-if="$slots.suffixIcon">
        <slot name="suffixIcon" />
      </template>
      <a-icon type="clock-circle" v-else />
    </span>
    <span class="y-range-time-picker-circle" v-if="allowClear" @click="(value1 = undefined), (value2 = undefined)">
      <template v-if="$slots.clearIcon">
        <slot name="clearIcon" />
      </template>
      <a-icon theme="filled" type="close-circle" v-else />
    </span>
  </div>
</template>
<script>
export default {
  name: 'YRangeTimePicker',
  props: {
    valueArr: {
      type: Array,
      default: () => [undefined, undefined],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
    params: {
      type: Object,
      default: () => ({ option1: {}, option2: {} }),
    },
    titles: {
      type: Array,
      default: function() {
        return [this.$wci18n.t('wh.timePicker.startTime'), this.$wci18n.t('wh.timePicker.endTime')];
      },
    },
    widthSize: {
      type: String,
      default: 'l',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'valueArr',
    event: 'update-valueArr',
  },
  data() {
    return {
      value1: undefined,
      value2: undefined,
      inValue: [undefined, undefined],
    };
  },
  computed: {
    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
  watch: {
    value1(val) {
      this.$set(this.inValue, [0], val);
    },
    value2(val) {
      this.$set(this.inValue, [1], val);
    },
    inValue: {
      handler(inValue) {
        this.$emit('update-valueArr', inValue);
        this.$emit('change', inValue);
      },
      deep: true,
    },
    valueArr: {
      handler(valueArr) {
        this.value1 = valueArr[0];
        this.value2 = valueArr[1];
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.y-range-time-picker {
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: @y-radius-default;
  display: inline-block;
  .y-range-time-picker-iconcolor {
    clear: rgba(0, 0, 0, 0.25);
  }
  .y-range-time-picker-clock {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 11px;
    transform: translate(0%, -50%);
    color: rgba(0, 0, 0, 0.25);
  }
  .y-range-time-picker-circle {
    display: inline-block;
    visibility: hidden;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 11px;
    transform: translate(0%, -50%);
    color: rgba(0, 0, 0, 0.25);
  }
  &:hover {
    border-color: @y-color-text-regular;
    box-shadow: @y-shadow-active;
    transition: all 0.3s;
    .y-time-picker {
      .ant-time-picker-icon {
        display: none;
      }
    }
    .y-range-time-picker-circle {
      transition: all 0.3s;
      visibility: initial;
      transition: all 0.3s cubic-bezier(0.645, 0.04);
      &:hover {
        color: rgba(0, 0, 0, 0.45);
      }
    }
    .y-range-time-picker-clock {
      visibility: hidden;
    }
  }
  .y-time-picker {
    width: calc(50% - 20px);
    .ant-time-picker-input {
      border: 0;
      text-align: center;
      &:hover {
        box-shadow: none;
      }
    }
    .ant-time-picker-icon {
      display: none;
    }
  }
}
.y-range-time-picker[disabled] {
  background-color: @y-color-fill-hover;
  box-shadow: none;
  cursor: not-allowed;
  &:hover {
    background-color: @y-color-fill-hover;
    box-shadow: none;
    cursor: not-allowed;
    border-color: #d9d9d9;
    .y-range-time-picker-circle {
      transition: all 0.3s;
      visibility: hidden;
    }
    .y-range-time-picker-clock {
      visibility: initial;
    }
  }
}
</style>
