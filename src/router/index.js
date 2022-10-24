import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/num2",
    },
    {
      path: "/num1",
      name: "num1",
      meta: { title: "简单桶排序" },
      component: () => import("../views/Num1.vue"),
    },
    {
      path: "/num2",
      name: "num2",
      meta: { title: "冒泡排序" },
      component: () => import("../views/Num2.vue"),
    },
  ],
})

export default router
