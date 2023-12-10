import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Game from '../pages/game/Game.vue';
import Cast from '../pages/Cast.vue';
import Recipe from '../pages/recipe/Recipe.vue';
import Profile from '../pages/Profile.vue';
import Login from '../pages/Login.vue';
import Gameplay from '../pages/game/Gameplay.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/cast', component: Cast },
  { path: '/recipe', component: Recipe },
  { path: '/profile', component: Profile },
  { path:  '/login', component: Login },
  { path: '/gameplay', component: Gameplay}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
