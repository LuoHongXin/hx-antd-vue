import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/introduce',
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import(/*webpackChunkName:"introduce"*/ '../views/introduce'),
    meta: {
      title: '介绍与使用',
    },
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import(/*webpackChunkName:"theme"*/ '../views/theme'),
    meta: {
      title: '主题与换肤',
    },
  },
  {
    path: '/styleVars',
    name: 'styleVars',
    component: () => import(/*webpackChunkName:"styleVars"*/ '../views/styleVars'),
    meta: {
      title: '样式变量',
    },
  },
  {
    path: '/question',
    name: 'question',
    component: () => import(/*webpackChunkName:"question"*/ '../views/question/index.vue'),
    meta: {
      title: '问题汇总',
    },
  },
  {
    path: '/general',
    name: 'general',
    component: () => import(/*webpackChunkName:"general"*/ '../views/components-views'),
    meta: {
      title: '通用组件',
    },
    children: [
      {
        path: 'button',
        name: 'button',
        component: () => import(/*webpackChunkName:"button"*/ '../views/components-views/button/index'),
        meta: {
          title: 'Button 按钮',
        },
      },
      {
        path: 'textLink',
        name: 'textLink',
        component: () => import(/*webpackChunkName:"textLink"*/ '../views/components-views/textLink/index'),
        meta: {
          title: 'Link 文字链接',
        },
      },
      {
        path: 'describe',
        name: 'describe',
        component: () => import(/*webpackChunkName:"describe"*/ '../views/components-views/describe/index'),
        meta: {
          title: 'Describe 描述省略',
        },
      },
      {
        path: 'svg',
        name: 'svg',
        component: () => import(/*webpackChunkName:"svg"*/ '../views/components-views/svg'),
        meta: {
          title: '矢量图标（svg-icon）',
        },
      },
    ],
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import(/*webpackChunkName:"navigation"*/ '../views/components-views'),
    meta: {
      title: '导航',
    },
    children: [
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: () => import(/*webpackChunkName:"breadcrumb"*/ '../views/components-views/breadcrumb'),
        meta: {
          title: 'Breadcrumb 面包屑',
        },
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import(/*webpackChunkName:"pagination"*/ '../views/components-views/pagination'),
        meta: {
          title: 'Pagination 分页',
        },
      },
      {
        path: 'steps',
        name: 'steps',
        component: () => import(/*webpackChunkName:"steps"*/ '../views/components-views/steps'),
        meta: {
          title: 'Steps 步骤',
        },
      },
    ],
  },
  {
    path: '/dataEntry',
    name: 'dataEntry',
    component: () => import(/*webpackChunkName:"dataEntry"*/ '../views/components-views'),
    meta: {
      title: '数据录入',
    },
    children: [
      {
        path: 'autoComplete',
        name: 'autoComplete',
        component: () => import(/*webpackChunkName:"autoComplete"*/ '../views/components-views/autoComplete'),
        meta: {
          title: 'AutoComplete 自动完成',
        },
      },
      {
        path: 'form',
        name: 'form',
        component: () => import(/*webpackChunkName:"form"*/ '../views/components-views/form'),
        meta: {
          title: 'Form 表单',
        },
      },
      {
        path: 'form-model',
        name: 'form-model',
        component: () => import(/*webpackChunkName:"formModel"*/ '../views/components-views/formModel'),
        meta: {
          title: 'FormModel 表单',
        },
      },
      {
        path: 'input',
        name: 'input',
        component: () => import(/*webpackChunkName:"input"*/ '../views/components-views/input/index'),
        meta: {
          title: 'Input 输入框',
        },
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import(/*webpackChunkName:"radio"*/ '../views/components-views/radio'),
        meta: {
          title: 'Radio 单选框',
        },
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import(/*webpackChunkName:"checkbox"*/ '../views/components-views/checkbox'),
        meta: {
          title: 'Checkbox 多选框',
        },
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import('../views/components-views/switch'),
        meta: {
          title: 'Switch 开关',
        },
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: () => import('../views/components-views/datePicker/index'),
        meta: {
          title: 'DatePicker 日期选择框',
        },
      },
      {
        path: 'select',
        name: 'select',
        component: () => import(/*webpackChunkName:"select"*/ '../views/components-views/select/index'),
        meta: {
          title: 'Select 选择器',
        },
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import(/*webpackChunkName:"slider"*/ '../views/components-views/slider/index'),
        meta: {
          title: 'Slider 滑动输入条',
        },
      },
      {
        path: 'transfer',
        name: 'transfer',
        component: () => import(/*webpackChunkName:"transfer"*/ '../views/components-views/transfer/index'),
        meta: {
          title: 'Transfer 穿梭框',
        },
      },
      {
        path: 'timePicker',
        name: 'timePicker',
        component: () => import(/*webpackChunkName:"timePicker"*/ '../views/components-views/timePicker/index'),
        meta: {
          title: 'TimePicker 时间选择框',
        },
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import(/*webpackChunkName:"upload"*/ '../views/components-views/upload/index'),
        meta: {
          title: 'Upload 上传',
        },
      },
    ],
  },
  {
    path: '/dataDisplay',
    name: 'dataDisplay',
    component: () => import(/*webpackChunkName:"dataDisplay"*/ '../views/components-views'),
    meta: {
      title: '数据展示',
    },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import(/*webpackChunkName:"table"*/ '../views/components-views/table/index'),
        meta: {
          title: 'Table 表格',
        },
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import(/*webpackChunkName:"tag"*/ '../views/components-views/tag/index'),
        meta: {
          title: 'Tag 标签',
        },
      },
      {
        path: 'badge',
        name: 'badge',
        component: () => import(/*webpackChunkName:"badge"*/ '../views/components-views/badge/index'),
        meta: {
          title: 'Badge 徽标',
        },
      },
      {
        path: 'collapse',
        name: 'collapse',
        component: () => import(/*webpackChunkName:"collapse"*/ '../views/components-views/collapse/index'),
        meta: {
          title: 'Collapse 折叠面板',
        },
      },
      {
        path: 'empty',
        name: 'empty',
        component: () => import(/*webpackChunkName:"empty"*/ '../views/components-views/empty/index'),
        meta: {
          title: 'Empty 空状态',
        },
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: () => import(/*webpackChunkName:"tabs"*/ '../views/components-views/tabs/index'),
        meta: {
          title: 'Tab 选项卡',
        },
      },
      {
        path: 'timeLine',
        name: 'timeLine',
        component: () => import(/*webpackChunkName:"timeLine"*/ '../views/components-views/timeLine/index'),
        meta: {
          title: 'Timeline 时间轴',
        },
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        component: () => import(/*webpackChunkName:"dropdown"*/ '../views/components-views/dropdown/index'),
        meta: {
          title: 'Dropdown 下拉菜单',
        },
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import(/*webpackChunkName:"menu"*/ '../views/components-views/menu/index'),
        meta: {
          title: 'Menu 菜单',
        },
        children: [
          {
            path: 'aa',
            name: 'aa',
          },
          {
            path: 'bb',
            name: 'bb',
          },
          {
            path: 'cc',
            name: 'cc',
          },
          {
            path: 'dd',
            name: 'dd',
          },
        ],
      },
      {
        path: 'card',
        name: 'card',
        component: () => import(/*webpackChunkName:"card"*/ '../views/components-views/card/index'),
        meta: {
          title: 'Card 卡片',
        },
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import(/*webpackChunkName:"tree"*/ '../views/components-views/tree/index'),
        meta: {
          title: 'Tree 树形控件',
        },
      },
      {
        path: 'treeCustom',
        name: 'treeCustom',
        component: () => import(/*webpackChunkName:"treeCustom"*/ '../views/components-views/treeCustom/index'),
        meta: {
          title: 'customTree 自定义树形控件',
        },
      },
    ],
  },
  {
    path: '/feedBack',
    name: 'feedBack',
    component: () => import(/*webpackChunkName:"feedBack"*/ '../views/components-views'),
    meta: {
      title: '反馈与告知',
    },
    children: [
      {
        path: 'modal',
        name: 'modal',
        component: () => import(/*webpackChunkName:"modal"*/ '../views/components-views/modal/index'),
        meta: {
          title: 'Modal 弹窗',
        },
      },
      {
        path: 'notification',
        name: 'notification',
        component: () => import(/*webpackChunkName:"notification"*/ '../views/components-views/notification'),
        meta: {
          title: 'Notification 通知提醒',
        },
      },
      {
        path: 'message',
        name: 'message',
        component: () => import(/*webpackChunkName:"message"*/ '../views/components-views/message'),
        meta: {
          title: 'Message 全局提示',
        },
      },
      {
        path: 'tooltip',
        name: 'tooltip',
        component: () => import(/*webpackChunkName:"tooltip"*/ '../views/components-views/tooltip/index'),
        meta: {
          title: 'Tooltip 文字提示',
        },
      },
      {
        path: 'popconfirm',
        name: 'popconfirm',
        component: () => import(/*webpackChunkName:"popconfirm "*/ '../views/components-views/popconfirm/index'),
        meta: {
          title: 'Popconfirm 气泡确认框',
        },
      },
      {
        path: 'popover',
        name: 'popover',
        component: () => import(/*webpackChunkName:"popover "*/ '../views/components-views/popover/index'),
        meta: {
          title: 'Popover 气泡卡片',
        },
      },
      {
        path: 'drawer',
        name: 'drawer',
        component: () => import(/*webpackChunkName:"drawer "*/ '../views/components-views/drawer/index'),
        meta: {
          title: 'Drawer 抽屉',
        },
      },
      {
        path: 'loading',
        name: 'loading',
        component: () => import(/*webpackChunkName:"loading "*/ '../views/components-views/loading/index'),
        meta: {
          title: 'Loading 加载',
        },
      },
      {
        path: 'alert',
        name: 'alert',
        component: () => import(/*webpackChunkName:"alert "*/ '../views/components-views/alert/index'),
        meta: {
          title: 'Alert 警告提示',
        },
      },
      {
        path: 'progress',
        name: 'progress',
        component: () => import(/*webpackChunkName:"progress "*/ '../views/components-views/progress/index'),
        meta: {
          title: 'Progress 进度条',
        },
      },
    ],
  },
  {
    path: '/pageLayout',
    name: 'pageLayout',
    component: () => import(/*webpackChunkName:"pageViews "*/ '../views/page-views'),
    meta: {
      title: '典型页面布局',
    },
    children: [
      {
        path: 'pageHeaderA',
        name: 'pageHeaderA',
        component: () => import(/*webpackChunkName:"pageHeaderA "*/ '../views/page-views/pageHeaderA'),
        meta: {
          title: 'pageHeaderA 页头',
        },
      },
      {
        path: 'pageHeaderB',
        name: 'pageHeaderB',
        component: () => import(/*webpackChunkName:"pageHeaderB "*/ '../views/page-views/pageHeaderB'),
        meta: {
          title: 'pageHeaderB 页头',
        },
      },
      {
        path: 'filterForm',
        name: 'filterForm',
        component: () => import(/*webpackChunkName:"filterForm "*/ '../views/page-views/filterFormPage'),
        meta: {
          title: 'filterForm 过滤表单',
        },
      },
      {
        path: 'tablePage',
        name: 'tablePage',
        component: () => import(/*webpackChunkName:"tablePage "*/ '../views/page-views/tablePage'),
        meta: {
          title: 'tablePage 表格页',
        },
      },
      {
        path: 'modulePageA',
        name: 'modulePageA',
        component: () => import(/*webpackChunkName:"modulePageA "*/ '../views/page-views/modulePageA'),
        meta: {
          title: 'modulePageA 模块页A',
        },
      },
      {
        path: 'modulePageB',
        name: 'modulePageB',
        component: () => import(/*webpackChunkName:"modulePageA "*/ '../views/page-views/modulePageB'),
        meta: {
          title: 'modulePageB 模块页B',
        },
      },
      {
        path: 'modalForm',
        name: 'modalForm',
        component: () => import(/*webpackChunkName:"modalForm "*/ '../views/page-views/modalForm'),
        meta: {
          title: 'modalForm 弹窗表单',
        },
      },
      {
        path: 'drawerForm',
        name: 'drawerForm',
        component: () => import(/*webpackChunkName:"drawerForm "*/ '../views/page-views/drawerForm'),
        meta: {
          title: 'drawerForm 抽屉表单',
        },
      },
      {
        path: 'formPageA',
        name: 'formPageA',
        component: () => import(/*webpackChunkName:"formPageA "*/ '../views/page-views/formPageA'),
        meta: {
          title: 'formPageA 表单页',
        },
      },
      {
        path: 'formPageB',
        name: 'formPageB',
        component: () => import(/*webpackChunkName:"formPageB "*/ '../views/page-views/formPageB'),
        meta: {
          title: 'formPageB 表单页',
        },
      },
      {
        path: 'pageFooterA',
        name: 'pageFooterA',
        component: () => import(/*webpackChunkName:"pageFooterA "*/ '../views/page-views/pageFooterA'),
        meta: {
          title: 'pageFooterA 页脚A',
        },
      },
      {
        path: 'pageFooterB',
        name: 'pageFooterB',
        component: () => import(/*webpackChunkName:"pageFooterB "*/ '../views/page-views/pageFooterB'),
        meta: {
          title: 'pageFooterB 页脚B',
        },
      },
      {
        path: 'menuswitch',
        name: 'menuswitch',
        component: () => import(/*webpackChunkName:"menuswitch "*/ '../views/page-views/menuswitch'),
        meta: {
          title: 'menuContainer 菜单左右布局',
        },
      },
    ],
  },
  {
    path: '/other',
    name: 'other',
    component: () => import(/*webpackChunkName:"other"*/ '../views/components-views'),
    meta: {
      title: '其它',
    },
    children: [
      {
        path: 'divider',
        name: 'divider',
        component: () => import(/*webpackChunkName:"divider "*/ '../views/components-views/divider'),
        meta: {
          title: 'divider 分割线',
        },
      },
      {
        path: 'copy',
        name: 'copy',
        component: () => import(/*webpackChunkName:"copy "*/ '../views/components-views/copy'),
        meta: {
          title: 'copy 复制',
        },
      },
      {
        path: 'editor',
        name: 'editor',
        component: () => import(/*webpackChunkName:"editor "*/ '../views/components-views/editor'),
        meta: {
          title: 'editor 富文本编辑器',
        },
      },
      {
        path: 'jsonViewer',
        name: 'jsonViewer',
        component: () => import(/*webpackChunkName:"jsonViewer "*/ '../views/components-views/jsonViewer'),
        meta: {
          title: 'jsonViewer 数据高亮',
        },
      },
      {
        path: 'ConfigProvider',
        name: 'ConfigProvider',
        component: () => import(/*webpackChunkName:"ConfigProvider "*/ '../views/components-views/configProvider'),
        meta: {
          title: 'ConfigProvider 全局配置',
        },
      },
    ],
  },
  {
    path: '/log',
    name: 'log',
    component: () => import(/*webpackChunkName:"log"*/ '../views/log'),
    // component: () => import(/*webpackChunkName:"log"*/ '../../README.md'),
    meta: {
      title: '更新日志',
    },
  },

  // {
  //   path: '/topo',
  //   name: 'topo',
  //   component: () => import("../views/components-views/topo"),
  //   meta: {
  //     title: "拓扑图"
  //   }
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import('../views/editorDemo'),
  // },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/permission',
  //   component: Home,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'], // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'], // or you can only set roles in sub nav
  //       },
  //     },
  //   ],
  // },
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
