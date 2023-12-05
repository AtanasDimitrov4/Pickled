<template>
 <div>
    <img class="wheel" src="../../../public/base/evolution.png" alt="evo">
    <div class="playField"><button>Play</button></div>
    <p class="rules"><h2>How to play</h2> 
    To move left - press <strong>'A'</strong>key
    To move right - press <strong>'D'</strong> key
    For drop - press <strong>'S'</strong>
    For exit - press <strong>'Esc'</strong></p>
 </div>
</template>

<script>
//import { createWorld } from '../../store/gameStore'

    export default {
        data() {
       
       }
        }
</script>

<style scoped>

.wheel {
    position:fixed right;
}

.playField {
    position: center;
    max-width: fit-content;
}

.rules {
    position:fixed left;
    text-align: center;
}




</style>