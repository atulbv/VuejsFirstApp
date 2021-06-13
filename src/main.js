import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});
// import Av from "./Atul.vue";

// Vue.component("av", Av);

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
