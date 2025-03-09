<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #f8f9fa;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
}

* {
  box-sizing: border-box;
}

.btn {
  transition: all 0.2s ease;
  cursor: pointer;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #3366ff;
  color: white;
}

.btn-success {
  background-color: #10b981;
  color: white;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-light {
  background-color: #f3f4f6;
  color: #4b5563;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>