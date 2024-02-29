// import React, { useState, useEffect } from 'react';
// import firebase from './firebase';
// import Message from './Message';
// import './Chat.css';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const messagesRef = firebase.database().ref('messages');
//     messagesRef.on('value', (snapshot) => {
//       const messagesData = snapshot.val();
//       if (messagesData) {
//         const messagesList = Object.entries(messagesData).map(([key, value]) => ({
//           id: key,
//           ...value
//         }));
//         setMessages(messagesList);
//       }
//     });
//   }, []);

//   const handleDeleteMessage = (id) => {
//     const messageRef = firebase.database().ref(`messages/${id}`);
//     messageRef.remove();
//   };

//   return (
//     <div className="Chat">
//       <div className="MessageContainer">
//         {messages.map((message) => (
//           <Message key={message.id} message={message}>
//             <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
//           </Message>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;




// import React, { useState, useEffect } from 'react';
// import firebase from './firebase';
// import Message from './Message';
// import './Chat.css';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const messagesRef = firebase.database().ref('messages');
//     messagesRef.on('value', (snapshot) => {
//       const messagesData = snapshot.val();
//       if (messagesData) {
//         const messagesList = Object.values(messagesData);
//         setMessages(messagesList);
//       }
//     });
//   }, []);

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== '') {
//       const messagesRef = firebase.database().ref('messages');
//       messagesRef.push({
//         text: newMessage,
//         timestamp: Date.now(),
//       });
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="Chat">
//       <div className="MessageContainer">
//         {messages.map((message, index) => (
//           <Message key={index} message={message} />
//         ))}
//       </div>
//       <div className="InputContainer">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="MessageInput"
//         />
//         <button onClick={handleSendMessage} className="SendButton">Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Message from './Message';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesList = Object.entries(messagesData).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setMessages(messagesList);
      }
    });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const messagesRef = firebase.database().ref('messages');
      messagesRef.push({
        text: newMessage,
        timestamp: Date.now(),
      });
      setNewMessage('');
    }
  };

  const handleDeleteMessage = (id) => {
    const messageRef = firebase.database().ref(`messages/${id}`);
    messageRef.remove();
  };

  return (
    <div className="Chat">
      <div className="MessageContainer">
        {messages.map((message) => (
          <Message key={message.id} message={message}>
            <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
          </Message>
        ))}
      </div>
      <div className="InputContainer">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

