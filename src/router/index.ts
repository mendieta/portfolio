import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tesla",
    name: "Tesla - Outrun Mode",
    component: () => import("../views/Tesla.vue"),
  },
  {
    path: "/local-cook",
    name: "Local Cook",
    component: () => import("../views/Local-Cook.vue"),
  },
  {
    path: "/cmrad-signup",
    name: "Collective Minds",
    component: () => import("../views/Cmrad-Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
