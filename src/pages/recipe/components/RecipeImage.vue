<template>
    <div>
      <img :src="data[0].image_url" :alt="data[0].name" class="recipe-image" />
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['data']);
  </script>
  
  <style scoped>
  .recipe-image {
    max-width: 100%;
    padding: 10px; 
    box-sizing: border-box; 
  }
  </style>
  