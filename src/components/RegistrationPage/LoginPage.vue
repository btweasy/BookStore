<style module src="./login.module.css"></style>

<template>
  <div :class="$style.container">
    <div :class="$style.imageBackground"></div>

    <div :class="$style.formSide">
      <img src="@/components/Icons/logo.png" alt="Book Store Logo" :class="$style.imageLogo">
      <p :class="$style.welcome">Welcome Back</p>
      <h3 :class="$style.h3">Log in to your account</h3>

      <form @submit.prevent="login">
        <div :class="$style.formGroup">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="john@mail.com" required />
        </div>

        <div :class="$style.formGroup">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="********" required />
        </div>

        <button type="submit" :class="$style.loginBtn">Login</button>
      </form>

      <button type="button" :class="$style.registerBtn" @click="$router.push('/register')">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.email.includes("@") || this.password.length < 6) {
        alert("Please enter valid email and password (at least 6 characters).")
        return;
      }
      alert(`User Logged In:\nEmail: ${this.email}`);
      this.$router.push('/home')
      this.email = "";
      this.password = "";
    }
  }
};
</script>

