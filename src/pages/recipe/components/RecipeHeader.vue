<template>
    <div>
      <h2>Name : {{ data[0].name }}</h2>
      <p> Tagline : {{ data[0].tagline }}</p>
      <p> Description : {{ data[0].description }}</p>
      <p> Food pairing : {{ data[0].food_pairing }}</p>
      <p> Brewers tips : {{ data[0].brewers_tips }}</p>
    </div>
  </template>
  
<script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['data']);
</script>
  