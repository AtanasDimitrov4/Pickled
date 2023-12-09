<template>
    <div class="container">
      <template v-if="!game.ended">
        <div class="left-section">
          <img class="evo" src="./components/evolution.png" alt="evolution">
        </div>
  
        <div class="middle-section">
          <button v-if="!game.isStarted" @click="onStart" class="start-button">
            Start game
          </button>
  
          <router-view v-else></router-view>
        </div>
  
        <div class="right-section">
          <h2>
            <p class="rules">
              <strong>How to play:</strong>
              <br>
              - To move left, press <strong>'A'</strong> key.
              <br>
              - To move right, press <strong>'D'</strong> key.
              <br>
              - For drop, press <strong>'S'</strong> key.
              <br>
              - To exit, press <strong>'Esc'</strong> key.
            </p>
          </h2>
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const game = ref({
    ended: false,
    isStarted: false,
  });
  
  const router = useRouter();
  
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
    router.push('/gameplay'); 
  }
  
  function onStop() {
    game.ended = true;
    game.isStarted = false;
  }
  </script>

<style lang="scss" scoped>

</style>