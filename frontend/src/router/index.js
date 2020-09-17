import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import myHome from '../components/Mine/myHome.vue'

//首页
import firstPage from '../components/FirstPage/firstPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
<<<<<<< HEAD
        name: 'Home',
        component: Home
=======
        name: 'firstPage',
        component: firstPage
    },
    // {
    //     path: '/',
    //     redirect: '/myHome'
    // }, 
    {
        path: '/myHome',
        name: 'myHome',
        component: myHome
>>>>>>> 6fe188652b01d61b5a646469e719d79f589ff1fe
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
<<<<<<< HEAD
    },
    {
        path: '/explore',
        name: 'explore',
        component: () =>
            import ('../views/Explore.vue')
=======
>>>>>>> 6fe188652b01d61b5a646469e719d79f589ff1fe
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router