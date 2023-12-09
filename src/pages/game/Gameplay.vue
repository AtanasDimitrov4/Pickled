<template>
    <div ref="gameContainer" class="game-window"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { createWorld } from './components/game'; 
  
  const gameContainer = ref(null);
  
  onMounted(() => {
    createWorld(1000 / 60, gameContainer.value);
  });
  
  onUnmounted(() => {
  });
  </script>