<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <footer class="flex justify-between w-full h-full p-4">
    <div>
      <h4 class="text-sm font-bold">Preview of Spotify</h4>
      <p class="font-light text-white">
        Sign up to get unlimited songs and podcasts with occasional ads. No
        credit card needed.
      </p>
    </div>
    <Button type="primary" size="md">Sign up free</Button>
  </footer>
</template>
