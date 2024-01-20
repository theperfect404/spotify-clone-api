import { defineStore } from "pinia";
const useMusicStore = defineStore("music", {
  state: () => {
    return {
      userTopTracks: [],
      newReleases: [],
      featuredPlaylists: [],
    };
  },

  actions: {
    async getUserTopTracks(token) {
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return data.items;
    },
    async getNewReleases(token) {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/new-releases",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      return data.albums.items;
    },
    async getFeaturedPlaylists(token) {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      return data.playlists.items;
    },
    setUserTopTracks(userTopTracks) {
      this.userTopTracks = userTopTracks;
    },
    setNewReleases(newReleases) {
      this.newReleases = newReleases;
    },
    setFeaturedPlaylists(featuredPlaylists) {
      this.featuredPlaylists = featuredPlaylists;
    },
  },
});

export default useMusicStore;
