<template>
  <div v-if="show" class="modal-overlay" @click.self="handleCancel">
    <div class="modal-container">
      <h2 class="modal-title">Provide Feedback</h2>
      
      <div class="feedback-form">
        <div class="form-group">
          <label class="form-label">Add your comment about this response:</label>
          <textarea 
            v-model="feedbackText" 
            class="form-textarea" 
            placeholder="Please describe the issue..."
            rows="5"
          ></textarea>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn-light" @click="handleCancel">Cancel</button>
        <button 
          class="btn btn-primary" 
          @click="handleSubmit"
          :disabled="!feedbackText.trim()"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    chatId: {
      type: Number,
      default: null
    },
    messageData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      feedbackText: ''
    }
  },
  methods: {
    handleCancel() {
      this.feedbackText = '';
      this.$emit('cancel');
    },
    handleSubmit() {
      if (!this.feedbackText.trim()) return;
      
      this.$emit('submit', {
        messageData: this.messageData,
        feedback: this.feedbackText
      });
      
      this.feedbackText = '';
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 0 24px;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 500px;
  overflow: hidden;
}

.modal-title {
  padding: 16px 24px;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
}

.feedback-form {
  padding: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
}

.form-textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #111827;
  resize: vertical;
}

.form-textarea:focus {
  outline: none;
  border-color: #3366ff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid #e5e7eb;
}
</style>