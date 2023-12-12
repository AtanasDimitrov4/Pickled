<template>
  <div>
    <h1>Profile</h1>
    <div v-if="userStore.isAuthenticated">
      <p>Welcome, {{ userStore.profile.username }}!</p>
        <div>
        <h2>Your Favorites</h2>
        <div v-if="userStore.profile.favouritesRecipes && userStore.profile.favouritesRecipes.length > 0">
          <h1>My Favorite Recipes</h1>
          <div v-for="recipeId in favouriteRecipes" :key="recipeId">
           <RecipeCard :recipeId="recipeId" />
          </div>
        </div>
        <div v-else>
          <p>No favorite recipes yet. Start exploring and add some to your favorites!</p>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Please log in to view your profile.</p>
      <RouterLink to="/login">Log in</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userStore';
import { ref } from 'vue';
import RecipeCard from './recipe/components/RecipeCard.vue';

const userStore = useUserStore();
const favouriteRecipes = ref(userStore.getFavouriteRecipes());
</script>

<style scoped>

</style>
