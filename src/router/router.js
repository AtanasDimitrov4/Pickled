import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Game from '../pages/game/Game.vue';
import Cast from '../pages/Cast.vue';
import Recipe from '../pages/recipe/Recipe.vue';
import Register from '../pages/register/Register.vue'
import Profile from '../pages/Profile.vue';
import Login from '../pages/Login.vue';
import Gameplay from '../pages/game/Gameplay.vue';
import{ useUserStore } from '../store/userStore';

function validateUser() {
  const userStore = useUserStore();
  return userStore.isAuthenticated ? userStore.isAuthenticated : { path: '/login' };
};

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/cast', component: Cast },
  { path: '/recipe', component: Recipe },
  { path: '/gameplay', component: Gameplay},
  { path: '/register', component: Register},
  { path: '/login',
   component: Login,
   beforeEnter: () => {
    const userStore = useUserStore();
    return userStore.isAuthenticated ? { path: '/profile' } : true;
  } },
  { path: '/profile', component: Profile, beforeEnter: validateUser }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
