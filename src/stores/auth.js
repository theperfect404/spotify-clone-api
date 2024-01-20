import { defineStore } from "pinia";
const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      clientId: "2bc49405e00b4e35b6b24e9e895866fc",
      redirectUri: "https://theperfect404.github.io/spotify-clone-api",
      scope: "user-read-private user-read-email user-top-read",
      token: null, // Will be updated after login
    };
  },

  actions: {
    authorize() {
      var url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(this.clientId);
      url += "&scope=" + encodeURIComponent(this.scope);
      url += "&redirect_uri=" + encodeURIComponent(this.redirectUri);
      window.open(url, "_self");
    },
    extractTokenFromURI() {
      var hash = window.location.hash;
      if (hash && hash.includes("access_token")) {
        var url = hash.replace("#access_token=", "");
        var chunks = url.split("&");
        var token = chunks[0];
        return token;
      }
      return null; // Return null if there's no token
    },
    setToken(token) {
      this.token = token;
    },
  },
});

export default useAuthStore;
