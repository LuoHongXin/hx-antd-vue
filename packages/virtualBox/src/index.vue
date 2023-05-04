<template>
  <div
    class="y-virtual-box-container"
    :style="{
      height: height,
    }"
    ref="container"
  >
    <slot name="virtualBox" :showData="showData"></slot>
    <div
      :style="{
        height: scrollHeight,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'YVirtualBox',
  props: {
    height: {
      type: String,
      default: '517px',
    },
    // 所有的数据
    dataSource: {
      type: Array,
      require: true,
      default() {
        return [];
      },
    },
    rowHeight: {
      type: Number,
      default: 47,
    },
    // 渲染真实dom的数量
    realDomNum: {
      type: Number,
      default: 10,
    },
    //禁用滚动底部触发事件
    infiniteScrollDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // 根据所有数据计算滚动高度
    scrollHeight({ rowHeight, dataSource }) {
      return rowHeight * dataSource.length + 'px';
    },
    showData({ dataSource, start, end }) {
      return dataSource.slice(start, end);
    },
  },
  data() {
    return {
      start: 0,
      end: this.realDomNum,
    };
  },
  mounted() {
    this.$nextTick(function() {
      // 监听容器滚动事件
      this.$refs.container.addEventListener('scroll', this.handleScroll);
    });
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const tableHeight = this.$refs.container.clientHeight;
      const scrollTop = this.$refs.container.scrollTop;
      const rowHeight = this.rowHeight;
      const realDomNum = this.realDomNum;
      const dataLength = this.dataSource.length;
      const visibleStart = Math.max(0, Math.floor(scrollTop / rowHeight));
      const visibleEnd = Math.min(dataLength, Math.ceil((scrollTop + tableHeight) / rowHeight) + realDomNum);
      if (visibleStart !== this.start || visibleEnd !== this.end) {
        this.start = Math.min(visibleStart, dataLength - realDomNum);
        this.end = visibleEnd;
      }

      if (dataLength === this.end && scrollTop >= parseInt(this.scrollHeight)) {
        if (this.infiniteScrollDisabled || (this.oldScrollTop && this.oldScrollTop === scrollTop)) return;
        this.$emit('handleInfiniteOnLoad');
        this.oldScrollTop = scrollTop;
      }
    },
    resetOldScrollTop() {
      this.oldScrollTop = null;
    },
  },
};
</script>
