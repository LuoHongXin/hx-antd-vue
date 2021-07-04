import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/permission',
    component: Home,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'], // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'], // or you can only set roles in sub nav
        },
      },
    ],
  },
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
