<template>
  <div id="app">
    <h1>Welcome</h1>
    <div>
      <h2>Are you first time visiting?</h2>
      <router-link to="/firstUser"> Register </router-link>
    </div>
    <div>
      <h2>Continue with registration</h2>
      <router-link to="/returningUser"> Continue </router-link>
    </div>
    <div>
      <h2>Show all your info</h2>
      <router-link to="/registeredUser"> show </router-link>
    </div>
  </div>
    <router-view />
</template>

<script>
//import firstUser from "@/components/firstUser.vue";
//import returningUser from "@/components/returningUser.vue";
//import registeredUser from "@/components/registeredUser.vue";
export default {
  components: {},
  data() {
    return {};
  },
};
</script>


<style>
#app {
  padding: 20px;
}
h1 {
  padding: 20px;
}
body {
  background: #e0e0e0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input:focus {
  outline: none;
}
</style>
