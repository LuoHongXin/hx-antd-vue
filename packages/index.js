/*
 * @Author: zhangbinzhbb
 * @Date: 2021-02-24 17:23:33
 * @Last Modified by: zhangbiaobin
 * @Last Modified time: 2021-02-24 17:23:33
 */

const {
  version,
  name
} = require('../package.json');
import {
  /* eslint-disable no-unused-vars */
  Style,
  Ybutton,
  Ypagination,
  // Ycommon,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YcustomDatePicker,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput
} from './module';

// ...如果还有的话继续添加
const components = [
  Ybutton,
  Ypagination,
  // Ycommon,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YcustomDatePicker,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput
  // ...如果还有的话继续添加
];

// 方法类的组件
import methods from "./methods";

// 公共的vue实例，有些方法必须得在vue实例中注册才能使用，所以Bus就是解决这个问题的公共Vue
import Bus from "./Bus";

const displayVersion = () => {
  Function(`
    window.console && console.log('%c${name} %cV${version} ', 'color: #1890ff;font-weight: 500;font-size: 20px;font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;', 'color: #ccc;');
  `)();
};

// 定义install方法，接收Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
  displayVersion();
  Vue.prototype.$YSpin = Yspin; // 全局
  Vue.prototype.$Bus = Bus; // 全局
  Vue.prototype.$YGetTableDragHeader = Bus.getTableDragHeader; // 全局

  // 注入全局方法
  methods.forEach(item => {
    Vue.prototype[item.name] = item.method
  })
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install, // 全量引入 // 所有组件，必须具有install，才能使用Vue.use()
  Ybutton, // 组件列表
  Ypagination,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YcustomDatePicker,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput
};

export default {
  install, // 全量引入 // 所有组件，必须具有install，才能使用Vue.use()
  Ybutton, // 组件列表
  Ypagination,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YcustomDatePicker,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput
};