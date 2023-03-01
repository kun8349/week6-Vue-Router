import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout/HomeView.vue'),
    children: [
      {
        path: '',
        name: '前台列表',
        component: () => import('../views/FrontLayout/IndexView.vue')
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/FrontLayout/CartList.vue')
      },
      {
        path: 'product',
        name: '產品列表',
        component: () => import('../views/FrontLayout/ProductList.vue')
      },
      {
        path: 'product/:id',
        name: '單一產品',
        component: () => import('../views/FrontLayout/ProductSingle.vue')
      }
    ]
  },
  // 後台路由
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../views/EndLayout/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/EndLayout/EndHome.vue'),
    children: [
      {
        path: 'order',
        name: '後台訂單',
        component: () => import('../views/EndLayout/OrderList.vue')
      },
      {
        path: 'product',
        name: '後台產品列表',
        component: () => import('../views/EndLayout/ProductList.vue')
      }
    ]
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
