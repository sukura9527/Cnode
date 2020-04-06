import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import detail from '../views/detail.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: main,
        redirect: '/articleItem/all',
        children: [{
            path: '/articleItem/:tab', // 路径后面加参数 :tab代表需要在/articleItem/传参  然后在对应的component里面接受参数 
            component: () =>
                import ('../views/all.vue')
        }]
    },
    {
        path: '/detail',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/detail.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router