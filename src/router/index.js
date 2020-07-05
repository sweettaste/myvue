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

export default router;