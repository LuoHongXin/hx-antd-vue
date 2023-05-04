<template>
  <div class="y-describe" :style="{ width: describeWidth }">
    <input id="y-describe-input" v-model="check" class="y-describe-input" type="checkbox" />
    <div :class="`y-describe-text ${check ? 'y-unFold' : 'y-fold'}`" ref="describeText">
      <span class="y-describe-btn" v-show="btnShow" @click="checkClick" v-if="$slots.foldText && check">
        <slot name="foldText"></slot>
      </span>
      <span class="y-describe-btn" v-show="btnShow" @click="checkClick" v-else-if="$slots.unFoldText && !check">
        <slot name="unFoldText"></slot>
      </span>
      <y-text-link class="y-describe-btn" v-show="btnShow" v-else @click="checkClick" type="light">{{
        check ? foldText : unFoldText
      }}</y-text-link>
      <span class="y-describe-content"><slot /></span>
      <span class="y-fake-after" ref="fakeAfter"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YDescribe',
  props: {
    foldText: {
      type: String,
      default: function () {
        return this.$wci18n.t('wh.describe.foldText');
      },
    },
    unFoldText: {
      type: String,
      default: function () {
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
      btnShow: true,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.judgeShow();
    });
  },
  methods: {
    checkClick() {
      this.check = !this.check;
      this.describeWidth = this.check ? '100%' : this.width;
      this.$emit('click', this.check);
    },
    // true 展示按钮，false 隐藏按钮
    judgeShow() {
      this.btnShow =
        this.$refs.fakeAfter.getBoundingClientRect().top - this.$refs.describeText.getBoundingClientRect().top >=
        this.$refs.describeText.clientHeight;
    },
  },
};
</script>
