<template>
  <article class="card">
    <h1>Login</h1>

    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="user.username"
          required
          type="text"
          :disabled="isLoading"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="user.password"
          required="password"
          type="password"
          :disabled="isLoading"
        />
      </div>
      <button :disabled="isLoading">
        <Loader v-if="isLoading" />
        <span v-else>Submit</span>
      </button>
    </form>

    <RouterLink v-if="!isAuthenticated" to="/register">
      You don't have an account? Click here
    </RouterLink>
  </article>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../store/userStore';
  import { loginUser } from '../dataProviders/auth';
  import Loader from '../components/Loader.vue';

  const userStore = useUserStore();
  const router = useRouter();
  const isLoading = ref(false);
  const user = ref({
    username: '',
    password: '',
  });
    
  //"username": "atuny0",
  //"password": "9uQFF1Lh",
  
  const onSubmit = async () => {
    isLoading.value = true;
    const userData = await loginUser(user.value);

    console.log('userData', userData);

    if (userData) {
      userStore.setProfile(userData);
      router.push('/profile');
    }

    isLoading.value = false;
  };

  const isAuthenticated = userStore.isAuthenticated;
</script>

<style scoped>
</style>