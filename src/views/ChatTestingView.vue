<template>
    <div class="chat-testing-view">
      <HeaderComponent />
      
      <main class="main-content">
        <ConversationsList 
          :selectedChatId="selectedChatId" 
          @select-chat="handleSelectChat" 
        />
        <ConversationView 
          :selectedChatId="selectedChatId"
          @open-comment-modal="handleOpenCommentModal"
        />
      </main>
      
      <FeedbackModal
        :show="showFeedbackModal"
        :chatId="selectedChatId"
        :messageData="selectedMessageData"
        @cancel="closeFeedbackModal"
        @submit="handleFeedbackSubmit"
      />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import ConversationsList from '@/components/ConversationsList.vue';
  import ConversationView from '@/components/ConversationView.vue';
  import FeedbackModal from '@/components/FeedbackModal.vue';
  import { submitFeedback } from '@/services/api';
  
  export default {
    name: 'ChatTestingView',
    components: {
      HeaderComponent,
      ConversationsList,
      ConversationView,
      FeedbackModal
    },
    data() {
      return {
        selectedChatId: 1, // Default to first conversation for demo
        showFeedbackModal: false,
        selectedMessageData: null
      }
    },
    methods: {
      handleSelectChat(chatId) {
        this.selectedChatId = chatId;
      },
      handleOpenCommentModal({messageIndex, message}) {
        this.selectedMessageData = {
          messageIndex,
          message
        };
        this.showFeedbackModal = true;
      },
      closeFeedbackModal() {
        this.showFeedbackModal = false;
        this.selectedMessageData = null;
      },
      async handleFeedbackSubmit({ messageData, feedback }) {
        try {
          await submitFeedback(this.selectedChatId, messageData.messageIndex, feedback);
          // You could add a toast notification here
          console.log('Feedback submitted for chat', this.selectedChatId, 'message index:', messageData.messageIndex, 'with comment:', feedback);
          this.closeFeedbackModal();
        } catch (error) {
          console.error('Error submitting feedback:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-testing-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  </style>