<template>
  <!-- 
  使用API：
  v-model - string，选中的标签，标签值用英文逗号 , 分隔
  data - Array，初始的所有标签 [{label: "CNware",value: "1"}] 显示label，v-model是value
  inputNewTag(val) - Function，新增标签回调
  canAdd - Boolean，是否可以新增，默认 true
  <tag-input v-model="selectTag" :data="tagData" @inputNewTag="inputNewTag"></tag-input> 
  -->
  <div class="tagInput notshrink" :class="widthSizeClass">
    <div class="self-input notshrink" @click.stop="dropdownShow" :style="'border-color:' + (dropdownView ? themeColor || '' : '')">
      <y-tag v-for="item in selectValue" :key="item.label" :closable="!item.noClose" @close="closeTag(item)">
        <y-tooltip>
          <template slot="title">
            <span>{{ item.label }}</span>
          </template>
          {{ item.label }}
        </y-tooltip>
      </y-tag>
      <y-input
        type="text"
        v-if="inputAddNewTag"
        ref="myTagInput"
        autoWidth
        v-model="inputVal"
        @pressEnter="tagInputPressEnter"
        placeholder=""
        :style="{
          minWidth: '8px',
          border: 'none',
          margin: '0px',
          padding: '0px',
          height: '22px',
          boxShadow: 'none',
          width: inputWidth,
          maxWidth: '100%',
        }"
      />
    </div>
    <!-- <a-input mode="tags" placeholder="请输入新标签" v-model="selectValue" /> -->
    <div class="dropdown notshrink" v-if="showDropdown && dropdownView">
      <y-link-tag class="notshrink" :data="dataSource" v-model="linkTagValue" />
      <div v-if="canAdd">
        <div v-if="!addTagView" class="addTag notshrink" @click="addTag">
          <div>
            <a-icon type="plus" style="margin-right: 5px" />
            <span>{{ $wci18n.t('wh.tagInput.addTag') }}</span>
          </div>
        </div>
        <div v-else>
          <a-input
            class="notshrink"
            :placeholder="$wci18n.t('wh.tagInput.PleaseEnterNewTag')"
            v-model="newTagVal"
            @pressEnter="inputNewTag"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YTagInput',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  computed: {
    inputWidth() {
      return this.inputVal.length * 9 + 12 + 'px';
    },
    selectValue: {
      get() {
        let arr = this.linkTagValue.split(',');
        let labelArr = [];
        let newArr = [];
        this.dataSource.forEach(item => {
          if (arr.includes(item.value) && !labelArr.includes(item.label)) {
            labelArr.push(item.label);
            newArr.push(item);
          }
        });
        if (this.$refs.select) {
          // 解决选择tag时失去焦点问题
          this.$refs.select.focus();
        }
        return newArr;
      },
      set(arr) {
        let valueArr = [];
        const labelArr = arr.map(i => i.label);
        this.dataSource.forEach(item => {
          if (labelArr.includes(item.label)) {
            valueArr.push(item.value);
          }
        });
        this.linkTagValue = valueArr.join(',');
      },
    },
    linkTagValue: {
      get() {
        return this.value.join(',');
      },
      set(val) {
        this.$emit('update-value', val ? val.split(',') : []);
      },
    },

    widthSizeClass() {
      return this.autoWidth ? '' : `y-form-width-${this.widthSize}`;
    },
  },
  data() {
    return {
      inputVal: '',
      dataSource: [],
      addTagView: false,
      dropdownView: false,
      newTagVal: '',
    };
  },
  watch: {
    data: {
      handler: function(val) {
        this.dataSource = val;
      },
      immediate: true,
    },
  },
  mounted() {
    document.querySelector('body').addEventListener('click', this.tagClickEvent, false);
  },
  destroyed() {
    // 移除对body的事件点击事件
    document.querySelector('body').removeEventListener('click', this.tagClickEvent, false);
  },
  props: {
    data: {
      // 初始所有标签
      // 格式{label: "CNware",value: "1"}
      type: Array,
      default: function() {
        return [];
      },
    },
    value: {
      // 选中的标签
      // dataSource的选中的value数组
      type: Array,
      default: function() {
        return [];
      },
    },
    // 是否支持直接可输入新增标签
    inputAddNewTag: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    canAdd: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
    themeColor: {
      default: function() {
        return '#454852';
      },
    },
    showDropdown: {
      type: Boolean,
      default: function() {
        return true;
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
  methods: {
    tagInputPressEnter() {
      if (!this.inputVal) return;
      let inputVal = this.inputVal;
      let hasdata = false;
      this.dataSource.forEach(item => {
        if (item.label === inputVal) {
          hasdata = true;
        }
      });
      if (!hasdata) {
        this.dataSource.push({
          label: inputVal,
          value: inputVal,
        });
      }
      let tagValueArr = this.linkTagValue ? this.linkTagValue.split(',') : [];
      tagValueArr = tagValueArr.filter(i => i !== inputVal);
      tagValueArr.push(inputVal);
      this.linkTagValue = tagValueArr.join();
      this.$emit('inputNewTag', inputVal);
      this.inputVal = '';
    },
    addTag() {
      this.addTagView = true;
    },
    inputNewTag() {
      let newTagVal = this.newTagVal;
      let hasdata = false;
      this.dataSource.forEach(item => {
        if (item.label === newTagVal) {
          hasdata = true;
        }
      });
      if (!hasdata) {
        this.dataSource.push({
          label: newTagVal,
          value: newTagVal,
        });
        this.$emit('inputNewTag', newTagVal);
        this.addTagView = false;
      } else {
        this.$YMessage.warning('标签已存在！');
      }
    },
    dropdownShow() {
      if (this.$refs.myTagInput) {
        this.$refs.myTagInput.$el.focus();
      }
      this.dropdownView = !this.dropdownView;
    },
    closeTag(obj) {
      this.selectValue = this.selectValue.filter(item => {
        return item.label !== obj.label;
      });
    },
    tagClickEvent(e) {
      if (
        e.target &&
        e.target.className &&
        e.target.className.includes &&
        !e.target.className.includes('y-link-tag-mark') && // 点击选中的tag不需关闭
        !e.target.className.includes('notshrink') && // 点击含有 notshrink 类名的不需关闭
        !e.target.className.includes('y-tag-item')
      ) {
        this.dropdownView = false;
      }
    },
  },
};
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.tagInput {
  // display: inline-block;
  // width: 100%;
  cursor: text;
  text-align: start;
  vertical-align: top;
  position: relative;
  border-radius: 2px;
  line-height: 100%;

  .self-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: @y-height-m;
    padding: @y-spacing-xxs @y-spacing-s;
    color: @y-color-text-regular;
    font-size: @y-font-size-m;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid @y-color-border-dark;
    border-radius: @y-radius-default;
    transition: all 0.3s;
    .y-tag {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      margin-top: 2px;
      margin-bottom: 2px;
      border-radius: 2px;
      &[closable] {
        padding-right: 24px;
      }
      .anticon-close {
        position: absolute;
        right: 7px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .dropdown {
    top: 110%;
    margin: 0;
    padding: 8px;
    color: @y-color-text-regular;
    position: absolute;
    z-index: 1050;
    box-sizing: border-box;
    font-size: 14px;
    font-variant: initial;
    background-color: #fff;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}
.addTag {
  touch-action: manipulation;
  overflow: visible;
  width: 100px;
  list-style-type: none;
  height: 32px;
  line-height: 32px;
  opacity: 1;
  background: #fff;
  padding: 0 10px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  margin-right: 16px;
  margin-bottom: 5px;
  cursor: pointer;
  position: relative;
}
</style>
