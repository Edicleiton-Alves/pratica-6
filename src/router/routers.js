import {
    createWebHistory,
    // createWebHashHistory,
    createRouter,
  } from "vue-router";
  import Initial from "@/views/Initial.vue";
  import Login from "@/views/Login.vue";
  import NotFound from "@/views/NotFound.vue";
  
  const routes = [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/initial",
      name: "Initial",
      component: Initial,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;