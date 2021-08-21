import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: () => import('@/views/Room.vue'),
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: () => import('@/views/AddRoom.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
