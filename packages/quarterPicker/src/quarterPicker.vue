<template>
  <a-select
    class="y-select"
    :class="widthSizeClass"
    show-search
    v-model="val"
    autoWidth
    :placeholder="placeholder"
    :dropdownStyle="dropdownStyle"
    :dropdownClassName="dropdownClassName + ' y-quarter-picker'"
    :dropdownMatchSelectWidth="false"
    :getPopupContainer="getProps('getPopupContainer')"
    :allowClear="allowClear"
  >
    <div slot="dropdownRender" style="width: 280px">
      <div class="y-picker-panel-container" v-if="type === 0">
        <div class="y-picker-header" @mousedown="(e) => e.preventDefault()">
          <a-icon type="double-left" @click="double('left', 0)" />
          <div class="y-picker-header-view" @click="type = 1">{{ val1 }}年</div>
          <a-icon type="double-right" @click="double('right', 0)" />
        </div>
        <div class="y-picker-body">
          <tbody class="y-picker-content">
            <tr>
              <td
                class="y-picker-cell y-picker-cell-in-view"
                v-for="q in curr"
                :key="q"
                :class="val2 === q ? 'y-picker-cell-active' : ''"
                @click="val2 = q"
              >
                <div class="y-picker-cell-inner">{{ q }}</div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
      <!-- 分割线---year -->
      <div class="y-picker-panel-container" v-else-if="type === 1" @mousedown="(e) => e.preventDefault()">
        <div class="y-picker-header">
          <a-icon type="double-left" @click="double('left', 1)" />
          <div class="y-picker-header-view" @click="type = 2">{{ year }}</div>
          <a-icon type="double-right" @click="double('right', 1)" />
        </div>
        <div class="y-picker-body">
          <tbody class="y-picker-content">
            <tr v-for="i in 4" :key="i">
              <td
                class="y-picker-cell y-picker-cell-in-view"
                v-for="(q, y) in getYearCurr.slice((i - 1) * 3, 3 * i)"
                :key="q"
                :class="{
                  'y-picker-cell-active': q == val1,
                  'y-picker-cell-year': (i === 1 && y === 0) || (i === 4 && y === 2),
                }"
                @click="(val1 = q), (type = 0)"
              >
                <div class="y-picker-cell-inner">{{ q }}</div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
      <!-- 分割线---yearss -->
      <div class="y-picker-panel-container" v-else @mousedown="(e) => e.preventDefault()">
        <div class="y-picker-body">
          <tbody class="y-picker-content">
            <tr v-for="i in 4" :key="i">
              <td
                class="y-picker-cell y-picker-cell-in-view"
                v-for="(q, y) in getYearssCurr.slice((i - 1) * 3, 3 * i)"
                :key="q"
                :class="{
                  'y-picker-cell-active': q == year,
                  'y-picker-cell-year': (i === 1 && y === 0) || (i === 4 && y === 2),
                }"
                @click="(year = q), (type = 1)"
              >
                <div class="y-picker-cell-inner">{{ q }}</div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
    <slot></slot>
  </a-select>
</template>
<script>
import injectConfigMixins from '../../../src/utils/injectConfigMixins.js';
export default {
  name: 'YQuarterPicker',
  mixins: [injectConfigMixins],
  props: {
    emptyScene: {
      type: String,
      default: 'noAccess',
    },
    getPopupContainer: {
      type: Function,
      default: () => document.body,
    },
    dropdownStyle: {
      type: Object,
      default: () => {},
    },
    placeholder: String,
    dropdownClassName: String,
    value: {
      type: [String, Number],
    },
    widthSize: {
      type: String,
      default: 's',
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    patternChina: {
      type: Boolean,
      default: false,
    },
    allowClear: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      val: this.value ? [this.value] : [],
      val1: this.value ? this.value.split('-')[0] : new Date().getFullYear() * 1,
      val2: this.value ? this.value.split('-')[1] : null,
      type: 0,
      getYearCurr: this.getYearCurrFn(this.value ? this.value.split('-')[0] : new Date().getFullYear() * 1),
      year: this.getYearFn(this.val1),
    };
  },
  watch: {
    value(value) {
      this.val = value ? [value] : [];
    },
    val(val) {
      this.$emit('change', val[0]);
    },
    val1(val1) {
      this.getYearCurr = this.getYearCurrFn(val1);
      this.year = this.getYearFn(val1);
      if (!val1) {
        this.val = [];
        return;
      }
      if (!this.val2) {
        this.val = [this.val1];
        return;
      }
      this.val = [this.val1 + '-' + this.val2];
    },
    val2(val2) {
      if (!this.val1) {
        this.val = [];
        return;
      }
      if (!val2) {
        this.val = [this.val1];
        return;
      }
      this.val = [this.val1 + '-' + val2];
    },
    year(year) {
      let v = year.split('-');
      const curr = [];
      for (let i = 0; i < 12; i++) {
        curr.push(v[0] * 1 - 1 + i);
      }
      this.getYearCurr = curr;
    },
  },
  computed: {
    getYearssCurr({ year }) {
      let n = year.split('-')[0];
      let v = n - String(n).slice(n.length - 2) - 9;
      const curr = [];
      for (let i = 0; i < 12; i++) {
        let v1 = v + 10 * i - 1;
        let v2 = v + 10 * (i + 1) - 2;
        let s = v1 + '-' + v2;
        curr.push(s);
      }
      return curr;
    },

    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
    },
    curr({ patternChina }) {
      if (patternChina) {
        return ['第一季度', '第二季度', '第三季度', '第四季度'];
      }
      return ['Q1', 'Q2', 'Q3', 'Q4'];
    },
  },
  methods: {
    getYearFn(n) {
      if (!n) n = new Date().getFullYear();
      let v = n - String(n).slice(-1);
      return v + '-' + (v + 9);
    },
    getYearCurrFn(val1) {
      if (!val1) val1 = new Date().getFullYear();
      let v = val1 - String(val1).slice(-1) - 1;
      const curr = [];
      for (let i = 0; i < 12; i++) {
        curr.push(v + i);
      }
      return curr;
    },
    double(t, type) {
      if (type === 0) {
        if (!this.val1) {
          this.val1 = new Date().getFullYear() * 1;
          return;
        }
        if (t === 'right') {
          this.val1 = this.val1 * 1 + 1;
        } else {
          this.val1 = this.val1 * 1 - 1;
        }
      } else {
        const n = this.year.split('-')[0] * 1;
        const v = t === 'right' ? n + 10 : n - 10;
        this.year = `${v}-${v + 9}`;
      }
    },
  },
};
</script>
