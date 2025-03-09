import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ChatTestingView from './views/ChatTestingView.vue'

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ChatTesting',
      component: ChatTestingView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: ChatTestingView // Replace with actual dashboard component
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import('./views/ReportsView.vue') // Lazy-loaded
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('./views/SettingsView.vue') // Lazy-loaded
    }
  ]
})

// Создаем и монтируем приложение
const app = createApp(App)
app.use(router)
app.mount('#app')