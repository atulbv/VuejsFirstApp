<template>
  <footer>
    <p>{{ Copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      Copyright: "Copyright 2021 Atul Vue App"
    };
  }
};
</script>

<style scoped>
footer {
  background: slategray;
  padding: 6px;
  position: fixed;
  bottom: 0;
  width: 98%;
}
p {
  color: snow;
  text-align: right;
}
</style>
