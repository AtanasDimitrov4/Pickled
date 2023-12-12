<template>
   <button v-if="!game.isStarted" @click="onStart" class="start-button">
        Start game
      </button>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, markRaw } from 'vue';
  import { createWorld } from './components/game';
  
  const game = markRaw({
    ended: false,
    isStarted: false,
  });
  
  const gameContainer = ref(null);
  

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  
    if (game.isStarted) {
      game.ended = true;
    }
  });
  
  function handleKeyDown(event) {
    if (event.code === 'Escape' && !game.ended) {
      onStop();
    }
  }
  
  function onStart() {
    game.isStarted = true;
    createWorld(1000 / 60, gameContainer.value);
  }
  
  function onStop() {
    game.ended = true;
    game.isStarted = false;
  }
  </script>