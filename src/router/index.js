import { createRouter, createWebHashHistory } from 'vue-router'

// 静态路由
const staticRoutes = [
  {
    path: '/',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: { title: '主页' },
    children: [
    {
      path: '',
      component: () => import('@/views/component/page.vue')
    },
    {
      path: '/classical',
      component: () => import('@/views/component/classical.vue')
    },
    {
      path: '/general',
      component: () => import('@/views/component/general.vue')
    }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

// router.beforeEach(async (to, from) => {
//   return
// })

export default router
