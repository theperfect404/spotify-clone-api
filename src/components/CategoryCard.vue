<script>
export default {
  props: {
    albumCoverURL: {
      type: String,
      default:
        "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
    },
    title: {
      type: String,
      default: "Top Lists",
    },
  },
};
</script>

<template>
  <a class="w-[170px] h-[170px] rounded-3xl relative" href="#" target="_blank">
    <h1 class="absolute z-10 font-bold text-white left-4 top-2">{{ title }}</h1>

    <img
      class="absolute w-full rounded-3xl"
      :src="albumCoverURL"
      alt="album cover"
      srcset=""
    />
  </a>
</template>
