<template>
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <router-link to="/" class="logo">
            Pointai
          </router-link>
        </div>
        
        <nav class="main-nav">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </nav>
        
        <div class="header-right">
          <!-- <button class="notification-btn">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>
          </button> -->
          
          <div class="user-profile">
            <button class="profile-btn">
              <div class="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span class="username">Benazir</span>
              <span class="dropdown-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  .header {
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 24px;
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: #141720;
    text-decoration: none;
  }
  
  .main-nav {
    display: flex;
    margin: 0 24px;
  }
  
  .nav-link {
    display: inline-block;
    padding: 8px 16px;
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    margin: 0 4px;
  }
  
  .nav-link:hover, .nav-link.router-link-active {
    color: #111827;
  }
  
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .notification-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: #4b5563;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
  
  .notification-btn:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
  
  .user-profile {
    position: relative;
  }
  
  .profile-btn {
    background-color: #f0f4ff;
    border: none;
    border-radius: 9999px;
    padding: 6px 12px 6px 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #d1e0ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3366ff;
    margin-right: 8px;
  }
  
  .username {
    font-weight: 500;
    font-size: 0.875rem;
    margin-right: 4px;
  }
  
  .dropdown-icon {
    color: #6b7280;
  }
  </style>