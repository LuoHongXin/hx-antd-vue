// 基于 confirm 的基础上再封装
import confirm from 'ant-design-vue/es/modal/confirm';
import colorVariables from '../../src/styles/variables/index.less';
import { dragClass, unLetter } from '../../src/utils/common';
function YConfirm(config) {
  const unClassName = unLetter();
  let newConfig = Object.assign({ autoFocusButton: null }, config);
  const className = (newConfig.class ? newConfig.class + ' ' + unClassName : unClassName) + ' y-confirm';
  const onOk = function() {
    if (newConfig.onOk) newConfig.onOk();
    if (newConfig.move !== false) drag.relMove();
  };
  const onCancel = function() {
    if (newConfig.onCancel) newConfig.onCancel();
    if (newConfig.move !== false) drag.relMove();
  };
  newConfig.centered = 'centered' in newConfig ? newConfig.centered : true;
  newConfig.okText = newConfig.okText || this.$wci18n.t('wh.confirm.ok');
  newConfig.cancelText = newConfig.cancelText || this.$wci18n.t('wh.confirm.cancel');
  if (!newConfig.width) newConfig.width = 480;
  delete newConfig.class;
  const h = this.$createElement;
  const confirmObj = confirm({
    ...newConfig,
    class: className,
    type: 'confirm',
    icon: newConfig.icon
      ? newConfig.icon
      : () =>
          h('a-icon', {
            style: {
              color: colorVariables.yColorInfo,
            },
            props: {
              type: 'question-circle',
              theme: 'filled',
            },
          }),
    onOk,
    onCancel,
  });
  const drag = new dragClass({
    trigerArr: ['ant-modal-confirm-title', 'ant-modal-body'],
    drageBox: `.${unClassName} .ant-modal`,
  });
  if (newConfig.move !== false) {
    drag.setMove();
  }
  return {
    ...confirmObj,
    unClassName, // 唯一的类名
  };
}

export default YConfirm;
// 拖拽类方法
// const dragClass = function({ trigerArr, drageBox } = {}) {
//   this.trigerArr = trigerArr; // 触发拖拽元素类名
//   this.drageBox = drageBox; // 拖拽元素
//   this.mouseDown2 = null; // 鼠标点击中间函数（为了处理ev传参）
// };
// dragClass.prototype.mouseDown = function(ev, _this) {
//   // 只有头部才可以拖拽
//   if (_this.trigerArr.includes(ev.target.className)) {
//     const offsetX = ev.offsetX;
//     const offsetY = ev.offsetY;
//     let content = document.querySelector(_this.drageBox);
//     content.style.position = 'absolute';
//     content.style.padding = 0;
//     content.style.left = ev.clientX - parseInt(content.style.width) / 2 + 'px'; // 鼠标点击时默认取弹窗表头中间位置
//     content.style.top = ev.clientY + 'px';
//     // 滑动事件添加到 body 上会更顺滑，避免滑动过快突然卡顿现象
//     document.body.onmousemove = function(ev2) {
//       let left = ev2.clientX - offsetX;
//       let top = ev2.clientY - offsetY;
//       const maxLeft = document.body.clientWidth - content.offsetWidth;
//       const maxTop = document.body.clientHeight - content.offsetHeight;
//       if (left <= 0) {
//         left = 0;
//       } else if (left >= maxLeft && maxLeft > 0) {
//         left = maxLeft;
//       }
//       if (top <= 0) {
//         top = 0;
//       } else if (top >= maxTop && maxTop > 0) {
//         top = maxTop;
//       }
//       content.style.left = left + 'px';
//       content.style.top = top + 'px';
//     };
//   }
// };
// dragClass.prototype.mouseup = function() {
//   document.body.onmousemove = null;
// };
// dragClass.prototype.setMove = function() {
//   const _this = this;
//   this.mouseDown2 = function(ev) {
//     _this.mouseDown(ev, _this);
//   };
//   document.body.addEventListener('mousedown', this.mouseDown2);
//   document.body.addEventListener('mouseup', this.mouseup);
// };
// dragClass.prototype.relMove = function() {
//   document.body.removeEventListener('mouseup', this.mouseup);
//   document.body.removeEventListener('mousedown', this.mouseDown2);
// };
