<template>
    <form @submit.prevent="onSubmit">
      <FormItem
        v-for="field in fields"
        :key="field.id"
        v-model="formData[field.id]"
        :id="field.id"
        :label="field.label"
        :type="field.type"
        :placeholder="field.placeholder"
        :error="formErrors[field.id]"
      />
      <button type="submit">
        {{ submitButtonText }}
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineProps } from 'vue';
  import FormItem from '../components/FormItem.vue'
  
  const props = defineProps(['fields', 'submitButtonText', 'onSubmit', 'formErrors']);
  
  const formData = ref(Object.fromEntries(props.fields.map(field => [field.id, ''])));
  </script>
  
  <style scoped>
  
  </style>
  