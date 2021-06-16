import showIndex from "./components/Index.vue";
import addBlog from "./components/AddBlog.vue";

export default [
  {
    path: "/",
    component: showIndex
  },
  {
    path: "/add",
    component: addBlog
  }
];
