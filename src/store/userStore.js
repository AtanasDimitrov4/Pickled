import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return{
    isAuthenticated: false,
    profile: null,
    favouritesRecipes: [],
    } 
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem('user-profile', JSON.stringify(profileData));
    },
    addFavouriteRecipe(id) {
      this.favouritesRecipes.push(id);
    },
    removeFavouriteRecipe(id) {
      this.favouritesRecipes = this.favouritesRecipes.filter(favourite => favourite !== id);
    },
    isRecipeFavorite(id) {
      return this.favouritesRecipes.includes(id);
    },
    getFavouriteRecipes() {
      return this.favouritesRecipes;
    },
    getPersistedProfile() {
      const persisted = sessionStorage.getItem('user-profile');
      if (!persisted) return;
      this.profile = JSON.parse(persisted);
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      sessionStorage.removeItem('user-profile');
    },
  },
});
