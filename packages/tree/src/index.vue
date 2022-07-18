<!-- 受控 -->
<!-- <a-tree v-model="checkedKeys2" v-if="checkedKeys2" v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, slot) in $scopedSlots" :slot="slot" slot-scope="obj">
      <slot :name="slot" :obj="obj" />
    </template>
    <slot v-for="(val, slot) in $scopedSlots" :name="slot" :slot="slot" />
  </a-tree> -->
<!-- 非受控 -->
<!-- <a-tree v-else v-on="$listeners" v-bind="$attrs">
    <template v-for="(val, slot) in $scopedSlots" :slot="slot" slot-scope="obj">
      <slot :name="slot" :treeNode="obj" />
    </template>
    <slot v-for="(val, slot) in $scopedSlots" :name="slot" :slot="slot" />
  </a-tree>
</template> -->
<script>
// 基于 Tree 的基础上再封装
import { Tree } from 'ant-design-vue';
export default {
  name: 'YTree',
  extends: Tree,
};
// export default {
//   name: 'YTree',
//   model: {
//     prop: 'checkedKeys',
//     event: 'update-checkedKeys',
//   },
//   props: {
//     checkedKeys: {
//       type: Array,
//     },
//   },
//   computed: {
//     checkedKeys2: {
//       get() {
//         return this.checkedKeys;
//       },
//       set(val) {
//         this.$emit('update-checkedKeys', val);
//       },
//     },
//   },
// };
</script>
<style lang="less">
@import '~/src/styles/variables/index.less';
.ant-tree li .ant-tree-node-content-wrapper:hover {
  background-color: @y-color-fill-hover;
}
.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: @y-color-primary-light;
  color: @y-color-primary;
}
</style>
