<template>
  <div class="y-name-select">
    <!-- 名称可选 -->
    <y-select v-if="titleSelect" @change="titleSelectChange" class="titleSelect" :default-value="titleSelect[0].value">
      <a-select-option v-for="t in titleSelect" :key="t.value" :title="t.title" :value="t.value">{{ t.title }}</a-select-option>
    </y-select>
    <!-- 名称不可选 -->
    <span v-else class="title">{{ title }}</span>
    <!-- 搜索选择 -->
    <a-popover v-if="isSearch" placement="bottom" v-model="visible" trigger="click">
      <template slot="content">
        <div class="y-name-select-content">
          <y-input autoWidth :placeholder="$wci18n.t('wh.nameSelect.placeholder')" @change="filterInput">
            <a-icon slot="prefix" type="search" />
          </y-input>
          <div class="tips" v-if="checkValue.length >= maxNum">
            <a-icon type="info-circle" />
            {{ maxAlarmTips.replace('$', maxNum) }}
          </div>
          <div class="list">
            <a-checkbox-group v-model="checkValue" @change="checkChange">
              <a-row>
                <a-col :span="24" v-for="item in option2" :key="item.value" :title="item.title">
                  <a-checkbox :value="item.value + ''">{{ item.title }}</a-checkbox>
                </a-col>
                <a-divider v-if="option1.length > 0" />
                <a-col :span="24" v-for="item in option1" :key="item.value" :title="item.title">
                  <a-checkbox :value="item.value + ''">{{ item.title }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </div>
          <div class="btn-group">
            <y-button class="handle-btn" style="margin-right:8px" @click="visible = false">{{
              $wci18n.t('wh.nameSelect.cancel')
            }}</y-button>
            <y-button class="handle-btn" type="primary" @click="checkSubmit">{{ $wci18n.t('wh.nameSelect.confirm') }}</y-button>
          </div>
        </div>
      </template>
      <y-select
        :style="{
          width: width + 'px',
        }"
        v-model="selectValue3"
        :open="false"
        :placeholder="$wci18n.t('wh.nameSelect.pleaseSelect') + title"
      ></y-select>
    </a-popover>
    <!-- 简单选择 -->
    <y-select
      v-else
      v-model="selectValue2"
      show-search
      :placeholder="$wci18n.t('wh.nameSelect.pleaseSelect') + title"
      option-filter-prop="children"
      :style="{
        width: width + 'px',
      }"
      :filter-option="filterOption"
    >
      <a-select-option v-for="item in option" :key="item.value" :value="item.value" :title="item.title">{{ item.title }}</a-select-option>
    </y-select>
  </div>
</template>
<script>
export default {
  name: 'YNameSelect',
  model: {
    prop: 'selectValue',
    event: 'update-selectValue',
  },
  props: {
    maxAlarmTips: {
      type: String,
      default: function() {
        return this.$wci18n.t('wh.nameSelect.defaultMaxAlarmTips');
      },
    },
    width: {
      type: [Number, String],
      default: function() {
        return 146;
      },
    },
    // 是否为搜索选择
    isSearch: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    // 搜索框前面的名称选项
    titleSelect: {
      type: Array,
      default: function() {
        return null;
      },
    },
    // 搜索框前面的名称
    title: {
      type: String,
      default: function() {
        return '';
      },
    },
    // 可选择最多的数量
    maxNum: {
      type: Number,
      default: function() {
        return 1;
      },
    },
    // 显示在选择框的数据
    selectValue: {
      type: String,
      default: function() {
        return '';
      },
    },
    // 选择选项
    option: {
      type: Array,
      default: function() {
        // const arr = [];
        // for (let i = 0; i < 100; i++) {
        //   arr.push({ title: i ** 8 + '', value: i + '' });
        // }
        // return arr;
        return [];
      },
    },
  },
  computed: {
    selectValue2: {
      get({ selectValue }) {
        return selectValue;
      },
      set(val) {
        this.$emit('update-selectValue', val);
      },
    },
    // 转换搜索下拉的显示
    selectValue3: {
      get({ selectValue2, option }) {
        const arr = (selectValue2 + '').split(',');
        const titleArr = [];
        option.forEach(item => {
          if (arr.includes(item.value + '')) {
            titleArr.push(item.title);
          }
        });
        return titleArr.join();
      },
    },
  },
  watch: {
    selectValue2: {
      handler: function(val) {
        this.$emit('change', val);
        this.checkValue = (val + '').split(',');
      },
    },
    visible: {
      // 取消重新打开时，回显之前已选的数据
      handler: function(val) {
        if (val && this.selectValue) {
          this.checkValue = (this.selectValue + '').split(',');
        }
      },
    },
    option: {
      handler: function(val) {
        this.option2 = [...val];
      },
      immediate: true,
    },
  },
  data() {
    return {
      option1: [],
      option2: [], // 自定义多选下拉弹窗的选项
      visible: false, // 自定义多选下拉弹窗的显示隐藏
      checkValue: [], // 多选选择的数据
    };
  },
  methods: {
    checkChange(checkedValues) {
      if (checkedValues.length > this.maxNum) {
        this.checkValue = checkedValues.slice(0, this.maxNum);
      }
    },
    // 可搜索多选确定
    checkSubmit() {
      this.visible = false;
      this.$emit('update-selectValue', this.checkValue.join());
    },
    // 单选搜索过滤选项
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    filterInput(e) {
      const val = e.target.value.toLowerCase();
      let option1 = [];
      if (val) {
        this.option2 = this.option.filter(item => {
          option1;
          if ((item.title + '').toLowerCase().indexOf(val) >= 0) {
            return item;
          } else {
            option1.push(item);
          }
          // return (item.title + "").toLowerCase().indexOf(val) >= 0;
        });
      } else {
        this.option2 = this.option;
      }
      this.option1 = option1;
    },
    titleSelectChange(value, option) {
      this.$emit('titleChange', { value, option });
    },
  },
};
</script>
