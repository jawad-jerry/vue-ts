import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path:'/todos',
      name: 'todos.index',
      component: () => import('../views/todos/index.vue')
    },
    {
      path:'/todos/create',
      name: 'todos.create',
      component: () => import('../views/todos/create.vue')
    },
    {
      path:'/todos/:id/detail',
      name: 'todos.detail',
      component: () => import('../views/todos/detail.vue')
    },
    {
      path:'/todos/:id/update',
      name: 'todos.update',
      component: () => import('../views/todos/update.vue')
    },
  ],
});

export default router;
