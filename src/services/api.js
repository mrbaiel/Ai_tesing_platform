// Базовый URL вашего API - закомментирован, пока не нужен
// const API_URL = 'https://your-api-url.com/api';

/**
 * Получение списка чатов для тестирования
 * @returns {Promise<Array>} Массив чатов
 */
export async function fetchChats() {
    // try {
    //   // Моковые данные для примера
      return [
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
      ];
    // } catch (error) {
    //   console.error('Ошибка при получении данных:', error);
    //   throw error;
    // }
  }
  
  /**
   * Получение деталей чата по ID
   * @param {Number} chatId - ID чата
   * @returns {Promise<Object>} Объект с деталями чата
   */
  export async function fetchChatDetails(chatId) {
    try {
      // Моковые данные чатов
      const mockChats = {
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
      };
      
      return mockChats[chatId] || null;
    } catch (error) {
      console.error('Ошибка при получении деталей чата:', error);
      throw error;
    }
  }
  
  /**
   * Отправка обратной связи по конкретному сообщению в чате
   * @param {Number} chatId - ID чата
   * @param {Number} messageIndex - Индекс сообщения
   * @param {String} comment - Комментарий с обратной связью
   * @returns {Promise<Object>} Результат операции
   */
  export async function submitFeedback(chatId, messageIndex, comment) {
    try {
      // Моковый ответ для примера
      console.log('Отправка обратной связи:', { chatId, messageIndex, comment });
      return { success: true };
    } catch (error) {
      console.error('Ошибка при отправке обратной связи:', error);
      throw error;
    }
  }