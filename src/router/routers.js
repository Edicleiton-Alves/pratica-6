import {
    createWebHashHistory,
    createRouter,
  } from "vue-router";
  import Initial from "../views/Initial.vue";
  import Login from "../views/Login.vue";
  
  const routers = [
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
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routers,
  });
  
  export default router;