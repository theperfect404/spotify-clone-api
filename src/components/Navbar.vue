<script>
import Button from "./Button.vue";
import useAuthStore from "@/stores/auth";
export default {
  components: {
    Button,
  },
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
};
</script>

<template>
  <nav class="z-10 flex items-center w-full h-full">
    <div class="pl-[20px] flex gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 cursor-not-allowed"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 cursor-not-allowed"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
    <div class="flex gap-x-[30px] ml-auto pr-[20px]">
      <Button type="transparent" size="md" @click="authStore.authorize()"
        >Sign up</Button
      >
      <Button type="primary" size="md" @click="authStore.authorize()"
        >Log in</Button
      >
    </div>
  </nav>
</template>
