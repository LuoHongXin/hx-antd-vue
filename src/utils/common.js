export const eleUtils = {
  findIsIncludeElement: function(el, clsname) {
    let res = null;
    if (Array.isArray(clsname)) {
      clsname.forEach(c => {
        if (this.judeElement(el, c)) {
          res = true;
        }
      });
    } else {
      res = this.judeElement(el, clsname);
    }
    if (res === null && el) {
      return this.findIsIncludeElement(el.parentNode, clsname);
    } else {
      return res;
    }
  },
  /** * @param {*} el dom节点 *
   * @param {*} clsname 类名或id *
   * @return {*} true el 为目标类名或id的子节点，false 为不是，null 是可以继续往上找 */

  judeElement: function(el, clsname) {
    if (
      (el && el.parentNode && el.parentNode.className && el.parentNode.className.includes && el.parentNode.className.includes(clsname)) ||
      (el && el.className && el.className.includes && el.className.includes(clsname))
    ) {
      return true;
    }
    if (
      (el && el.parentNode && el.parentNode.id && el.parentNode.id.includes && el.parentNode.id.includes(clsname)) ||
      (el && el.id && el.id.includes && el.id.includes(clsname))
    ) {
      return true;
    }
    // 找到头为false不存在
    if (!el || (el && el.parentNode && el.parentNode.nodeName === '#document')) {
      return false;
    }
    return null;
  },
};
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
export function deepCopy(obj, deep = true) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object' && deep ? deepCopy(obj[key]) : obj[key];
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
export const dragClass = function({ trigerArr, tooltipTarget, drageBox, eventTarget, setEvent, relEvent, placement, type } = {}) {
  this.trigerArr = trigerArr || null; // 触发拖拽元素类名
  this.drageBox = drageBox; // 拖拽元素
  this.eventTarget = eventTarget || document.body; // 鼠标事件触发对象，默认为document.body
  this.tooltipTarget = tooltipTarget || document.body; // 鼠标事件触发对象，默认为document.body
  this.transMiddelEvent = null; // 鼠标点击中间函数（为了处理ev传参）
  this.setEvent = setEvent || null;
  this.relEvent = relEvent || null;
  this.content = document.querySelector(drageBox) || null;
  this.placement = placement || 'rightTop';
  this.type = type;
};
dragClass.prototype.mouseDown = function(ev, _this) {
  // 避免初始化的时候没获取到节点
  if (!this.content) {
    this.content = document.querySelector(this.drageBox);
  }
  // 只有触发拖拽元素类名才可以拖拽
  if (!_this.trigerArr || _this.trigerArr.includes(ev.target.className)) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;
    const eventTarget = this.eventTarget;
    let content = this.content;
    content.style.position = 'absolute';
    content.style.padding = 0;
    content.style.left = ev.clientX - eventTarget.getBoundingClientRect().left - offsetX + 'px';
    content.style.top = ev.clientY - eventTarget.getBoundingClientRect().top - offsetY + 'px';
    content.style.bottom = 'unset';
    content.style.right = 'unset';
    // 滑动事件添加到 body 上会更顺滑，避免滑动过快突然卡顿现象
    eventTarget.onmousemove = function(ev2) {
      let left = ev2.clientX - eventTarget.getBoundingClientRect().left - offsetX;
      let top = ev2.clientY - eventTarget.getBoundingClientRect().top - offsetY;
      const maxLeft = eventTarget.clientWidth - content.offsetWidth;
      const maxTop = eventTarget.clientHeight - content.offsetHeight;
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
  this.eventTarget.onmousemove = null;
};
dragClass.prototype.mouseOver = function(ev, _this) {
  // 只有触发拖拽元素类名才可以拖拽
  if (!_this.trigerArr || _this.trigerArr.includes(ev.target.className)) {
    let content = this.content;
    content.style.display = 'block';
    content.style.position = 'fixed';
    const tooltipTarget = this.tooltipTarget;
    if (this.placement === 'bottomRight') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight + 'px';
    } else if (this.placement === 'bottomLeft') {
      content.style.left = tooltipTarget.getBoundingClientRect().left - content.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight + 'px';
    } else if (this.placement === 'bottom') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth / 2 - content.offsetWidth / 2 + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight + 'px';
    } else if (this.placement === 'topRight') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top - content.offsetHeight + 'px';
    } else if (this.placement === 'topLeft') {
      content.style.left = tooltipTarget.getBoundingClientRect().left - content.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top - content.offsetHeight + 'px';
    } else if (this.placement === 'top') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth / 2 - content.offsetWidth / 2 + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top - content.offsetHeight + 'px';
    } else if (this.placement === 'rightTop') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top - content.offsetHeight + 'px';
    } else if (this.placement === 'rightBottom') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight + 'px';
    } else if (this.placement === 'right') {
      content.style.left = tooltipTarget.getBoundingClientRect().left + tooltipTarget.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight / 2 - content.offsetHeight / 2 + 'px';
    } else if (this.placement === 'leftTop') {
      content.style.left = tooltipTarget.getBoundingClientRect().left - content.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top - content.offsetHeight + 'px';
    } else if (this.placement === 'leftBottom') {
      content.style.left = tooltipTarget.getBoundingClientRect().left - content.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight + 'px';
    } else if (this.placement === 'left') {
      content.style.left = tooltipTarget.getBoundingClientRect().left - content.offsetWidth + 'px';
      content.style.top = tooltipTarget.getBoundingClientRect().top + tooltipTarget.offsetHeight / 2 - content.offsetHeight / 2 + 'px';
    }
    content.style.bottom = 'unset';
    content.style.right = 'unset';
  }
};
dragClass.prototype.mouseOut = function() {
  this.content.style.display = 'none';
};
dragClass.prototype.setMove = function() {
  // 在目标元素内滑动拖拽
  const _this = this;
  if (this.type === 'tooltip') {
    this.setEvent = 'mouseover';
    this.relEvent = 'mouseout';
    this.transMiddelEvent = function(ev) {
      _this.mouseOver(ev, _this);
    };
    this.relMove();
    this.tooltipTarget.addEventListener(this.setEvent, this.transMiddelEvent);
    this.tooltipTarget.addEventListener(this.relEvent, this.mouseOut.bind(this));
  } else {
    // 默认按住拖拽
    this.setEvent = 'mousedown';
    this.relEvent = 'mouseup';
    this.transMiddelEvent = function(ev) {
      _this.mouseDown(ev, _this);
    };
    this.eventTarget.addEventListener(this.setEvent, this.transMiddelEvent);
    this.eventTarget.addEventListener(this.relEvent, this.mouseup.bind(this));
  }
};
dragClass.prototype.relMove = function() {
  if (this.type === 'tooltip') {
    this.tooltipTarget.removeEventListener(this.setEvent, this.transMiddelEvent);
    this.tooltipTarget.removeEventListener(this.relEvent, this.mouseOut.bind(this));
  } else {
    this.eventTarget.removeEventListener(this.relEvent, this.transMiddelEvent);
    this.eventTarget.removeEventListener(this.setEvent, this.mouseup.bind(this));
  }
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

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 * @example
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * safeGet(object, 'a[0].b.c')
 * // => 3
 *
 * safeGet(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * safeGet(object, 'a.b.c', 'default')
 * // => 'default'
 */
export function safeGet(source, path, defaultValue = undefined) {
  // a[3].b -> a.3.b -> [a,3,b]
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = source;
  for (const key of paths) {
    result = Object(result)[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}

export function useConfigInjectProp(config, obj, prop, defaultValue) {
  //是否传prop
  const isProp = Object.prototype.hasOwnProperty.call(obj, prop);
  if (isProp) return defaultValue;

  //是否传全局配置
  const isConfig = Object.prototype.hasOwnProperty.call(config, prop);
  if (!isConfig) return defaultValue;
  return config && config[prop];
}
