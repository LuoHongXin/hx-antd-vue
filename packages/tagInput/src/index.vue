<template>
  <!-- 
  使用API：
  v-model - string，选中的标签，标签值用英文逗号 , 分隔
  data - Array，初始的所有标签 [{label: "CNware",value: "1"}] 显示label，v-model是value
  inputNewTag(val) - Function，新增标签回调
  canAdd - Boolean，是否可以新增，默认 true
  <tag-input v-model="selectTag" :data="tagData" @inputNewTag="inputNewTag"></tag-input> 
  -->
  <div class="tagInput notshrink">
    <div class="self-input notshrink" @click="dropdownShow" :style="'border-color:' + (dropdownView ? themeColor || '' : '')">
      <a-tag v-for="item in selectValue" style="margin-bottom: 5px" :key="item" closable @close="closeTag(item)">{{ item }}</a-tag>
    </div>
    <!-- <a-input mode="tags" placeholder="请输入新标签" v-model="selectValue" /> -->
    <div class="dropdown notshrink" v-if="dropdownView">
      <y-link-tag class="notshrink" :data="dataSource" v-model="linkTagValue" />
      <div v-if="canAdd">
        <div v-if="!addTagView" class="addTag notshrink" @click="addTag">
          <div>
            <a-icon type="plus" style="margin-right: 5px" />
            <span>新增标签</span>
          </div>
        </div>
        <div v-else>
          <a-input class="notshrink" placeholder="请输入新标签" v-model="newTagVal" @pressEnter="inputNewTag" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// function tagClickEvent(e) {
//   console.log(e);
//   if (
//     e.toElement.className &&
//     e.toElement.className.includes &&
//     !e.toElement.className.includes("y-link-tag-mark") && // 点击选中的tag不需关闭
//     !e.toElement.className.includes("notshrink") && // 点击含有 notshrink 类名的不需关闭
//     !e.toElement.className.includes("y-tag-item")
//   ) {
//     this.dropdownView = false;
//   }
// }
export default {
  name: 'YTagInput',
  model: {
    prop: 'value',
    event: 'update-value',
  },
  computed: {
    selectValue: {
      get() {
        let arr = this.linkTagValue.split(',');
        let labelArr = [];
        this.dataSource.forEach((item) => {
          if (arr.includes(item.value)) {
            labelArr.push(item.label);
          }
        });
        if (this.$refs.select) {
          // 解决选择tag时失去焦点问题
          this.$refs.select.focus();
        }
        return labelArr;
      },
      set(val) {
        let valueArr = [];
        this.dataSource.forEach((item) => {
          if (val.includes(item.label)) {
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
        this.$emit('update-value', val.split(','));
      },
    },
  },
  data() {
    return {
      dataSource: [],
      addTagView: false,
      dropdownView: false,
      newTagVal: '',
    };
  },
  created() {
    this.dataSource = this.data;
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
      default: function () {
        return [];
      },
    },
    value: {
      // 选中的标签
      // dataSource的选中的value数组
      type: Array,
      default: function () {
        return [];
      },
    },
    canAdd: {
      type: Boolean,
      default: function () {
        return true;
      },
    },
    themeColor: {
      default: function () {
        return 'red';
      },
    },
  },
  methods: {
    addTag() {
      this.addTagView = true;
    },
    inputNewTag() {
      let newTagVal = this.newTagVal;
      let hasdata = false;
      this.dataSource.forEach((item) => {
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
        this.$message.warning('标签已存在！');
      }
    },
    dropdownShow() {
      this.dropdownView = !this.dropdownView;
    },
    closeTag(obj) {
      this.selectValue = this.selectValue.filter((item) => {
        return item != obj;
      });
    },
    tagClickEvent(e) {
      if (
        e.toElement.className &&
        e.toElement.className.includes &&
        !e.toElement.className.includes('y-link-tag-mark') && // 点击选中的tag不需关闭
        !e.toElement.className.includes('notshrink') && // 点击含有 notshrink 类名的不需关闭
        !e.toElement.className.includes('y-tag-item')
      ) {
        this.dropdownView = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tagInput {
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
  position: relative;
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
    min-height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .dropdown {
    top: 110%;
    margin: 0;
    padding: 8px;
    color: rgba(0, 0, 0, 0.65);
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
.y-link-tag .y-link-tag-list .y-tag-item {
  margin-right: 8px;
}
</style>
