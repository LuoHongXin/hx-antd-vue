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
        :allowClear="false"
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
    inputWidth({ inputVal }) {
      return inputVal.length * 9 + 12 + 'px';
    },
    selectValue: {
      get({ linkTagValue, dataSource, $refs }) {
        let arr = linkTagValue.split(',');
        let labelArr = [];
        let newArr = [];
        dataSource.forEach(item => {
          if (arr.includes(item.value) && !labelArr.includes(item.label)) {
            labelArr.push(item.label);
            newArr.push(item);
          }
        });
        if ($refs.select) {
          // 解决选择tag时失去焦点问题
          $refs.select.focus();
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
      get({ value }) {
        return value.join(',');
      },
      set(val) {
        this.$emit('update-value', val ? val.split(',') : []);
      },
    },

    widthSizeClass({ autoWidth, widthSize }) {
      return autoWidth ? '' : `y-form-width-${widthSize}`;
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
      this.$emit('click');
      this.dropdownView = !this.dropdownView;
    },
    closeTag(obj) {
      this.selectValue = this.selectValue.filter(item => {
        return item.label !== obj.label;
      });
      this.$emit('close', obj);
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
