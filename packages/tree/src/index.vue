<template>
  <!-- 受控 -->
  <a-tree v-model="checkedKeys2" v-if="checkedKeys2" v-on="$listeners" v-bind="$attrs">
    <slot v-for="(val, slot) in $slots" :name="slot" :slot="slot" />
  </a-tree>
  <!-- 非受控 -->
  <a-tree v-else v-on="$listeners" v-bind="$attrs">
    <slot v-for="(val, slot) in $slots" :name="slot" :slot="slot" />
  </a-tree>
</template>
<script>
export default {
  name: 'YTree',
  model: {
    prop: 'checkedKeys',
    event: 'update-checkedKeys',
  },
  props: {
    checkedKeys: {
      type: Array,
    },
  },
  computed: {
    checkedKeys2: {
      get() {
        return this.checkedKeys;
      },
      set(val) {
        this.$emit('update-checkedKeys', val);
      },
    },
  },
};
</script>
<style lang="less">
.ant-tree li .ant-tree-node-content-wrapper:hover {
  background-color: @y-color-fill-hover;
}
.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: @y-color-primary-light;
}
</style>
