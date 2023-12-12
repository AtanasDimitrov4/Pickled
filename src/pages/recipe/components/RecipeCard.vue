<template>
  <div v-if="recipe" class="recipe-card">
    <img :src="recipe.image_url" :alt="recipe.name" class="recipe-image" />
    <h2>Name: {{ recipe.name }}</h2>
    <p>Tagline: {{ recipe.tagline }}</p>
    <p>Description: {{ recipe.description }}</p>
    <p>Food pairing: {{ recipe.food_pairing }}</p>
    <p>Brewers tips: {{ recipe.brewers_tips }}</p>
  </div>
  <div v-else>
   <Loader/> 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getThisRecipe } from '../../../dataProviders/recipeToLike';
import Loader from '../../../components/Loader.vue'

const recipe = ref(null);

onMounted(async () => {
  
  recipe.value = await getThisRecipe(recipe.id);
});
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  text-align: center;
}

.recipe-image {
  max-width: 100%;
}
</style>
