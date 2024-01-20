<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import useAuthStore from "./stores/auth";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  mounted() {
    const existingToken = sessionStorage.getItem("token");
    if (existingToken) {
      this.authStore.setToken(existingToken);
      return;
    }

    const token = this.authStore.extractTokenFromURI();
    if (token) {
      console.log("Fresh token!", token);
      this.authStore.setToken(token);

      sessionStorage.setItem("token", token);
    }
  },
};
</script>

<template>
  <Navbar />
  <Sidebar />
  <router-view />
  <Footer />
</template>
