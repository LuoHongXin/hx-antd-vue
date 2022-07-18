// 防抖
export function debounce(f, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...args);
    }, wait);
  };
}
// 深度拷贝对象或数组
export function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
/**
 * @description 数组扁平化
 * @author luohongxin
 * @date 2/05/2022
 * @param {*} {
 *  带child为引用对象类型数组，不带child为普通数组扁平化
 * }
 * @return {*}
 */
export const flatArr = {
  get(arr = [], child) {
    if (child) {
      return arr.reduce((t, v) => {
        t.push(v);
        if (Array.isArray(v[child])) {
          t = t.concat(this.get(v[child], child));
        }
        return t;
      }, []);
    } else {
      return arr.reduce((t, v) => t.concat(Array.isArray(v) ? this.get(v) : v), []);
    }
  },
};

// 支持移动类
export const dragClass = function({ trigerArr, drageBox, eventTarget } = {}) {
  this.trigerArr = trigerArr || null; // 触发拖拽元素类名
  this.drageBox = drageBox; // 拖拽元素
  this.eventTarget = eventTarget || document.body; // 鼠标事件触发对象，默认为document.body
  this.mouseDown2 = null; // 鼠标点击中间函数（为了处理ev传参）
};
dragClass.prototype.mouseDown = function(ev, _this) {
  // 只有触发拖拽元素类名才可以拖拽
  if (!_this.trigerArr || _this.trigerArr.includes(ev.target.className)) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;
    let content = document.querySelector(_this.drageBox);
    content.style.position = 'absolute';
    content.style.padding = 0;
    content.style.left = ev.clientX - parseInt(content.style.width) / 2 + 'px'; // 鼠标点击时默认取弹窗表头中间位置
    content.style.top = ev.clientY + 'px';
    content.style.bottom = 'unset';
    content.style.right = 'unset';
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
};
dragClass.prototype.mouseup = function() {
  document.body.onmousemove = null;
};
dragClass.prototype.setMove = function() {
  const _this = this;
  this.mouseDown2 = function(ev) {
    _this.mouseDown(ev, _this);
  };
  this.eventTarget.addEventListener('mousedown', this.mouseDown2);
  this.eventTarget.addEventListener('mouseup', this.mouseup);
};
dragClass.prototype.relMove = function() {
  this.eventTarget.removeEventListener('mouseup', this.mouseup);
  this.eventTarget.removeEventListener('mousedown', this.mouseDown2);
};

// 数字转换成字母
export function numTransLetter(num) {
  num = num - 0; // 兼容字符串数字
  return String.fromCharCode(num + 65);
}
// 生成唯一英文字符
export function unLetter() {
  const timestamp = new Date().getTime();
  let numArr = JSON.stringify(timestamp).split('');
  const newNumArr = numArr.map(item => {
    return numTransLetter(item);
  });
  return newNumArr.join('');
}
/**
 * @description 递归树并返回目标节点的经历节点
 * @author luohongxin
 * @date 27/05/2022
 * @param treeData - Array,
 * @param targetKey - 目标值,
 * @return {*} Array
 */
export const getTreeParentKeys = {
  get(treeData, targetKey, key = 'key', children = 'children') {
    return treeData.reduce((t, v) => {
      if (t.includes(targetKey)) return t;
      if (v[key] === targetKey) {
        t.push(v[key]);
        return t;
      }
      if ((!v[children] || !v[children].length === 0) && v[key] !== targetKey) return [];
      t.push(v[key]);
      let childKeys = this.get(v[children], targetKey, key, children);
      if (childKeys.length > 0) return t.concat(childKeys);
      return [];
    }, []);
  },
};
