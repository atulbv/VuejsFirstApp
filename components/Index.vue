<template>
  <div id="team">
    <ul>
      <li
        v-for="member in Mylist"
        :key="member"
        v-on:click="member.show = !member.show"
      >
        <h2>{{ member.Name }}</h2>
        <h3 v-show="member.show">
          {{ member.Role }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Mylist: [
        { Name: "Atul", Role: "Developer", show: false },
        { Name: "Manuraj", Role: "Developer", show: false },
        { Name: "Anand", Role: "Tester", show: false }
      ]
    };
  }
};
</script>

<style scoped>
#team {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0%;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid olive;
  margin: 10px;
}
</style>
