<template>
  <div class="y-input-ip">
    <y-input class="y-input" v-model="ipValue[0]" :size="size" :style="{ width: `${width}px` }" :maxLength="3" :disabled="disabledFn(0)" />
    <div class="y-input-ip-divider"></div>
    <y-input class="y-input" v-model="ipValue[1]" :size="size" :style="{ width: `${width}px` }" :maxLength="3" :disabled="disabledFn(1)" />
    <div class="y-input-ip-divider"></div>
    <y-input class="y-input" v-model="ipValue[2]" :size="size" :style="{ width: `${width}px` }" :maxLength="3" :disabled="disabledFn(2)" />
    <div class="y-input-ip-divider"></div>
    <y-input class="y-input" v-model="ipValue[3]" :size="size" :style="{ width: `${width}px` }" :maxLength="3" :disabled="disabledFn(3)" />
  </div>
</template>

<script>
const conversionIp = (objIp, symbolUnit) => {
  let ip = `${objIp[0]}${symbolUnit}${objIp[1]}${symbolUnit}${objIp[2]}${symbolUnit}${objIp[3]}`;
  return ip;
};
export default {
  name: 'YInputIp',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  inject: {
    yForm: {
      default: '',
    },
    yFormItem: {
      default: '',
    },
  },
  props: {
    size: {
      type: String,
      default: 'default',
    },
    width: {
      type: [String, Number],
      default: '60',
    },
    value: {
      type: [String, Number],
    },
    symbolUnit: {
      type: String,
      default: '.',
    },
    disabled: {
      type: [Boolean, Array],
      default: false,
    },
  },
  data() {
    return {
      ipValue: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
    };
  },
  watch: {
    value: {
      handler(ip) {
        if (!ip) {
          this.ipValue = {
            0: '',
            1: '',
            2: '',
            3: '',
          };
          return;
        }
        let ipArr = ip.split(this.symbolUnit);
        if (ipArr && ipArr.length !== 4) return;
        for (const key in ipArr) {
          this.ipValue[key] = ipArr[key];
        }
      },
      immediate: true,
    },
    ipValue: {
      handler(ip) {
        let ips = conversionIp(ip, this.symbolUnit);
        this.$emit('update-value', ips);
        this.$emit('change', ips);
        if (!this.value) return;
        this.inputChange();
      },
      deep: true,
    },
  },
  methods: {
    disabledFn(index) {
      let disabled = this.disabled;
      if (Array.isArray(disabled)) {
        return disabled[index] || false;
      }
      return disabled || false;
    },
    inputChange() {
      if (this.yForm && this.yFormItem) {
        const rules = this.yForm.y_props.rules || {};
        const prop = this.yFormItem.y_props.prop || '';
        if (rules && rules[prop]) {
          this.yFormItem.onFieldBlur('change');
        }
      }
    },
  },
};
</script>