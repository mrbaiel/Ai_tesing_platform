<template>
    <div class="conversation-view">
      <div v-if="selectedChat" class="conversation-container">
        <div class="conversation-header">
          <div class="conversation-info">
            <h2 class="company-name">{{ selectedChat.companyName }}</h2>
            <div class="conversation-details">
              <span class="crm-system">{{ selectedChat.crmSystem }}</span>
              <span class="separator">•</span>
              <span class="timestamp">{{ selectedChat.timestamp }}</span>
            </div>
          </div>
          
        </div>
        
        <div class="conversation-messages">
          <div v-for="(message, index) in selectedChat.messages" :key="index" class="message-wrapper"
            :class="{ 'user-message': message.sender === 'customer', 'ai-message': message.sender === 'ai' }">
            <div class="message">
              <div class="message-header">
                <span class="sender">{{ message.sender === 'customer' ? 'User' : 'AI Assistant' }}</span>
              </div>
              <div class="message-content">
                {{ message.content }}
              </div>
              <div v-if="message.sender === 'ai'" class="message-actions">
                <button class="comment-btn" @click="openCommentModal(message, index)">
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div v-else class="no-conversation">
        <div class="empty-state">
          <div class="empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 class="empty-title">No conversation selected</h3>
          <p class="empty-message">Select a conversation from the list to review</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConversationView',
    props: {
      selectedChatId: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        chats: {
          1: {
            id: 1,
            companyName: 'Xappex',
            crmSystem: 'Hubspot',
            timestamp: '07/03/2025, 10:23:45',
            crmLink: '#',
            messages: [
              {
                sender: 'customer',
                content: 'I need help with my recent order #A12345.'
              },
              {
                sender: 'ai',
                content: 'I\'d be happy to help with your order #A12345. Let me look that up for you.'
              },
              {
                sender: 'ai',
                content: 'I can see your order was shipped yesterday and should arrive by March 10th. Would you like the tracking number?'
              },
              {
                sender: 'customer',
                content: 'Yes, please.'
              },
              {
                sender: 'ai',
                content: 'The tracking number is TRK78901234. You can track it at our website or the carrier\'s site.'
              }
            ]
          },
          2: {
            id: 2,
            companyName: 'Chokoyoyo',
            crmSystem: 'Zendesk',
            timestamp: '07/03/2025, 09:15:22',
            crmLink: '#',
            messages: [
              {
                sender: 'customer',
                content: 'I\'m having trouble logging into my account.'
              },
              {
                sender: 'ai',
                content: 'I\'m sorry to hear that. Can you tell me what error message you\'re seeing?'
              },
              {
                sender: 'customer',
                content: 'It says "Invalid credentials" but I\'m sure I\'m using the right password.'
              },
              {
                sender: 'ai',
                content: 'Let me help you reset your password. Can you confirm the email address associated with your account?'
              },
              {
                sender: 'customer',
                content: 'It\'s john.smith@example.com'
              },
              {
                sender: 'ai',
                content: 'Thank you. I\'ve sent a password reset link to that email. Please check your inbox and follow the instructions.'
              }
            ]
          },
          3: {
            id: 3,
            companyName: 'CocaCola',
            crmSystem: 'Intercom',
            timestamp: '07/03/2025, 16:45:30',
            crmLink: '#',
            messages: [
              {
                sender: 'customer',
                content: 'Does your DataSync Pro support Excel integration?'
              },
              {
                sender: 'ai',
                content: 'Yes, DataSync Pro supports Excel integration through our API. You can import and export data in .xlsx format.'
              },
              {
                sender: 'customer',
                content: 'Great! Can I also schedule automatic exports?'
              },
              {
                sender: 'ai',
                content: 'Absolutely! The enterprise plan includes scheduled exports that can be sent to your email or saved to a cloud storage service.'
              },
              {
                sender: 'customer',
                content: 'Perfect, thanks for the information.'
              }
            ]
          }
        }
      };
    },
    computed: {
      selectedChat() {
        if (!this.selectedChatId) return null;
        return this.chats[this.selectedChatId];
      }
    },
    methods: {
      openCommentModal(message, messageIndex) {
        this.$emit('open-comment-modal', {
          chatId: this.selectedChatId,
          messageIndex: messageIndex,
          message: message
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .conversation-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 64px);
    overflow: hidden;
  }
  
  .conversation-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .conversation-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .conversation-info {
    display: flex;
    flex-direction: column;
  }
  
  .company-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 4px 0;
  }
  
  .conversation-details {
    display: flex;
    align-items: center;
    color: #6b7280;
    font-size: 0.875rem;
  }
  
  .separator {
    margin: 0 8px;
  }
  
  .crm-link {
    color: #3366ff;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .crm-link:hover {
    text-decoration: underline;
  }
  
  .conversation-messages {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .message-wrapper {
    display: flex;
    max-width: 80%;
  }
  
  .user-message {
    align-self: flex-start;
  }
  
  .ai-message {
    align-self: flex-end;
  }
  
  .message {
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  .user-message .message {
    background-color: #f0f4ff;
    color: #1e40af;
  }
  
  .ai-message .message {
    background-color: #e9f5f2;
    border: 1px solid #e5e7eb;
    color: #065f46;
  }
  
  .message-header {
    margin-bottom: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
  }
  
  .message-content {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .message-actions {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  }
  
  .comment-btn {
    background-color: transparent;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 0.75rem;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .comment-btn:hover {
    background-color: #f3f4f6;
    color: #4b5563;
  }
  
  .no-conversation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #6b7280;
  }
  
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .empty-icon {
    color: #d1d5db;
    margin-bottom: 16px;
  }
  
  .empty-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #4b5563;
  }
  
  .empty-message {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
  }
  </style>