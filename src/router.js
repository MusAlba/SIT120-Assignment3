
import { createWebHistory, createRouter } from "vue-router";
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

const routes = [

    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
    {
      path: "/",
      name: "Login",
      component: Login, 
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;