<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><router-link to="/" exact>Team Members</router-link></li>
        <li>
          <router-link to="/add" exact>Add a New Blog</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Atul Vue App"
    };
  }
};
</script>

<style scoped>
header {
  background: steelblue;
  padding: 10px;
}
h1 {
  color: whitesmoke;
}
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 0px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>
