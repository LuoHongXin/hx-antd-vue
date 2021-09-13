<template>
  <div class="y-pagination">
    <a-pagination
      size="small"
      v-model="currentPage"
      v-bind="$attrs"
      :page-size.sync="pageSize"
      :hide-on-single-page="true"
      :total="total"
      show-quick-jumper
      show-size-changer
      :show-total="total => `共${allPage}页 ${total} 项`"
      @change="handleCurrentChange"
      @showSizeChange="handleSizeChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '../../../src/utils/scroll-to';
export default {
  name: 'YPagination',
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val);
      },
    },
    allPage: {
      get() {
        return Math.ceil(this.total / this.pageSize);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit('update:limit', val);
      },
    },
  },
  methods: {
    handleSizeChange(current, size) {
      this.$emit('pagination', { page: current, limit: size });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(page, pageSize) {
      this.$emit('pagination', { page: page, limit: pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.y-pagination {
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
