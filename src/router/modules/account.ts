// src/router/modules/account.ts
import Layout from '@/layout/index.vue'
import User from '@/views/account/user.vue'
import Admin from '@/views/account/admin.vue'
export default {
  path: '/account',
  redirect: '/account/user',
  component: Layout,
  meta: {
    title: '账户管理',
    icon: 'User'
  },
  children: [
    {
      path: 'user',
      component: User,
      meta: {
        title: '用户列表'
      }
    },
    {
      path: 'admin',
      component: Admin,
      meta: {
        title: '管理员列表'
      }
    }
  ]
}