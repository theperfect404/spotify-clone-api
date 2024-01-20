import { defineStore } from "pinia";
const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      items: [],
    };
  },

  actions: {
    async getCategories(token) {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/categories",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      return data.categories.items;
    },
    setItems(items) {
      this.items = items;
    },
  },
});

export default useCategoryStore;
