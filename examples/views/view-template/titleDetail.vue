<template>
  <div>
    <h3 class="com-title">{{ title }}</h3>
    <div class="com-text">{{ detail }}</div>
  </div>
</template>
<script>
export default {
  name: 'titleDetail',
  props: {
    title: {
      type: String,
      default: function () {
        return '标题';
      },
    },
    detail: {
      type: String,
      default: function () {
        return '说明';
      },
    },
  },
};
</script>