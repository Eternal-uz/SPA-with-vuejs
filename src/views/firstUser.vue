<template>
  <div>
    <form class="form" @submit.prevent="registerUser">
      <h4 class="">Register</h4>
      <my-input
        v-model="this.firstName"
        type="text"
        class="input"
        placeholder="First Name"
      />
      <my-input
        v-model="this.lastName"
        type="text"
        class="input"
        placeholder="Last Name"
      />
      <myButton @click="registerUser"> Register </myButton>
    </form>
  </div>
</template>

<script>
import myInput from "@/components/UI/myInput.vue";
import myButton from "@/components/UI/myButton.vue";
export default {
  name: "firstUser",
  components: { myInput, myButton },
  data() {
    return {
      user: [
        {
          firstName: "",
          lastName: "",
        },
      ],
      users: [],
    };
  },
  methods: {
    registerUser() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
      };
      this.users.push(newUser);
      console.log(newUser);
    },
  },
};
</script>