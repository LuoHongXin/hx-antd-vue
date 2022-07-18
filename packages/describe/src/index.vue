<template>
  <div class="y-describe" :style="{ width: describeWidth }">
    <input id="y-describe-input" v-model="check" class="y-describe-input" type="checkbox" />
    <div class="y-describe-text">
      <y-text-link class="y-describe-btn" @click="checkClick" type="light">{{ check ? foldText : unFoldText }}</y-text-link>
      <span class="y-describe-content"><slot /></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YDescribe',
  props: {
    foldText: {
      type: String,
      default: function() {
        return this.$wci18n.t('wh.describe.foldText');
      },
    },
    unFoldText: {
      type: String,
      default: function() {
        return this.$wci18n.t('wh.describe.unFoldText');
      },
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
  },
  data() {
    return {
      check: false,
      describeWidth: this.width,
    };
  },
  methods: {
    checkClick() {
      this.check = !this.check;
      this.describeWidth = this.check ? '100%' : this.width;
      this.$emit('click', this.check);
    },
  },
};
</script>
<style lang="less">
.y-describe {
  display: flex; // 用于给 text 的before 做计算
  overflow: hidden;
  .y-describe-text {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    position: relative;
    line-height: 1.5;
    max-height: 1.5em;
    transition: 0.3s max-height;
    &::before {
      content: '';
      height: calc(100% - 21px); // 集成text的高度，减去 btn 的高度，使btn正好在最下
      float: right; // 考虑btn要在右下角，为了把它挤下去，所有也要浮动
    }
    &::after {
      // 文本不够的时候该元素会挡住 btn ,文本足够的时候该元素会被挤下，这样 btn 就不会被挡住，这样就做到根据文本数量，自动显示隐藏 btn 的效果
      content: '';
      width: 999vw;
      height: 999vw;
      position: absolute;
      box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
      margin-left: -100px;
    }
    .y-describe-content {
      // 文本样式
      word-break: break-all; // 解决只有中文自动换行，英文和数字不自动换行问题
    }
    .y-describe-btn {
      // 按钮样式
      position: relative;
      float: right;
      clear: both;
      margin-left: 20px;
      cursor: pointer;
      color: #3158cc;
      &::before {
        // 省略号
        content: '...';
        position: absolute;
        left: -5px;
        color: #333;
        transform: translateX(-100%);
      }
    }
  }
  .y-describe-input {
    display: none;
  }
  // 选中的时候
  .y-describe-input:checked + .y-describe-text {
    max-height: none; // 不限制文本高度
  }
  .y-describe-input:checked + .y-describe-text::after {
    visibility: hidden; //
  }

  .y-describe-input:checked + .y-describe-text .y-describe-btn::before {
    // 隐藏省略号
    visibility: hidden;
  }
}
</style>
