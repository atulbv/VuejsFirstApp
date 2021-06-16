<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AddBlogVue from "./components/AddBlog.vue";
import FooterVue from "./components/Footer.vue";
import Header from "./components/Header.vue";
import IndexVue from "./components/Index.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": FooterVue,
    "app-AddBlog": AddBlogVue,
    "app-Main": IndexVue
  },
  data() {
    return {};
  }
};
</script>

<style></style>
