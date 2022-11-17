// src/router/modules/banner.ts
import Layout from '@/layout/index.vue'
import List from '@/views/banner/list.vue'
import HomeList from '@/views/banner/components/home.vue'
import KindList from '@/views/banner/components/kind.vue'
import Add from '@/views/banner/add.vue'

export default {
  path: '/banner',
  redirect: '/banner/list',
  name: 'banner',
  component: Layout,
  meta: {
    title: '轮播图管理',
    icon: 'PictureFilled'
  },
  children: [
    {
      path: 'list',
      redirect: '/banner/list/home',
      component: List,
      meta: {
        title: '轮播图列表'
      },
      children: [
        {
          path: 'home',
          component: HomeList,
          meta: {
            title: '首页轮播图'
          }
        },
        {
          path: 'kind',
          component: KindList,
          meta: {
            title: '分类轮播图'
          }
        }
      ]
    },
    {
      path: 'add',
      component: Add,
      meta: {
        title: '添加轮播图'
      }
    }
  ]
}