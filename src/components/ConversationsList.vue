<template>
    <div class="conversations-panel">
      <div class="search-container">
        <div class="search-box">
          <span class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input type="text" placeholder="Search conversations..." class="search-input">
        </div>
      </div>
      
      <div class="toolbar">
        <button class="tool-btn">
          <span class="tool-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </span>
          <span>Filter</span>
        </button>
        
        <button class="tool-btn">
          <span class="tool-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          <span>Today</span>
        </button>
<!--         
        <button class="tool-btn">
          <span class="tool-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
        </button> -->
        
        <!-- <button class="tool-btn">
          <span class="tool-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </span>
        </button> -->
      </div>
      
      <div class="conversations-list">
        <div
          v-for="chat in chats"
          :key="chat.id"
          class="conversation-item"
          :class="{ active: selectedChatId === chat.id }"
          @click="selectChat(chat.id)"
        >
          <div class="conversation-content">
            <div class="conversation-header">
              <h3 class="company-name">{{ chat.companyName }}</h3>
              <div class="status-indicator" :class="getStatusClass(chat.status)"></div>
            </div>
            
            <div class="crm-system">{{ chat.crmSystem }}</div>
            
            <p class="preview-text">{{ chat.previewText }}</p>
            
            <div class="conversation-footer">
              <div class="message-count">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>{{ chat.messageCount }} messages</span>
              </div>
              <div class="time">{{ chat.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConversationsList',
    props: {
      selectedChatId: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        chats: [
          {
            id: 1,
            companyName: 'Xappex',
            crmSystem: 'Hubspot',
            previewText: 'I need help with my recent order #A12345.',
            messageCount: 5,
            time: '10:23',
            status: 'pending' // pending, success, error
          },
          {
            id: 2,
            companyName: 'Chokoyoyo',
            crmSystem: 'Zendesk',
            previewText: 'I\'m having trouble logging into my account.',
            messageCount: 6,
            time: '09:15',
            status: 'success'
          },
          {
            id: 3,
            companyName: 'CocaCola',
            crmSystem: 'Intercom',
            previewText: 'Does your DataSync Pro support Excel integration?',
            messageCount: 5,
            time: '16:45',
            status: 'error'
          }
        ]
      }
    },
    methods: {
      selectChat(chatId) {
        this.$emit('select-chat', chatId);
      },
      getStatusClass(status) {
        switch (status) {
          case 'pending':
            return 'status-pending';
          case 'success':
            return 'status-success';
          case 'error':
            return 'status-error';
          default:
            return '';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .conversations-panel {
    background-color: white;
    border-right: 1px solid #e5e7eb;
    height: calc(100vh - 64px);
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
  }
  
  .search-container {
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .search-box {
    display: flex;
    align-items: center;
    background-color: #f3f4f6;
    border-radius: 8px;
    padding: 0 12px;
  }
  
  .search-icon {
    color: #6b7280;
  }
  
  .search-input {
    background: transparent;
    border: none;
    padding: 12px;
    flex-grow: 1;
    font-size: 0.875rem;
    color: #4b5563;
    outline: none;
  }
  
  .toolbar {
    display: flex;
    padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
    gap: 8px;
  }
  
  .tool-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background-color: #f3f4f6;
    border: none;
    border-radius: 6px;
    color: #4b5563;
    font-size: 0.875rem;
    cursor: pointer;
  }
  
  .tool-btn:hover {
    background-color: #e5e7eb;
  }
  
  .conversations-list {
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .conversation-item {
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .conversation-item:hover {
    background-color: #f9fafb;
  }
  
  .conversation-item.active {
    border-left: 3px solid #3366ff;
    background-color: #f0f4ff;
  }
  
  .conversation-content {
    display: flex;
    flex-direction: column;
  }
  
  .conversation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  
  .company-name {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }
  
  .crm-system {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 6px;
  }
  
  .preview-text {
    font-size: 0.875rem;
    margin: 0 0 12px 0;
    color: #4b5563;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .conversation-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .message-count {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #6b7280;
    font-size: 0.75rem;
  }
  
  .time {
    font-size: 0.75rem;
    color: #6b7280;
  }
  
  .status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .status-pending {
    background-color: #fbbf24;
  }
  
  .status-success {
    background-color: #10b981;
  }
  
  .status-error {
    background-color: #ef4444;
  }
  </style>