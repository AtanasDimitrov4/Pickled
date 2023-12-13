<template>
  <div class="recipe-card">
    <img :src="recipe.image_url" :alt="recipe.name" class="recipe-image" />
    <h2>Name: {{ recipe.name }}</h2>
    <p>Tagline: {{ recipe.tagline }}</p>
    <p>Description: {{ recipe.description }}</p>
    <p>Food Pairing: {{ recipe.food_pairing }}</p>
    <p>Brewers Tips: {{ recipe.brewers_tips }}</p>
    <FavoriteButton :idRecipe="idRecipe" />
    <Loader v-if="isLoading" />
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { getThisRecipe } from '../../../dataProviders/recipeToLike';
import FavoriteButton from './FavoriteButton.vue';
import Loader from '../../../components/Loader.vue';

const idRecipe = ref(null);
const recipe = ref(null)
const isLoading = ref(true);
const error = ref(null);


watch(() => idRecipe, async (newIdRecipe) => {
  if (newIdRecipe) {
    isLoading.value = true;
    error.value = null;

    try {
      recipe.value = await getThisRecipe(newIdRecipe);
    } catch (err) {
      error.value = 'Error fetching recipe data';
    } finally {
      isLoading.value = false;
    }
  }
});



onMounted(() => {
  if (idRecipe.value) {
    getRecipeData();
  }
});

const getRecipeData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    recipe.value = await getThisRecipe(idRecipe.value);
  } catch (err) {
    error.value = 'Error fetching recipe data';
  } finally {
    isLoading.value = false;
  }
};
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
