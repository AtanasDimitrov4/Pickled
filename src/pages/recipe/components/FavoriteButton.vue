<template>
  <div>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useUserStore } from '../../../store/userStore';

const props = defineProps(['data']);
const userStore = useUserStore();

const isFavorite = ref(false);

onMounted(() => {
  if (props.data && props.data[0]) {
    const recipeId = props.data[0].id;
    isFavorite.value = userStore.isRecipeFavorite(recipeId);
  }
});

const toggleFavorite = () => {
  if (props.data && props.data[0]) {
    const recipeId = props.data[0].id;

    if (userStore.isRecipeFavorite(recipeId)) {
      userStore.removeFavouriteRecipe(recipeId);
    } else {
      userStore.addFavouriteRecipe(recipeId);
    }

    isFavorite.value = !isFavorite.value;
  }
};
</script>
