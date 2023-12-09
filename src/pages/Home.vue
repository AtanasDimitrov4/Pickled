<template>
  <suspense>
    <template #default>
      <h1>Welcome</h1>
      <h2>What will you do if winter is coming?</h2>
      <p>
        Do you make some repairs on the household, or maybe you will take some warm blanket and get cozy?
        I have another idea. Grab some jar and vegetables and let <strong>get pickled</strong>.
      </p>
      <div class="quote">
        <ul>
          <h2>{{ quoteData.quote }}</h2>
        </ul>

        <img class="mascot" src="../assets/Jardo.png" alt="Jardo">
      </div>
    </template>

    <template #fallback>
      <p>Loading...</p>
    </template>

    <template #error>
      <p>An error occurred while fetching the quote.</p>
    </template>
  </suspense>
</template>

<script setup>
import { getQuote } from '../dataProviders/quote';
const quoteData = await getQuote();
</script>


<style>
.quote {
  color: red;
}

.mascot {
  display: flex;
  justify-content: space-between;
}
</style>



