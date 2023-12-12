<template>
    <div>
      <h1>Register</h1>
      <GeneralForm
        :fields="formFields"
        :submitButtonText="submitButtonText"
        :onSubmit="onSubmit"
        :formErrors="formErrors"
      />
      <RouterLink to="/login">
        Already have an account? Click here
      </RouterLink>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../../store/userStore';
  import { createUser } from '../../dataProviders/user';
  import { useVuelidate } from '@vuelidate/core';
  
  const userStore = useUserStore();
  
  const formFields = ref([
    { id: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', validator: 'email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ]);
  
  const formErrors = ref({});
  
  const submitButtonText = 'Register';
  
  const onSubmit = async () => {
    const isValid = useVuelidate(formFields.value, formData);
    if (!isValid) {
      console.log('Form validation failed');
      return;
    }
  
    const userData = await createUser(formData);
    console.log('userData', userData);
  
    
  };
  </script>
  
<style scoped>
  
</style>
  
  

  