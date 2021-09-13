import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Demo from '../views/Demo.vue';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/introduce'
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import("../views/introduce"),
    meta: {
      title: "介绍"
    }
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import("../views/components-views/breadcrumb"),
    meta: {
      title: "面包屑"
    }
  },
  {
    path: '/button',
    name: 'button',
    component: () => import("../views/components-views/button/index"),
    meta: {
      title: "按钮"
    }
  },
  {
    path: '/input',
    name: 'input',
    component: () => import("../views/components-views/input/index"),
    meta: {
      title: "输入框"
    }
  },
  {
    path: '/table',
    name: 'table',
    component: () => import("../views/components-views/table"),
    meta: {
      title: "表格"
    }
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import("../views/components-views/tag/index"),
    meta: {
      title: "标签"
    }
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import("../views/components-views/pagination"),
    meta: {
      title: "分页"
    }
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import("../views/components-views/modal"),
    meta: {
      title: "弹窗"
    }
  },
  {
    path: '/svg',
    name: 'svg',
    component: () => import("../views/components-views/svg"),
    meta: {
      title: "矢量图标（svg-icon）"
    }
  },
  {
    path: '/way',
    name: 'way',
    component: () => import("../views/components-views/way"),
    meta: {
      title: "全局方法"
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/demo',
  //   name: 'Demo',
  //   component: Demo,
  // },
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