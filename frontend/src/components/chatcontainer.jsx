import React from 'react';
import ChatBubble from './ChatBubble';
import TypingIndicator from './typingindicator';


const ChatContainer = () => {
  const messages = [
    { sender: 'bot', message: 'Hi there! How are you feeling today?' },
    { sender: 'user', message: "I've been feeling a little anxious lately." },
    { sender: 'bot', message: 'I\'m here to support you. Would you like to do a quick breathing exercise?' }
  ];

  return (
    <div className="w-full flex justify-center">
      <div className=" border-base-300 h-[300px] overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <ChatBubble key={index} sender={msg.sender} message={msg.message} />
          ))}

          {/* 👇 Add the typing effect bubble here */}
          <TypingIndicator/>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;




