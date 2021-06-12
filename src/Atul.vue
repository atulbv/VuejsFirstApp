<template>
  <ul>
    <li v-for="av in mynames" :key="av">{{ av }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      mynames: ["amit", "abhijeet", "atul"]
    };
  }
};
</script>

<style></style>
