<template>
  <div>
    <h1>Profile</h1>

    <div v-if="userStore.isAuthenticated">
      <p>Welcome, {{ userStore.profile.username }}!</p>

      <div>
        <h1>Favorite Recipes</h1>
        <div class="recipe-container">
        <RecipeCard v-for="recipeId in favoriteRecipes" :key="idRecipe" :idRecipe="recipeId" />
        <Loader v-if="isLoading" />
          <div v-if="error">
            <p>{{ error }}</p>
          </div>
          <div v-else-if="favoriteRecipes.length === 0">
            <p>No favorite recipes yet. Start exploring and add some to your favorites!</p>
          </div>
        </div>

        <button @click="logout">Logout</button>
      </div>
    </div>

    <div v-else>
      <p>Please log in to view your profile.</p>
      <RouterLink to="/login">Log in</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/userStore';
import RecipeCard from './recipe/components/RecipeCard.vue';
import Loader from '../components/Loader.vue';

const userStore = useUserStore();
const favoriteRecipes = ref([]);
const router = useRouter();
const isLoading = ref(true);
const error = ref(null);
const idRecipe = ref(null)

watch(() => userStore.favouritesRecipes, (newFavourites) => {
  favoriteRecipes.value = newFavourites;
});

onMounted(async () => {
  if (userStore.isAuthenticated && userStore.favouritesRecipes.length > 0) {
    
    favoriteRecipes.value = userStore.favouritesRecipes;
    idRecipe.value = userStore.favouritesRecipes[0]; 
  }
});


const logout = () => {
  userStore.logout();
  router.push('/');
};
</script>

<style scoped>
/* Add your styles here */
</style>
