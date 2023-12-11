<template>
    <div class="recipe-container">
      <RecipeHeader :data ="newRecipe"/>
      <RecipeImage :data="newRecipe.image_url" :title="newRecipe.name" />
      <FavoriteButton :data="isFavorite" />
      <Loader v-if="isLoading" />
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getRecipe } from '../../dataProviders/recipes';
  import Loader from '../../components/Loader.vue';
  import RecipeHeader from './components/RecipeHeader.vue';
  import RecipeImage from './components/RecipeImage.vue';
  import FavoriteButton from './components/FavoriteButton.vue';
  
 const newRecipe =  await getRecipe()
 const isLoading = ref(true);
 const error = ref(null);
  
  const isFavorite = false; 
  </script>

<style scoped>
  .recipe-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }


</style>

  