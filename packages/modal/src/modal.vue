<template>
  <a-modal
    v-model="visible"
    v-if="value !== null"
    :maskClosable="maskClosable"
    v-on="$listeners"
    :width="sizeWidth"
    :title="title"
    :centered="centered"
    v-bind="$attrs"
    class="y-modal"
  >
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-modal>
  <a-modal
    v-else
    :title="title"
    :centered="centered"
    :maskClosable="maskClosable"
    v-on="$listeners"
    :width="sizeWidth"
    v-bind="$attrs"
    class="y-modal"
  >
    <template v-for="(val, key) in $slots" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-modal>
</template>
<script>
// 基于 a-model 的基础上再封装
// import { Modal } from 'ant-design-vue';
import { sizeWidth } from '../../dataMap.js';
export default {
  name: 'YModal',
  // extends: Modal,
  model: {
    prop: 'value',
    event: 'update-value',
  },
  props: {
    value: {
      type: Boolean,
      default: null,
    },
    centered: {
      type: Boolean,
      default: true,
    },
    // 是否支持移动窗口，默认为 true 支持移动
    move: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
    maskClosable: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    dragSet: {
      type: Object,
      default: function() {
        return {};
      },
    },
    size: {
      type: String,
      default: 'm',
    },
    title: {
      type: String,
    },
  },
  computed: {
    sizeWidth: {
      get({ size, $attrs }) {
        return $attrs.width ? $attrs.width : sizeWidth[size] || sizeWidth.m;
      },
    },
    visible: {
      get({ $attrs, value }) {
        if (value !== null) return value;
        return $attrs.visible;
      },
      set(val) {
        this.$emit('update-value', val);
      },
    },
  },
  mounted() {
    if (this.visible) {
      // 打开弹窗添加移动事件
      this.setMove();
      return;
    }
    // 关闭弹窗移除移动事件
    this.relMove();
  },
  watch: {
    visible: function(val) {
      // 打开弹窗添加移动事件
      if (val && this.move) {
        this.setMove();
        return;
      }
      // 关闭弹窗移除移动事件
      this.relMove();
    },
  },
  beforeDestroy() {
    this.relMove();
  },
  methods: {
    judgeBoundry(content, left, top) {
      const { dragSet } = this;
      const maxLeft = dragSet.maxLeft || document.body.clientWidth - content.offsetWidth;
      const minLeft = dragSet.minLeft || 0;
      const minTop = dragSet.minTop || 0;
      const maxTop = maxLeft.maxTop || document.body.clientHeight - content.offsetHeight;
      if (left <= minLeft) {
        left = minLeft;
      } else if (left >= maxLeft && maxLeft > 0) {
        left = maxLeft;
      }
      if (top <= minTop) {
        top = minTop;
      } else if (top >= maxTop && maxTop > 0) {
        top = maxTop;
      }
      content.style.left = left + 'px';
      content.style.top = top + 'px';
    },
    mouseDown: function(ev) {
      const { judgeBoundry } = this;
      // 只有头部才可以拖拽
      if (ev.target.className === 'ant-modal-header' || ev.target.className === 'ant-modal-title') {
        //获取间距
        const getSpacing = (el, type = 'left') => {
          let style = window.getComputedStyle(el, null);
          return parseFloat(style.getPropertyValue(`padding-${type}`));
        };
        const offsetX = ev.target.className === 'ant-modal-title' ? ev.offsetX + getSpacing(ev.target.parentElement) : ev.offsetX;
        const offsetY = ev.target.className === 'ant-modal-title' ? ev.offsetY + getSpacing(ev.target.parentElement, 'top') : ev.offsetY;
        const contentArr = document.getElementsByClassName('ant-modal');
        let content = null;
        const searchContent = (arr, index) => {
          if (!arr[index]) return {};
          if (arr[index].style.display == 'none') {
            searchContent(arr, index - 1);
            return;
          }
          content = arr[index];
        };
        searchContent(contentArr, contentArr.length - 1);
        content.style.position = 'fixed';
        content.style.padding = 0;
        judgeBoundry(content, ev.clientX - offsetX, ev.clientY - offsetY);
        // 滑动事件添加到 body 上会更顺滑，避免滑动过快突然卡顿现象
        document.body.onmousemove = function(ev2) {
          let left = ev2.clientX - offsetX;
          let top = ev2.clientY - offsetY;
          judgeBoundry(content, left, top);
        };
      }
    },
    mouseup: function() {
      document.body.onmousemove = null;
    },
    setMove() {
      document.body.addEventListener('mousedown', this.mouseDown);
      document.body.addEventListener('mouseup', this.mouseup);
    },
    relMove() {
      document.body.removeEventListener('mouseup', this.mouseup);
      document.body.removeEventListener('mousedown', this.mouseDown);
    },
  },
};
</script>
