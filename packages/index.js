const { version, name } = require('../package.json');
import {
  /* eslint-disable no-unused-vars */
  Ybutton,
  Ypagination,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YCheckbox,
  YCheckboxGroup,
  YtextLink,
  YInput,
  YTextarea,
  YInputNumber,
  YSteps,
  YDatePicker,
  YAutoComplete,
  YRadio,
  YSwitch,
  YSlider,
  YBadge,
  YCollapse,
  YEmpty,
  YModelTable,
  YButtonGroup,
  YForm,
  YFormModel,
  YTransfer,
  YTimePicker,
  YTabs,
  YTimeLine,
  YTooltip,
  YPopconfirm,
  YPopover,
  YDrawer,
  YLoading,
  YAlert,
  YProgress,
  PageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YConfirm,
  YNotification,
  YMessage,
  YInfo,
  YSuccess,
  YError,
  YWarning,
  YDescribe,
  YUpload,
  YEditor,
  YJsonViewer,
} from './module';

// ...如果还有的话继续添加
const components = [
  Ybutton,
  Ypagination,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YCheckbox,
  YCheckboxGroup,
  YtextLink,
  YInput,
  YTextarea,
  YInputNumber,
  YSteps,
  YDatePicker,
  YAutoComplete,
  YRadio,
  YSwitch,
  YSlider,
  YBadge,
  YCollapse,
  YEmpty,
  YModelTable,
  YButtonGroup,
  YForm,
  YFormModel,
  YTransfer,
  YTimePicker,
  YTabs,
  YTimeLine,
  YTooltip,
  YPopconfirm,
  YPopover,
  YDrawer,
  YLoading,
  YAlert,
  YProgress,
  PageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YDescribe,
  YUpload,
  // ...如果还有的话继续添加
];

// 方法类的组件
import methods from './methods';
// 复制
import VueClipboard from 'vue-clipboard2';
// 引入组件使用的icon
import '@src/icons';
// 引入 antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
// 公共的vue实例，有些方法必须得在vue实例中注册才能使用，所以Bus就是解决这个问题的公共Vue
import Bus from './Bus';

// 国际化
import VueI18n from 'vue-i18n';
import lang from '@src/locale';
const displayVersion = () => {
  Function(`
    window.console && console.log('%c${name} %cV${version} ', 'color: #1890ff;font-weight: 500;font-size: 20px;font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;', 'color: #ccc;');
  `)();
};

// 定义install方法，接收Vue作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  Vue.use(Antd);
  // 国际化
  Vue.use(VueI18n);
  const locale = localStorage.getItem('lang') || 'zh_CN';
  // 通过选项创建 VueI18n 实例
  const wci18n = new VueI18n({
    locale, // 设置地区
    messages: lang, // 设置地区信息
  });
  // 遍历注册所有组件
  components.map(component => component.install(Vue));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
  displayVersion();
  Vue.prototype.$YSpin = Yspin; // 全局
  Vue.prototype.$Bus = Bus; // 全局
  Vue.prototype.$YGetTableDragHeader = Bus.getTableDragHeader; // 全局
  Vue.prototype.$YGetTablePagination = Bus.getTablePagination; // 全局
  Vue.prototype.$wci18n = wci18n; // 全局
  window.wci18n = wci18n;
  Vue.use(VueClipboard);
  // 注入全局方法
  methods.forEach(item => {
    Vue.prototype[item.name] = item.method;
  });
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
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YCheckbox,
  YCheckboxGroup,
  YtextLink,
  YInput,
  YTextarea,
  YInputNumber,
  YSteps,
  YDatePicker,
  YAutoComplete,
  YRadio,
  YSwitch,
  YSlider,
  YBadge,
  YCollapse,
  YEmpty,
  YModelTable,
  YButtonGroup,
  YForm,
  YFormModel,
  YTransfer,
  YTimePicker,
  YTabs,
  YTimeLine,
  YTooltip,
  YPopconfirm,
  YPopover,
  YDrawer,
  YLoading,
  YAlert,
  YProgress,
  PageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YConfirm,
  YNotification,
  YMessage,
  YInfo,
  YSuccess,
  YError,
  YWarning,
  YDescribe,
  YUpload,
  YEditor,
  YJsonViewer,
};

export default {
  install, // 全量引入 // 所有组件，必须具有install，才能使用Vue.use()
  Ybutton, // 组件列表
  Ypagination,
  YbuttonAction,
  YlinkTag,
  Yspin,
  YcustomTree,
  YtableBox,
  YsvgIcon,
  Ybreadcrumb,
  Ytag,
  Ymodal,
  YtableActionButton,
  Ytable,
  YtipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YCheckbox,
  YCheckboxGroup,
  YtextLink,
  YInput,
  YTextarea,
  YInputNumber,
  YSteps,
  YDatePicker,
  YAutoComplete,
  YRadio,
  YSwitch,
  YSlider,
  YBadge,
  YCollapse,
  YEmpty,
  YModelTable,
  YButtonGroup,
  YForm,
  YFormModel,
  YTransfer,
  YTimePicker,
  YTabs,
  YTimeLine,
  YTooltip,
  YPopconfirm,
  YPopover,
  YDrawer,
  YLoading,
  YAlert,
  YProgress,
  PageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YConfirm,
  YNotification,
  YMessage,
  YInfo,
  YSuccess,
  YError,
  YWarning,
  YDescribe,
  YUpload,
  YEditor,
  YJsonViewer,
};
