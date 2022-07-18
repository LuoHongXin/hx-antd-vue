<template>
  <y-form v-on="$listeners" v-bind="$attrs" :labelCol="labelCol2" :wrapperCol="wrapperCol2" class="ant-advanced-search-form">
    <a-row
      :gutter="24"
      style="margin:0;display: flex;
    justify-content: space-between;
    flex-wrap: wrap;"
      :class="{ 'auto-width-form': layoutType === '3col' }"
      :layoutType="layoutType"
    >
      <template v-for="(val, key) in $slots" :slot="key">
        <slot :name="key" v-if="key !== 'btnCol'"></slot>
      </template>
      <!-- 按钮的3col span = Math.abs(表单个数* 8 % 24 - 24) -->
      <a-col class="btn-col" style="padding:0;" :span="span">
        <slot name="btnCol"></slot>
      </a-col>
    </a-row>
  </y-form>
</template>

<script>
export default {
  name: 'YFilterForm',
  props: {
    layoutType: {
      type: String,
      default: '3col', // 3col 三列布局 1col 单列布局
    },
    labelCol: {
      type: Object,
      default: null,
    },
    wrapperCol: {
      type: Object,
      default: null,
    },
  },
  computed: {
    labelCol2: {
      get({ labelCol, layoutType }) {
        let col = 6;
        switch (layoutType) {
          case '3col':
            col = 6;
            break;
          case '1col':
            col = 2;
            break;
        }
        return labelCol ? labelCol : { span: col };
      },
    },
    wrapperCol2: {
      get({ wrapperCol, layoutType }) {
        let col = 18;
        switch (layoutType) {
          case '3col':
            col = 18;
            break;
          case '1col':
            col = 22;
            break;
        }
        return wrapperCol ? wrapperCol : { span: col };
      },
    },
    span: {
      get() {
        let length = this.$slots.default.length;
        if (this.$slots.default) {
          // 计算YFilterFormItem数量
          length = this.$slots.default.filter(i => {
            return i.tag.includes('YFilterFormItem');
          }).length;
        }
        let s = Math.abs(((length * 8) % 24) - 24);
        return s < 10 ? s - 1 : s;
      },
    },
  },
};
</script>

<style lang="less"></style>
