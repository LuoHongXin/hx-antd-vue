<template>
  <div class="y-pagination" v-show="total > 0">
    <a-pagination
      v-if="type === 'mini'"
      size="small"
      :total="total"
      :page-size.sync="pageSize"
      v-model="currentPage"
      @change="handleCurrentChange"
    />
    <a-pagination
      v-else-if="type === 'middle'"
      size="small"
      showLessItems
      ref="middlePagination"
      @showSizeChange="handleSizeChange"
      :total="total"
      :show-quick-jumper="true"
      :show-size-changer="true"
      :show-total="
        (total, range) =>
          `${range[0]}-${range[1]}${$wci18n.t('wh.pagination.item')} ${$wci18n.t('wh.pagination.total').replace('$', total)}`
      "
      :page-size.sync="pageSize"
      v-model="currentPage"
      @change="handleCurrentChange"
    />
    <a-pagination
      v-else
      :pageSizeOptions="pageSizeOptions"
      v-model="currentPage"
      v-bind="$attrs"
      :page-size.sync="pageSize"
      :total="total"
      :show-quick-jumper="true"
      :show-size-changer="true"
      :show-total="
        (total, range) =>
          `${range[0]}-${range[1]}${$wci18n.t('wh.pagination.item')} ${$wci18n.t('wh.pagination.total').replace('$', total)}`
      "
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
    type: {
      type: String,
      default: 'normal',
    },
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
      default: function () {
        return ['10', '20', '30', '50', '100', '200'];
      },
    },
  },
  computed: {
    currentPage: {
      get({ page }) {
        return page;
      },
      set(val) {
        this.$emit('update:page', val);
      },
    },
    allPage: {
      get({ total, pageSize }) {
        return Math.ceil(total / pageSize);
      },
    },
    pageSize: {
      get({ limit }) {
        return limit;
      },
      set(val) {
        this.$emit('update:limit', val);
      },
    },
  },
  created() {
    this.modifyPageText();
  },
  methods: {
    // 修改条/页
    modifyPageText() {
      if (this.type === 'middle') {
        this.$nextTick(function () {
          const middlePagination = this.$refs.middlePagination;
          const middleValue = middlePagination.$el.querySelector('.ant-select-selection-selected-value');
          if (middlePagination && middleValue) {
            middleValue.innerHTML = middleValue.getAttribute('title').match(/\d*/);
          }
        });
      }
    },
    handleSizeChange(current, size) {
      this.$emit('pagination', { page: current, limit: size, total: this.total });
      this.modifyPageText();
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
