// 基于 confirm 的基础上再封装
import confirm from 'ant-design-vue/es/modal/confirm';


function YConfirm (config) {
  const unClassName = unLetter();
  let newConfig = config;
  const className = config.class ? config.class + " " + unClassName : unClassName;
  const onOk = function () {
    if(config.onOk) config.onOk();
    if(config.move !== false) drag.relMove();
  }
  const onCancel = function () {
    if(config.onCancel) config.onCancel();
    if(config.move !== false) drag.relMove();
  }
  delete newConfig.class;
  delete newConfig.class;
  delete newConfig.class;
  const confirmObj = confirm({
    ...newConfig,
    class:className,
    onOk,
    onCancel,
  })
  const drag = new dragClass({
    trigerArr:["ant-modal-confirm-title","ant-modal-body"],
    drageBox:`.${unClassName} .ant-modal`
  })
  if(config.move !== false) {
    drag.setMove();
  }
  return {
    ...confirmObj,
    unClassName // 唯一的类名
  }
}

export default [
  {
    name:"$YConfirm",
    method:YConfirm
  }
];
// 拖拽类方法
const dragClass = function ({trigerArr,drageBox}={}) {
  this.trigerArr = trigerArr; // 触发拖拽元素类名
  this.drageBox = drageBox; // 拖拽元素
  this.mouseDown2 = null; // 鼠标点击中间函数（为了处理ev传参）
}
dragClass.prototype.mouseDown = function (ev,_this) {
  // 只有头部才可以拖拽
  if (_this.trigerArr.includes(ev.target.className)) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;
    let content = document.querySelector(_this.drageBox);
    content.style.position = 'absolute';
    content.style.padding = 0;
    content.style.left = ev.clientX - parseInt(content.style.width) / 2 + 'px'; // 鼠标点击时默认取弹窗表头中间位置
    content.style.top = ev.clientY + 'px';
    // 滑动事件添加到 body 上会更顺滑，避免滑动过快突然卡顿现象
    document.body.onmousemove = function (ev2) {
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
};
dragClass.prototype.mouseup = function () {
  document.body.onmousemove = null;
};
dragClass.prototype.setMove = function () {
  const _this = this;
  this.mouseDown2 = function(ev){_this.mouseDown(ev,_this)}
  document.body.addEventListener('mousedown', this.mouseDown2);
  document.body.addEventListener('mouseup', this.mouseup);
};
dragClass.prototype.relMove = function() {
  document.body.removeEventListener('mouseup', this.mouseup);
  document.body.removeEventListener('mousedown', this.mouseDown2);
}
// 数字转换成字母
function numTransLetter (num) {
  num = num - 0; // 兼容字符串数字
  return String.fromCharCode(num + 65)
}
// 生成唯一英文字符
function unLetter () {
    const timestamp = new Date().getTime();
    let numArr = JSON.stringify(timestamp).split("");
    const newNumArr = numArr.map(item => {
      return numTransLetter(item)
    });
    return newNumArr.join("")
}