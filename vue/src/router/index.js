import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login.vue';
import '../assets/css/global.css';
import Home from '../components/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login', component:Login
  },
  { path: '/',redirect: '/login'},
  { path: '/home',component:Home}
];

const router = new VueRouter({
  routes
});

//挂载路由导航
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()
  const tokenstr = window.sessionStorage.getItem('token')
  if(!tokenstr) return next('/login')
  next()
})


export default router;
