<template>
  <a-col :span="span" style="padding:0;">
    <y-form-item v-on="$listeners" v-bind="$attrs">
      <template v-for="(val, key) in $slots" :slot="key">
        <slot :name="key"></slot>
      </template>
    </y-form-item>
  </a-col>
</template>

<script>
export default {
  name: 'YFilterFormItem',
  computed: {
    span: {
      get({ $parent }) {
        if (!$parent.$attrs.layoutType) return 7;
        let span = 7;
        switch ($parent.$attrs.layoutType) {
          case '3col':
            span = 7;
            break;
          case '1col':
            span = 24;
            break;
        }
        return span;
      },
    },
  },
};
</script>

<style lang="less"></style>
