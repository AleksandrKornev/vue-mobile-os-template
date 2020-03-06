import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import App from "@/views/MobileApp/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apps/:app",
    name: "App",
    component: App
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;