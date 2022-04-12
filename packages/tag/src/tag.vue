<template>
  <a-tag v-on="$listeners" :color="iconObject.color" v-bind="$attrs" class="y-tag">
    <a-icon v-if="iconObject.iconType" :type="iconObject.iconType" :theme="iconObject.iconTheme" />
    <slot></slot>
  </a-tag>
</template>

<script>
// 根据状态所代表的含义，使用不同的状态标签：
// 1、代表成功：绿色green；
// 2、代表进行中，正常状态：极客蓝geekblue；
// 3、代表错误、失败：红色red；
// 4、代表警示、提示：默认金色 gold（当有两个状态都代表警示时，更严重的警示用日暮volcano，次警示用金色gold ）；

export default {
  name: 'YTag',
  computed: {
    iconObject: {
      get() {
        return this.statusFilter(this.$attrs);
      },
    },
  },
  methods: {
    statusFilter($attrs) {
      let color = $attrs.color;
      let iconType = null;
      let iconTheme = 'filled';
      if (!$attrs.color && $attrs.status) {
        switch ($attrs.status) {
          case 'waiting':
            iconType = 'clock-circle';
            break;
          case 'success':
            color = 'green';
            iconType = 'check-circle';
            break;
          case 'normal':
            color = 'geekblue';
            iconType = 'loading';
            iconTheme = null;
            break;
          case 'error':
            color = 'red';
            iconType = 'close-circle';
            break;
          case 'warning':
            color = 'gold';
            iconType = 'info-circle';
            break;
          case 'seriousWarning':
            color = 'volcano';
            iconType = 'info-circle';
            break;
        }
      }
      return { color, iconType, iconTheme };
    },
  },
};
</script>

<style lang="less">
@import '~/src/styles/components/tag.less';
</style>
