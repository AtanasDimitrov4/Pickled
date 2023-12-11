<template>
    <div>
      <h2>{{ data[0].name }}</h2>
      <p>{{ data[0].tagline }}</p>
      <p>{{ data[0].description }}</p>
      <p> {{ data[0].food_pairing }}</p>
      <p> {{ data[0].brewers_tips }}</p>
    </div>
  </template>
  
<script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['data']);
</script>
  