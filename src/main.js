import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/", redirect: "/page-1" },
  { path: "/page-1", component: Page1, name: "Page1" },
  { path: "/page-2", component: Page2, name: "Page2" },
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
