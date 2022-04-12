<template>
  <div style="margin-top:15px;">
    <h4 class="fun-detail-title">{{ title }}</h4>
    <div class="fun-detail-show">{{ detail }}</div>
  </div>
</template>
<script>
export default {
  name: 'funTitleDetail',
  props: {
    title: {
      type: String,
    },
    detail: {
      type: String,
    },
  },
};
</script>
