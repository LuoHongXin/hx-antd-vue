<template>
  <a-select
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    ref="mySelect"
    :getPopupContainer="getProps('getPopupContainer')"
    @search="search"
    :class="widthSizeClass"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
    :defaultActiveFirstOption="defaultActiveFirstOption"
    :allowClear="allowClear"
  >
    <!-- 用于a-select功能 -->
    <a-select-option v-for="o in options" :value="o.value" :key="o.value">{{ o.label || o.value }}</a-select-option>
    <!-- 展示的下拉内容 -->
    <div @mousedown="mousedown" slot="dropdownRender" style="position: relative">
      <RecycleScroller
        role="listbox"
        tabindex="0"
        class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
        :buffer="1000"
        :prerender="50"
        :item-size="32"
        key-field="value"
        :items="showOptions"
        v-show="showOptions.length"
      >
        <template v-slot="{ item }">
          <li role="option" @click="selectClick(item)" :class="getOptionsClass(item)" unselectable="on" style="user-select: none">
            <y-tooltip v-if="tooltip">
              <template #title>{{ item.label || item.value }}</template>
              {{ item.label || item.value }}
            </y-tooltip>
            <div class="y-select-ellipsis" v-else>{{ item.label || item.value }}</div>
            <i v-if="isMultiple" aria-label="图标: check" class="anticon anticon-check ant-select-selected-icon">
              <svg
                viewBox="64 64 896 896"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class=""
              >
                <path
                  d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                ></path>
              </svg>
            </i>
          </li>
        </template>
      </RecycleScroller>
      <y-empty v-show="!showOptions.length"></y-empty>
    </div>
  </a-select>
</template>

<script>
import injectConfigMixins from '../../../src/utils/injectConfigMixins.js';
export default {
  name: 'YInfiniteSelect',
  mixins: [injectConfigMixins],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    getPopupContainer: {
      type: Function,
      default: (triggerNode) => triggerNode.parentNode || document.body,
    },
    dropdownMatchSelectWidth: {
      type: Boolean,
      default: true,
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: [String, Number, Array],
      default: undefined,
    },
    value: {
      type: [String, Number, Array],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionsKey: {
      type: String,
      default: 'value',
    },
    tooltip: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'right',
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
    widthSize: {
      type: String,
      default: 's',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // myKey: new Date().getTime(), // 唯一标识
      selectOpen: false,
      val: this.defaultValue,
      showOptions: this.options,
    };
  },
  watch: {
    options(val) {
      this.showOptions = val;
    },
    value(val) {
      this.val = val;
    },
  },
  // destroyed() {
  //   // 移除对body的事件点击事件
  //   document.querySelector('body').removeEventListener('click', this.clickEvent, false);
  // },
  // mounted() {
  //   document.querySelector('body').addEventListener('click', this.clickEvent, false);
  // },
  computed: {
    isMultiple({ $attrs, checkbox }) {
      const mode = $attrs.mode || 'default';
      return !!(checkbox || ['multiple', 'tags'].includes(mode));
    },
    modelVal: {
      get({ value, val }) {
        const selectData = value !== undefined ? value : val;
        return selectData || [];
      },
      set(newValue) {
        this.$emit('update-value', newValue);
        this.val = newValue;
      },
    },
    widthSizeType({ $attrs, checkbox }) {
      const mode = $attrs.mode || 'default';
      const types = ['multiple', 'tags'];
      if (checkbox || types.includes(mode)) return 'l';
      return 's';
    },
    widthSizeClass({ widthSize, widthSizeType, autoWidth }) {
      const size = widthSize === 's' ? widthSizeType : widthSize;
      return (autoWidth ? '' : `y-form-width-${size}`) + ' y-select y-infinite-select';
    },
    // contentClass({ myKey }) {
    //   return 'y-select-content' + myKey;
    // },
  },
  methods: {
    mousedown(e) {
      //找到下拉框最外层的滚动元素则阻止默认行为
      if (this.isMultiple || e?.target?.className?.includes('vue-recycle-scroller')) {
        e.preventDefault();
      }
    },
    search(val) {
      this.showOptions = this.options.filter((i) => {
        let txt = i.label || i.value;
        return txt.toLowerCase().indexOf(val.toLowerCase()) >= 0;
      });
    },
    clrearInput() {
      this.showOptions = this.options;
      if (this.$refs.mySelect && this.$refs.mySelect.$refs.vcSelect) {
        this.$refs.mySelect.$refs.vcSelect._inputValue = '';
      }
    },
    getOptionsClass(item) {
      if ((this.modelVal && this.modelVal.includes(item.value)) || this.modelVal === item.value) {
        return `ant-select-dropdown-menu-item ant-select-dropdown-menu-item-selected`;
      }
      return `ant-select-dropdown-menu-item`;
    },
    selectClick(item) {
      if (this.isMultiple) {
        // 复选
        let arr = this.modelVal;
        if (arr.includes(item.value)) {
          arr = arr.filter((i) => i !== item.value);
        } else {
          arr.push(item.value);
        }
        this.modelVal = arr;
      } else {
        //单选
        this.modelVal = item.value;
      }
    },
    // clickEvent(e) {
    //   const arr = this.isMultiple ? ['y-infinite-select-' + this.myKey, this.contentClass] : ['y-infinite-select-' + this.myKey];
    //   if (eleUtils.findIsIncludeElement(e.target, arr)) {
    //     // 树选择框下拉则展开
    //     this.selectOpen = this.isMultiple ? true : !this.selectOpen;
    //   } else {
    //     // 非树选择框则关闭
    //     this.selectOpen = false;
    //     this.clrearInput();
    //   }
    //   return false;
    // },
  },
};
</script>
