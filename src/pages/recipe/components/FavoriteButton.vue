<template>
  <div>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { useUserStore } from '../../../store/userStore';

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() -10; 
  
  const idRecipe = `${day}${month}`;
const userStore = useUserStore();
const isFavorite = ref(false);

onMounted(() => {
  
  isFavorite.value = userStore.isRecipeFavorite(idRecipe);
});

const toggleFavorite = () => {
  if (isFavorite.value) {
    userStore.removeFavouriteRecipe(idRecipe);
  } else {
    userStore.addFavouriteRecipe(idRecipe);
  }
  
  isFavorite.value = !isFavorite.value;
  console.log(idRecipe)
};
</script>

<style scoped>

</style>