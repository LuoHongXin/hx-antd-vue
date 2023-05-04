import Vue from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
import '@src/icons';
import '@src/styles/index.less'; // global css
import '@src/styles/antd.js';
Vue.config.productionTip = false;

// 全局导入
// import whComponents from '../packages/index';
// Vue.use(whComponents);

// 按需导入
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const locale = localStorage.getItem('lang') || 'zh_CN';
import lang from '@src/locale';
const wci18n = new VueI18n({
  locale, // 设置地区
  messages: lang, // 设置地区信息
});
Vue.prototype.$wci18n = wci18n; // 全局
import {
  YClipboard,
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
  YInfiniteSelect,
  YvirtualBox,
} from '../packages/index';
// 组件
Vue.use(YClipboard);
Vue.use(YButton);
Vue.use(YPagination);
Vue.use(YButtonAction);
Vue.use(YLinkTag);
Vue.use(YSpin);
Vue.use(YCustomTree);
Vue.use(YTableBox);
Vue.use(YSvgIcon);
Vue.use(YBreadcrumb);
Vue.use(YTag);
Vue.use(YTabSwitch);
Vue.use(YModal);
Vue.use(YTableActionButton);
Vue.use(YTable);
Vue.use(YTipsButton);
Vue.use(YTagInput);
Vue.use(YDropdownCheckButton);
Vue.use(YSelect);
Vue.use(YAnchor);
Vue.use(YSearchSelect);
Vue.use(YCheckbox);
Vue.use(YCheckboxTag);
Vue.use(YTextLink);
Vue.use(YInput);
Vue.use(YInputNumber);
Vue.use(YSteps);
Vue.use(YDatePicker);
Vue.use(YCascaderMulti);
Vue.use(YQuarterPicker);
Vue.use(YAutoComplete);
Vue.use(YRadio);
Vue.use(YSwitch);
Vue.use(YSlider);
Vue.use(YBadge);
Vue.use(YCollapse);
Vue.use(YEmpty);
Vue.use(YModelTable);
Vue.use(YButtonGroup);
Vue.use(YForm);
Vue.use(YFormModel);
Vue.use(YTransfer);
Vue.use(YTimePicker);
Vue.use(YTabs);
Vue.use(YTimeLine);
Vue.use(YTooltip);
Vue.use(YPopconfirm);
Vue.use(YPopover);
Vue.use(YDrawer);
Vue.use(YLoading);
Vue.use(YAlert);
Vue.use(YProgress);
Vue.use(YPageViews);
Vue.use(YTagAction);
Vue.use(YNameSelect);
Vue.use(YDivider);
Vue.use(YDropdown);
Vue.use(YMenu);
Vue.use(YCard);
Vue.use(YTree);
Vue.use(YDescribe);
Vue.use(YUpload);
Vue.use(YColumnCheck);
Vue.use(YEditor);
Vue.use(YJsonViewer);
Vue.use(YInfiniteSelect);
Vue.use(YvirtualBox);
Vue.use(YConfigProvider);
Vue.use(YAffix);
Vue.use(YRow);
Vue.use(YCol);
Vue.use(YIcon);
Vue.use(YSpace);
Vue.use(YLayout);
// 方法
Vue.prototype.$YGetTableDragHeader = YGetTableDragHeader;
Vue.prototype.$YGetTablePagination = YGetTablePagination;
Object.keys(YMethods).forEach(key => {
  Vue.prototype['$' + key] = YMethods[key];
});

import * as viewTemplate from './views/view-template';
for (let name of Object.keys(viewTemplate)) {
  Vue.component(viewTemplate[name].name, viewTemplate[name]);
}
import lottie from 'vue-lottie';
Vue.component('lottie', lottie);

// import YButton from '~/button/src/button.vue';
// import YPagination from '~/pagination/src/pagination.vue';
// import YButtonAction from '~/buttonAction/src/buttonAction.vue';
// import YLinkTag from '~/linkTag/src/linkTag.vue';
// import YCustomTree from '~/customTree/src/customTree.vue';
// Vue.component('y-button', YButton);
// Vue.component('y-pagination', YPagination);
// Vue.component('y-button-action', YButtonAction);
// Vue.component('y-link-tag', YLinkTag);
// Vue.component('y-custom-tree', YCustomTree);

// import {
//   Button
//   //   Icon,
//   //   Input,
//   //   Select,
//   //   AutoComplete,
//   //   Drawer,
//   //   Modal
// } from "ant-design-vue";

// Vue.component(Button.name, Button);
// Vue.component(Icon.name, Icon);
// Vue.component(Input.name, Input);
// Vue.component(Select.name, Select);
// Vue.component(Select.Option.name, Select.Option);
// Vue.component(Select.OptGroup.name, Select.OptGroup);
// Vue.component(AutoComplete.name, AutoComplete);
// Vue.component(AutoComplete.Option.name, AutoComplete.Option);
// Vue.component(AutoComplete.OptGroup.name, AutoComplete.OptGroup);
// // Vue.component(Drawer.name, Drawer);
// // Vue.component(Modal.name, Modal);

// // Vue 2.x使用ant-design-vue 1.6.2版本,jsx写法下弹出组件报ant-portal指令异常解决姿势
// // 来源:https://blog.csdn.net/crper/article/details/106672400
// Vue.use(Drawer);
// Vue.use(Modal);

Vue.mixin(mixins);
new Vue({
  router,
  i18n: window.wci18n,
  render: h => h(App),
}).$mount('#app');
