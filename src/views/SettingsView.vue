<template>
    <div class="settings-view">
      <HeaderComponent />
      <div class="content">
        <h1>Settings Page</h1>
        <p>This is a placeholder for the Settings page.</p>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  export default {
    name: 'SettingsView',
    components: {
      HeaderComponent
    }
  }
  </script>
  
  <style scoped>
  .settings-view {
    min-height: 100vh;
    background-color: #f8f9fa;
  }
  
  .content {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    margin-bottom: 16px;
    color: #111827;
  }
  </style>