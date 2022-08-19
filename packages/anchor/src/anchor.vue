<template>
  <a-anchor class="y-anchor" @click="handleAnchorClick" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-anchor>
</template>

<script>
export default {
  name: 'YAnchor',
  methods: {
    handleAnchorClick(e, link) {
      // 阻止点击的默认事件修改路由
      e.preventDefault();
      let srcolls = document.querySelector(link.href);
      if (srcolls) {
        srcolls.scrollIntoView(true);
      }
    },
  },
};
</script>
