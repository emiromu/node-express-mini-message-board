const messages = [
    {
      text: "Yaho~",
      user: "Coco",
      added: new Date()
    },
    {
      text: "I wrote this1",
      user: "Titi",
      added: new Date()
    }
  ];
  
  export async function getMessages() {
    return messages;
  };

  export async function newMessage(messageText,messageUser) {
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    return messages;
  };
  
  export default {getMessages, newMessage};