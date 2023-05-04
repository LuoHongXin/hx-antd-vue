<template>
  <div class="y-cascader-multi" :class="widthSizeClass">
    <y-select
      showSearch
      :filterOption="filterOption"
      autoWidth
      placeholder="省"
      v-model="val1"
      :options="options"
      @change="(val2 = undefined), (val3 = undefined)"
    />
    <y-select
      showSearch
      :filterOption="filterOption"
      class="y-casascader-middle"
      autoWidth
      placeholder="市"
      v-model="val2"
      :options="options2"
      @change="val3 = undefined"
    />
    <y-select showSearch :filterOption="filterOption" autoWidth placeholder="区" v-model="val3" :options="options3" />
  </div>
</template>

<script>
export default {
  name: 'YCascaderMulti',
  props: {
    options: {
      type: Array,
      default: () => [],
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
      val1: undefined,
      val2: undefined,
      val3: undefined,
      value2: [],
      filterOption: (input, option) => {
        const row = option.componentOptions.children[0];
        return (row[0]?.text || row.elm.innerText).toLowerCase().indexOf(input.toLowerCase()) >= 0;
      },
    };
  },
  computed: {
    widthSizeClass({ widthSize, autoWidth }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
    options2({ options, val1 }) {
      if (!options) return [];
      return this.optionsFn(options, val1);
    },
    options3({ options2, val2 }) {
      if (!options2) return [];
      return this.optionsFn(options2, val2);
    },
  },
  watch: {
    '$attrs.value': {
      handler(value) {
        const val = value ? value : [];
        this.val1 = val[0];
        this.val2 = val[1];
        this.val3 = val[2];
      },
      deep: true,
      immediate: true,
    },
    value2: {
      handler(value) {
        const val = value ? value : [];
        this.$emit('update-value', val);
        this.$emit('change', val);
      },
      deep: true,
    },
    val1(val1) {
      const curr = [];
      if (val1) curr.push(val1);
      if (this.val2) curr.push(this.val2);
      if (this.val3) curr.push(this.val3);
      this.value2 = curr;
    },
    val2(val2) {
      const curr = [];
      if (this.val1) curr.push(this.val1);
      if (val2) curr.push(val2);
      if (this.val3) curr.push(this.val3);
      this.value2 = curr;
    },
    val3(val3) {
      const curr = [];
      if (this.val1) curr.push(this.val1);
      if (this.val2) curr.push(this.val2);
      if (val3) curr.push(val3);
      this.value2 = curr;
    },
  },
  methods: {
    optionsFn(options, val) {
      const options2 = options.find(r => r.value === val)?.children || [];
      return options2;
    },
  },
};
</script>
