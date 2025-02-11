<template>
  <div class="container">
    <Navbar v-if="!isAuthPage" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/HomePage/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  computed: {
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/register';
    }
  }
};
</script>

<style>
.container {
  text-align: center;
}
</style>