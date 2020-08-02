import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../view/login');
const Home = () => import('../view/home');

Vue.use(VueRouter)
const routes = [
    {   
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home
    }
]

 const router = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to,from,next) => {
    console.log(to)
    if(to.path === '/login') return next()
    const token = window.sessionStorage.getItem('token')
    if(!token) return next('/login') //强制跳转
    next();
})
export default router;