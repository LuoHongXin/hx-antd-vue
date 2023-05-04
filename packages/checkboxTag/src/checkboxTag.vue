<template>
  <label class="y-checkbox-tag" :checked="modelChecked" :disabled="disabled">
    <svg
      class="y-checkbox-tag-mark"
      v-if="modelChecked"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <polygon id="path-1" points="20 0 20 20 0 20"></polygon>
      </defs>
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="v" transform="translate(-4.000000, -4.000000)">
          <g id="check" transform="translate(4.000000, 4.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1"></use>
            </mask>
            <use id="三角" fill="currentColor" fill-rule="nonzero" xlink:href="#path-1"></use>
            <g id="编组" mask="url(#mask-2)">
              <g transform="translate(5.000000, 6.000000)" id="7.图标/通用/正确">
                <rect id="矩形" fill="#EBEBEB" fill-rule="nonzero" opacity="0" x="0" y="0" width="16" height="16"></rect>
                <g id="check" transform="translate(3.000000, 4.000000)" fill="#FFFFFF">
                  <path
                    d="M8.57573593,0.875735931 C8.81005051,0.641421356 9.18994949,0.641421356 9.42426407,0.875735931 C9.63254369,1.08401555 9.65568587,1.40732483 9.49369061,1.6411666 L9.42426407,1.72426407 L3.92426407,7.22426407 C3.71598445,7.43254369 3.39267517,7.45568587 3.1588334,7.29369061 L3.07573593,7.22426407 L0.575735931,4.72426407 C0.341421356,4.48994949 0.341421356,4.11005051 0.575735931,3.87573593 C0.784015554,3.66745631 1.10732483,3.64431413 1.3411666,3.80630939 L1.42426407,3.87573593 L3.5,5.951 L8.57573593,0.875735931 Z"
                    id="路径"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <slot></slot>
    <input style="display:none" type="checkbox" @click="onClick" :checked="modelChecked" :disabled="disabled" />
  </label>
</template>
<script>
export default {
  name: 'YCheckboxTag',
  inheritAttrs: false,
  inject: {
    checkboxTagGroup: {
      default: null,
    },
    modelValue: {
      default: null,
    },
  },
  props: {
    checked: { type: [Boolean, Number], default: undefined },
    disabled: Boolean,
    readonly: Boolean,
    value: [String, Number],
  },
  mounted() {
    if (!this.modelValue) return;
    this.$watch(
      () => JSON.stringify(this.modelValue()),
      val => {
        //group 下 设置v-model的值
        const checked = JSON.parse(val).includes(this.value);
        if (this.setModelValue(checked)) return;

        this.modelChecked = checked;
      },
      {
        immediate: true,
      }
    );
  },
  data() {
    return {
      modelChecked: false,
    };
  },
  model: {
    prop: 'checked',
    event: 'update:checked',
  },
  methods: {
    setModelValue(checked) {
      const _this = this.checkboxTagGroup;
      if (_this?.$options?.name === 'YCheckboxTagGroup') {
        this.modelChecked = checked;
        _this.onChecked(checked, this.value);
        return true;
      }
    },

    //e: MouseEvent
    onClick(e) {
      e.__type = 'change';
      const { checked, disabled, readonly } = this;
      if (disabled || readonly) return;
      const _this = this.checkboxTagGroup;
      if (_this?.$options?.name === 'YCheckboxTagGroup') {
        e.targetProps = { ...this.$props, checked: this.modelChecked };
      }
      this.$nextTick(() => {
        this.$emit('change', e);
      });
      //group 下 设置v-model的值
      if (this.setModelValue(e.target.checked)) return;
      const IS_V_MODEL = this.$listeners['update:checked'];
      if (checked === undefined) {
        this.modelChecked = e.target.checked;
      } else {
        if (IS_V_MODEL) {
          this.$emit('update:checked', e.target.checked);
        }
      }
    },
  },
  watch: {
    checked: {
      handler(checked) {
        this.modelChecked = checked;
      },
      immediate: true,
    },
  },
};
</script>
