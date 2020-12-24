import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/login.vue';
import Regist from './views/regist.vue';
import About from './views/About.vue';
import Shoppingcar from './views/shoppingcar.vue';
import Details from './components/Details.vue';
// 路由配置
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: '登录',
    component: Login,
  },
  {
    path: '/regist',
    name: '注册',
    component: Regist,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/shoppingcar',
    name: '购物车',
    component: Shoppingcar,
  },
  {
    path: '/details/:id',
    name: '详情',
    component: Details,
  },
];
const router = new VueRouter({
  // 路由模式：hash(默认)，history模式
  mode: 'hash',
  routes,
});
export default router;
