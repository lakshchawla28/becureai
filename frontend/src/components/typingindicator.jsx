import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-end">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-xs animate-pulse">
        <span className="typing-dots">Typing...</span>
      </div>
    </div>
  );
};

export default TypingIndicator;
