// src/router/modules/pro.ts
import Layout from '@/layout/index.vue'
import List from '@/views/pro/list.vue'
import Search from '@/views/pro/search.vue'
export default {
  path: '/pro',
  redirect: '/pro/list',
  component: Layout,
  meta: {
    title: '产品管理',
    icon: 'Fries'
  },
  children: [
    {
      path: 'list',
      component: List,
      meta: {
        title: '产品列表'
      }
    },
    {
      path: 'search',
      component: Search,
      meta: {
        title: '筛选列表'
      }
    }
  ]
}