<template>
  <Suspense>
    <template #default>
      <div>
        <div class="quote">
          <ul>
            <h2>{{ quote.quote }}</h2>
          </ul>
          <img class="mascot" src="../assets/Jardo.png" alt="Jardo" />
        </div>
        
        <h1>Welcome</h1>
        <h2>What you will do if the winter is coming?</h2>
        <p>
          Do you make some repairs on household or maybe you will take some warm blanket and get cozy?
          I have another idea. Grab some jar and vegetables and let <strong>let get pickled</strong>
        </p>
      </div>
    </template>
    <template #fallback>
      <Loader/>
    </template>
  </Suspense>
</template>

<script setup>
import { getQuote } from '../dataProviders/quote';
import Loader from '../components/Loader.vue'
const quote = await getQuote();
</script>



<style>

.quote {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px; 
}

.mascot {

  max-width: 200px; 
}

.RouterLink {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.RouterLink:hover {
  text-decoration: underline;
}
</style>
