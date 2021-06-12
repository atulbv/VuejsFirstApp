import Vue from "vue";
import App from "./App.vue";
import Av from "./Atul.vue";

Vue.component("av", Av);

new Vue({
  el: "#app",
  render: h => h(App)
});
