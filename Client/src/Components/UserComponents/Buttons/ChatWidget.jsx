// ChatWidget.js
import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import styles from './ChatWidget.module.css'; // Import the CSS module

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', text: message }]);
      setMessage('');
      // Here you would send the message to your AI backend
      // For now, let's simulate a response
      setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'bot', text: "I'm here to help!" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className={styles.chatWidget}>
      <div className={styles.chatIcon} onClick={toggleChat}>
        <FaCommentDots size={30} />
        {isOpen ? (
          <div className={styles.chatBox}>
            <div className={styles.chatHeader}>We Are Here!</div>
            <div className={styles.chatBody}>
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`${styles.chatMessage} ${
                    chat.sender === 'user' ? styles.user : styles.bot
                  }`}
                >
                  {chat.text}
                </div>
              ))}
            </div>
            <div className={styles.chatFooter}>
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ChatWidget;
