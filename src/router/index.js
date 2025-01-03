import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/*",
    name: "mainpage",
    component: MainPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
