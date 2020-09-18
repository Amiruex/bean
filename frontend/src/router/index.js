import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import myHome from '../components/Mine/myHome.vue'
import people from '../components/Mine/people.vue'

//首页
import firstPage from '../components/FirstPage/firstPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'firstPage',
        component: firstPage
    },
    {
        path: '/myHome',
        name: 'myHome',
        component: myHome
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },  
    {        
        path: "/gallery",
        name: 'Gallery',
           component:  ()  =>             
            import  (  /* webpackChunkName: "about" */  '../views/Gallery.vue')    
    },  
    {        
        path: "/explore",
        name: 'explore',
        component:  ()  =>             
            import  (  /* webpackChunkName: "about" */  '../views/Explore.vue')    
    },{
        path:"/people",
        name:"people",
        component:people
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由守卫(路由执行过程的钩子方法)
router.beforeEach((to, from, next) => {
    console.log(to.matched);
    if (to.matched.some((recod) => recod.meta.requireAuth)) {
        //检查是否有令牌
        var token = localStorage.getItem("Auth");
        if (!token) {
            next({
                name: "firstPage",
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router