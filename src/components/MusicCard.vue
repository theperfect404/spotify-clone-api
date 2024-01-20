<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://open.spotify.com/album/7zeA4kJCW5R6Qef90r2zQM",
    },
    albumCoverURL: {
      type: String,
      default:
        "https://i.scdn.co/image/ab67616d00001e02f6f99bc0cbcfee1da47bafed",
    },
    title: {
      type: String,
      default: "Rest of my life",
    },
    artist: {
      type: String,
      default: "Jonas Blue",
    },
  },
};
</script>

<template>
  <a
    class="relative w-[170px] h-[239px] rounded-[10px] p-4 flex flex-col flex-shrink-0 gap-y-[15px] bg-dark hover:bg-dark-hover cursor-pointer no-underline transition-all group"
    :href="url"
    target="_blank"
  >
    <img
      class="w-full max-w-[150px] h-auto"
      :src="albumCoverURL"
      alt="album cover"
      srcset=""
    />
    <span
      class="absolute bottom-[35%] right-[10%] w-[45px] h-[45px] rounded-full p-[10px] bg-play-green shadow-lg flex items-center justify-center opacity-0 transition-all group-hover:opacity-100 group-hover:bottom-[38%]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#000"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <h1 class="font-bold text-white">{{ title }}</h1>
    <h3 class="text-sm text-dark-white">{{ artist }}</h3>
  </a>
</template>
