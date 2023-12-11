<template>
    <div>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-for="vegetable in vegetables" :key="vegetable.id" class="vegetable-card">
          <img :src="vegetable.image" :alt="vegetable.title" class="vegetable-image" />
          <h2>{{ vegetable.title }}</h2>
          <p>{{ vegetable.description }}</p>
          <p><strong>Nutrition:</strong> {{ vegetable.nutrition }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Loader from '../components/Loader.vue';
  import { ref, onMounted } from 'vue';
  import { getVegetables } from '../dataProviders/vegetables';
  
  const vegetables = ref([]);
  const isLoading = ref(true);
  
  onMounted(async () => {
    vegetables.value = await getVegetables();
    isLoading.value = false;
  });
  </script>
  
  <style scoped>
  .vegetable-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    text-align: center;
  }
  
  .vegetable-image {
    max-width: 100%; 
  }
  </style>
  