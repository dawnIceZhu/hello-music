import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '@/views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  { // 默认推荐为第一页面, tab高亮
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/rank',
    name: 'Rank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Rank')
  },
  {
    path: '/search',
    name: '/Search',
    component: () => import('../views/Search')
  },
  {
    path: '/singer',
    name: '/Singer',
    component: () => import('../views/Singer'),
    children: [
      {
        path: ':id',
        component: () => import('../views/SingerDetail')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
