import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import bannerRoutes from './modules/banner'
import proRoutes from './modules/pro'
import accountRoutes from './modules/account'

import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'

export const constantRoutes:RouteRecordRaw[] = [

    {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
          {
            path: 'home',
            component: Home,
            meta: {
              title: '系统首页',
              icon: 'HomeFilled'
            }
          }
        ]
      }

]

export const asyncRoutes = [
    bannerRoutes,
    proRoutes,
    accountRoutes
  ]

  const  createMyRouter = () => {
    return createRouter({
      history: createWebHashHistory(),
      routes: constantRoutes.concat(asyncRoutes)
    })
}

const router = createMyRouter()


export function resetRouter() {
  const newRouter = createMyRouter()
}

export default router