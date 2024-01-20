<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <aside class="z-10 flex flex-col w-full h-full bg-black">
    <!-- top card -->
    <div class="bg-[#121212] rounded-md m-2">
      <div class="flex items-center gap-x-[1px] px-[25px] py-[15px]">
        <img src="/spotify.png" alt="spotify logo" class="w-6 h-6 invert" />
        <h3 class="font-bold">
          Spotify<span
            class="ml-[0.1rem] text-[0.3rem] font-extralight align-super"
            >®</span
          >
        </h3>
      </div>

      <div
        class="px-[25px] pb-[15px] *:flex *:items-center *:gap-x-[20px] *:font-semibold *:text-dark-white *:mb-4"
      >
        <div class="transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clip-rule="evenodd"
            />
          </svg>
          <router-link to="/">Home</router-link>
        </div>
        <div class="transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clip-rule="evenodd"
            />
          </svg>
          <router-link to="/search">Search</router-link>
        </div>
      </div>
    </div>

    <div class="bg-[#121212] rounded-md m-2">
      <div
        class="pt-[15px] *:flex *:items-center *:gap-x-[20px] *:font-semibold *:text-dark-white *:mb-4"
      >
        <div class="px-[25px] transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"
            />
          </svg>

          <a href="#">Your Library</a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 ml-auto"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div
          class="bg-[#242424] rounded-md px-[20px] py-[15px] flex-col justify-start !items-start m-2"
        >
          <h4 class="font-bold">Create your first playlist</h4>
          <p class="mt-1 text-sm font-light text-dark-white">
            It's easy, we'll help you.
          </p>
          <Button class="mt-4">Create playlist</Button>
        </div>

        <div
          class="bg-[#242424] rounded-md px-[20px] py-[15px] flex-col justify-start !items-start m-2"
        >
          <h4 class="font-bold">Let's find some podcasts to follow</h4>
          <p class="mt-1 text-sm font-light text-dark-white">
            We'll keep you updated on new episodes.
          </p>
          <Button class="mt-4">Browse podcasts</Button>
        </div>
      </div>
    </div>

    <div class="mt-auto px-[40px] py-[20px] flex flex-col gap-y-3">
      <div class="text-xs flex gap-x-3 *:no-underline *:text-dark-white">
        <a href="#">Legal</a>
        <a href="#">Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
      </div>

      <div class="text-xs flex gap-x-3 *:no-underline *:text-dark-white">
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
      </div>

      <div class="text-xs flex gap-x-3 *:no-underline *:text-dark-white">
        <a href="#">Cookies</a>
      </div>

      <div class="mt-4">
        <Button type="icon">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </template>
          English
        </Button>
      </div>
    </div>
  </aside>
</template>
