<script setup>
import { Suspense } from 'vue';
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div id="app">
    <Suspense>
      <div>
        <AppHeader />
        <main>
          <RouterView />
        </main>
        <AppFooter />
      </div>
    </Suspense>
  </div>
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
