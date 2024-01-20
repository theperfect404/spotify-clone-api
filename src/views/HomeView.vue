<script>
import MusicCard from "@/components/MusicCard.vue";
import useAuthStore from "@/stores/auth";
import useMusicStore from "@/stores/music";

export default {
  components: {
    MusicCard,
  },
  data() {
    return {
      authStore: useAuthStore(),
      musicStore: useMusicStore(),
    };
  },
  async mounted() {
    // If the user is logged in, start the fetch
    if (this.authStore.token) {
      const userTopTracks = await this.musicStore.getUserTopTracks(
        this.authStore.token
      );

      if (userTopTracks) {
        this.musicStore.setUserTopTracks(userTopTracks);
      }

      const newReleases = await this.musicStore.getNewReleases(
        this.authStore.token
      );

      if (newReleases) {
        this.musicStore.setNewReleases(newReleases);
      }

      const featuredPlaylists = await this.musicStore.getFeaturedPlaylists(
        this.authStore.token
      );

      if (featuredPlaylists) {
        this.musicStore.setFeaturedPlaylists(featuredPlaylists);
      }
    }
  },
};
</script>
<template>
  <main class="h-full w-full *:pt-[50px] *:px-[32px] overflow-auto">
    <section class="pt-[100px]">
      <h1 class="font-bold text-white">Your Top Items</h1>
      <h3 class="text-sm text-dark-white">Based on your recent listening</h3>
      <div
        v-if="musicStore.userTopTracks.length"
        class="grid w-full grid-cols-5 mt-5 gap-y-4"
      >
        <MusicCard
          v-for="item in musicStore.userTopTracks"
          :key="item.id"
          :url="item.album.external_urls.spotify"
          :albumCoverURL="item.album.images[1].url"
          :title="item.name"
          :artist="item.album.artists[0].name"
        />
      </div>
      <p v-else>
        Uh oh! Looks like you haven't listened to anything recently. Go listen
        to some music on Spotify and come back here!
      </p>
    </section>

    <section>
      <h1 class="font-bold text-white">New Releases</h1>
      <h3 class="text-sm text-dark-white">New releases from Spotify</h3>
      <div
        v-if="musicStore.newReleases.length"
        class="grid w-full grid-cols-5 mt-5 gap-y-4"
      >
        <MusicCard
          v-for="item in musicStore.newReleases"
          :key="item.id"
          :url="item.external_urls.spotify"
          :albumCoverURL="item.images[1].url"
          :title="item.name"
          :artist="item.artists[0].name"
        />
      </div>
      <p v-else>
        Nothing to see here yet. Go ahead and click login to get started!
      </p>
    </section>

    <section class="pb-[100px]">
      <h1 class="font-bold text-white">Featured Playlists</h1>
      <h3 class="text-sm text-dark-white">Featured playlists from Spotify</h3>
      <div
        v-if="musicStore.featuredPlaylists.length"
        class="grid w-full grid-cols-5 mt-5 gap-y-4"
      >
        <MusicCard
          v-for="item in musicStore.featuredPlaylists"
          :key="item.id"
          :url="item.external_urls.spotify"
          :albumCoverURL="item.images[0].url"
          :title="item.name"
          :artist="item.description"
        />
      </div>
      <p v-else>
        Nothing to see here yet. Go ahead and click login to get started!
      </p>
    </section>
  </main>
</template>
