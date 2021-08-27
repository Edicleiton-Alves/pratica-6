<template>
  <div id="nav">
    <router-link v-if="!logged" to="/">Login</router-link>
    <router-link v-if="logged" to="/initial"> | Home</router-link>
    <a v-if="logged" href="#" @click="logout"> | Logout</a>
  </div>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      logged: false,
    };
  },
  methods: {
    logout() {
      axios.get("http://localhost:3000/users/logout").then((result) => {
        this.logged = false;
        localStorage.removeItem("user");
        console.log(result);
        this.$router.push("/");
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      this.logged = true;
      this.$router.push("/initial");
    }
  },
};
</script>

<style></style>