<template>
    <div class="form-item">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('update:value', $event.target.value)"
      />
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['id', 'label', 'type', 'value', 'placeholder', 'error']);
  </script>
  
  <style scoped>
  
  </style>
  