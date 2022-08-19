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
