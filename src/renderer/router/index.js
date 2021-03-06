import Vue from 'vue'
import Router from 'vue-router'

const login = () => import(/* webpackChunkName: "login" */ '../components/login/Login.vue')
const index = () => import(/* webpackChunkName: "index" */ '../components/index/Index.vue')
const my = () => import(/* webpackChunkName: "my" */ '../components/about/My.vue')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/my',
            name: 'my',
            component: my
        },
        {
        path: '*',
        redirect: '/'
        }
    ]
})
