<script>
// 基于 a-model 的基础上再封装
import { Modal } from 'ant-design-vue';
export default {
  name: 'YModal',
  extends: Modal,
  props: {
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
    mouseDown: function(ev) {
      // 只有头部才可以拖拽
      if (ev.target.className === 'ant-modal-header' || ev.target.className === 'ant-modal-title') {
        const offsetX = ev.offsetX;
        const offsetY = ev.offsetY;
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
        content.style.position = 'absolute';
        content.style.padding = 0;
        content.style.left = ev.clientX - parseInt(content.style.width) / 2 + 'px'; // 鼠标点击时默认取弹窗表头中间位置
        content.style.top = ev.clientY + 'px';
        // 滑动事件添加到 body 上会更顺滑，避免滑动过快突然卡顿现象
        document.body.onmousemove = function(ev2) {
          let left = ev2.clientX - offsetX;
          let top = ev2.clientY - offsetY;
          const maxLeft = document.body.clientWidth - content.offsetWidth;
          const maxTop = document.body.clientHeight - content.offsetHeight;
          if (left <= 0) {
            left = 0;
          } else if (left >= maxLeft && maxLeft > 0) {
            left = maxLeft;
          }
          if (top <= 0) {
            top = 0;
          } else if (top >= maxTop && maxTop > 0) {
            top = maxTop;
          }
          content.style.left = left + 'px';
          content.style.top = top + 'px';
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
