<template>
  <div class="y-pagination">
    <a-pagination
      :pageSizeOptions="pageSizeOptions"
      v-model="currentPage"
      v-bind="$attrs"
      :page-size.sync="pageSize"
      :total="total"
      :show-quick-jumper="true"
      :show-size-changer="true"
      :show-total="(total, range) => `${range[0]}-${range[1]}项 共${total} 项`"
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
      default: 0,
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
    pageSizeOptions: {
      type: Array,
      default: function() {
        return ['10', '20', '30', '50', '100', '200', '500'];
      },
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
      this.$emit('pagination', { page: current, limit: size, total: this.total });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(page, pageSize) {
      this.$emit('pagination', { page: page, limit: pageSize, total: this.total });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
  },
};
</script>

<style lang="less">
.y-pagination {
  padding-top: @y-spacing-m;
  display: flex;
  justify-content: flex-end;
  .ant-pagination-item,
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link,
  .ant-select-selection,
  .ant-pagination-options-quick-jumper input {
    border-radius: @y-radius-default;
  }
  .ant-pagination-total-text {
    line-height: 33px;
  }
}
</style>
