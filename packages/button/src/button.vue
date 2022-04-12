<template>
  <a-button :class="className" :type="type" v-if="icon === 'fresh'" v-bind="$attrs" v-on="$listeners">
    <y-svg-icon class="anticon" icon-class="fresh"/>
    <slot
  /></a-button>
  <a-button v-else :class="className" :icon="icon" :type="type" v-bind="$attrs" v-on="$listeners"><slot /></a-button>
</template>
<script>
export default {
  name: 'YButton',
  computed: {
    className: function() {
      let name = 'y-btn ';
      if (Object.keys(this.$slots).length === 0) name += 'ant-btn-icon-only';
      if (this.type === 'text') name += 'text-btn';
      return name;
    },
  },
  props: {
    icon: {
      type: String,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="less">
@import '~/src/styles/components/button.less';
</style>
