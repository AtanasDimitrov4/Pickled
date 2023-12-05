import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Shop from '../pages/shop/Shop.vue';
import Game from '../pages/game/Game.vue';
import Recipe from '../pages/Recipe.vue';
import Cart from '../pages/Cart.vue';
import Register from '../pages/register/Register.vue';
import Login from '../pages/Login.vue';
import Profile from '../pages/Profile.vue';
import { useUserStore } from '../store/userStore';

function validateUser() {
  const userStore = useUserStore();
  return userStore.isAuthenticated ? userStore.isAuthenticated : { path: '/login' };
};

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/game', component: Game },
  { path: '/recipe', component: Recipe },
  { path: '/cart', component: Cart },
  { path: '/register', component: Register },
  { path: '/login',
component: Login,
beforeEnter: () => {
    const userStore = useUserStore();
    return userStore.isAuthenticated ? { path: '/profile' } : true;
  } },
  { path: '/profile', component: Profile, beforeEnter: validateUser },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;