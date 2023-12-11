<template>
    <div>
      <button @click="toggleFavorite">
        {{ data[0].id ? 'Remove from Favorites' : 'Add to Favorites' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import { useUserStore } from '../../../store/userStore';
  
  const props = defineProps(['data']);
  const userStore = useUserStore();
  
  const toggleFavorite = () => {
    if (data[0].id) {
      userStore.removeFavouriteRecipe(favouritesIds.value);
    } else {
      userStore.addFavouriteRecipe(favouritesIds.value);
    }
  
  
    data[0].id = !data[0].id;
  };
  </script>
  