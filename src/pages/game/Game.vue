<template>
  <div class="container">
    <div class="left-section">
      <img class="evo" src="./components/evolution.png" alt="evolution">
    </div>

    <div class="middle-section">
      <activeGame/>
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
          - To exit, press <strong>'F5'</strong> key.
        </p>
      </h2>
    </div>
  </div>
</template>


<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Gameplay from './Gameplay.vue';



const gameComponent = defineAsyncComponent(() => import('./Gameplay.vue'));

const activeGame = ref(Gameplay);

</script>





<style scoped>

.container {
  display: flex;
  justify-content: space-between;
}

.left-section,
.right-section {
  flex: 1;
  padding: 20px;
}

.middle-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start-button {
  margin-top: 20px;
}

.game-window {
  width: 100%;
  height: 100%;
}

.rules {
  text-align: center;
  color: #66d318;
}
</style>
