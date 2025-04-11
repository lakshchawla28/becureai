import React from 'react';
import { Bot, User } from 'lucide-react'; // Icons from lucide-react

const ChatBubble = ({ message, sender }) => {
  const isBot = sender === 'bot';

  return (
    <div className={`flex items-start gap-2 ${isBot ? 'justify-start' : 'justify-end'} transition-all duration-300`}>
      {/* Icon for Bot */}
      {isBot && (
        <div className="p-2 bg-success/20 text-success rounded-full">
          <Bot size={16} />
        </div>
      )}

      {/* Chat Bubble */}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl shadow-md text-sm leading-relaxed ${
          isBot
            ? 'bg-base-200 text-base-content rounded-bl-none'
            : 'bg-primary text-primary-content rounded-br-none'
        }`}
      >
        {message}
      </div>

      {/* Icon for User */}
      {!isBot && (
        <div className="p-2 bg-primary text-primary-content rounded-full">
          <User size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;


