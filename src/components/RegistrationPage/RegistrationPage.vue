<style module src="registration.module.css"></style> //запомни

<template>
  <div :class="$style.container">
    <div :class="$style.imageBackground"></div>

    <div :class="$style.formSide">
      <img src="@/components/Icons/logo.png" alt="Book Store Logo" :class="$style.imageLogo">
      <p :class="$style.welcome">Welcome</p>
      <h3 :class="$style.h3">Register now</h3>

      <form @submit.prevent="register">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" placeholder="John Doe" required>

        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" placeholder="john@mail.com" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="********" required>

        <button type="submit" :class="$style.registerBtn">Register</button>
      </form>
      <button :class="$style.loginBtn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      alert(`User Registered:\nName: ${this.name}\nEmail: ${this.email}`);
      this.name = "";
      this.email = "";
      this.password = "";
    }
  }
};
</script>
