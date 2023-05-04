const { version, name } = require('../package.json');
import {
  /* eslint-disable no-unused-vars */
  YButton,
  YPagination,
  YButtonAction,
  YLinkTag,
  YSpin,
  YCustomTree,
  YTableBox,
  YSvgIcon,
  YBreadcrumb,
  YTag,
  YTabSwitch,
  YModal,
  YTableActionButton,
  YTable,
  YTipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YAnchor,
  YSearchSelect,
  YInfiniteSelect,
  YCheckbox,
  YCheckboxTag,
  YTextLink,
  YInput,
  YInputNumber,
  YSteps,
  YDatePicker,
  YCascaderMulti,
  YQuarterPicker,
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
  YPageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YDescribe,
  YUpload,
  YColumnCheck,
  YEditor,
  YJsonViewer,
  YConfigProvider,
  YAffix,
  YRow,
  YCol,
  YIcon,
  YSpace,
  YLayout,
  YvirtualBox,
  YMethods,
  YClipboard,
  YGetTableDragHeader,
  YGetTablePagination,
  lang,
} from './module';

// ...如果还有的话继续添加
const components = [
  YButton,
  YPagination,
  YButtonAction,
  YLinkTag,
  YSpin,
  YCustomTree,
  YTableBox,
  YSvgIcon,
  YBreadcrumb,
  YTag,
  YTabSwitch,
  YModal,
  YTableActionButton,
  YTable,
  YTipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YAnchor,
  YSearchSelect,
  YInfiniteSelect,
  YCheckbox,
  YCheckboxTag,
  YTextLink,
  YInput,
  YInputNumber,
  YSteps,
  YDatePicker,
  YCascaderMulti,
  YQuarterPicker,
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
  YPageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YDescribe,
  YUpload,
  YColumnCheck,
  YConfigProvider,
  YvirtualBox,
  YAffix,
  YRow,
  YCol,
  YIcon,
  YSpace,
  YLayout,
  // ...如果还有的话继续添加
];

// 引入组件使用的icon
import '../src/icons';
// 引入 antd
// import Antd from 'ant-design-vue/lib';

// 国际化
import VueI18n from 'vue-i18n';

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
  // Vue.use(Antd);
  // 国际化
  Vue.use(VueI18n);
  const locale = localStorage.getItem('lang') || 'zh_CN';
  // 通过选项创建 VueI18n 实例
  const wci18n = new VueI18n({
    locale, // 设置地区
    messages: lang, // 设置地区信息
  });
  // 遍历注册所有组件
  components.map(component => {
    if (component.install) {
      component.install(Vue);
    }
  });
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
  displayVersion();
  Vue.prototype.$YSpin = YSpin; // 全局
  Vue.prototype.$YGetTableDragHeader = YGetTableDragHeader; // 全局
  Vue.prototype.$YGetTablePagination = YGetTablePagination; // 全局
  Vue.prototype.$wci18n = wci18n; // 全局
  window.wci18n = wci18n;
  Vue.use(YClipboard);
  // 注入全局方法
  Object.keys(YMethods).forEach(key => {
    Vue.prototype['$' + key] = YMethods[key];
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install, // 全量引入 // 所有组件，必须具有install，才能使用Vue.use()
  YClipboard,
  YButton, // 组件列表
  YPagination,
  YButtonAction,
  YLinkTag,
  YSpin,
  YCustomTree,
  YTableBox,
  YSvgIcon,
  YBreadcrumb,
  YTag,
  YTabSwitch,
  YModal,
  YTableActionButton,
  YTable,
  YTipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YAnchor,
  YSearchSelect,
  YInfiniteSelect,
  YvirtualBox,
  YCheckbox,
  YCheckboxTag,
  YTextLink,
  YInput,
  YInputNumber,
  YSteps,
  YDatePicker,
  YCascaderMulti,
  YQuarterPicker,
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
  YPageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YDescribe,
  YUpload,
  YColumnCheck,
  YEditor,
  YJsonViewer,
  YConfigProvider,
  YAffix,
  YRow,
  YCol,
  YIcon,
  YSpace,
  YLayout,
  YMethods,
  YGetTableDragHeader,
  YGetTablePagination,
  lang,
};
export default {
  install, // 全量引入 // 所有组件，必须具有install，才能使用Vue.use()
};
