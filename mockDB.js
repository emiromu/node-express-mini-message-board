const messages = [
    {
      text: "Yaho~",
      user: "Coco",
      added: new Date()
    },
    {
      text: "I wrote this!",
      user: "Titi",
      added: new Date()
    }
  ];
  
  export async function getMessages() {
    return messages;
  };

  export async function getMessage(user,date) {
      console.log('db.getMessage() has started')
    for (let i in messages) {
        if(JSON.stringify(messages[i].user) == user && JSON.stringify(messages[i].added) == date)
            return messages[i];
    }
    return {text:"NOT FOUND", user:"NOT FOUND", added:"NOT FOUND"};
  };

  export async function newMessage(messageText,messageUser) {
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    return messages;
  };
  
  export default {getMessages, newMessage, getMessage};