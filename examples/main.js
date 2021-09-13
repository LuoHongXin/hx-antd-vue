import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from '../src/store';
import mixins  from './mixins';
import "@src/icons";
import '@src/styles/index.less'; // global css
Vue.config.productionTip = false;
import hxAntdVue from '../packages/index';
Vue.use(hxAntdVue);
import * as viewTemplate from "./views/view-template";
for (let name of Object.keys(viewTemplate)) {
  Vue.component(viewTemplate[name].name, viewTemplate[name])
}
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

Vue.use(Antd);
Vue.mixin(mixins);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');