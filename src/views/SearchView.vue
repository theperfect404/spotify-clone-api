<script>
import CategoryCard from "@/components/CategoryCard.vue";
import useAuthStore from "@/stores/auth";
import useCategoryStore from "@/stores/category";

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      authStore: useAuthStore(),
      categoryStore: useCategoryStore(),
    };
  },
  async mounted() {
    // If the user is logged in, start the fetch
    if (this.authStore.token) {
      const items = await this.categoryStore.getCategories(
        this.authStore.token
      );

      if (items) {
        this.categoryStore.setItems(items);
      }
    }
  },
};
</script>
<template>
  <main class="w-full h-full *:pt-[15px] *:px-[32px] overflow-auto">
    <section>
      <h1 class="font-bold text-white">Browse all</h1>
      <div
        v-if="categoryStore.items.length"
        class="grid w-full grid-cols-5 mt-5 gap-y-4"
      >
        <CategoryCard
          v-for="item in categoryStore.items"
          :key="item.id"
          :albumCoverURL="item.icons[0].url"
          :title="item.name"
        />
      </div>
      <p v-else>
        Nothing to see here yet. Go ahead and click login to get started!
      </p>
    </section>
  </main>
</template>
