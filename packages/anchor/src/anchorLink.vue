<template>
  <a-anchor-link class="y-anchor-lin" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-anchor-link>
</template>

<script>
export default {
  name: 'YAnchorLink',
};
// import { Anchor } from 'ant-design-vue';
// console.log(Anchor);
// export default {
//   name: 'YAnchorLink',
//   extends: Anchor.Link,
// };
</script>
