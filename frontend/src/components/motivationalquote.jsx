import React from 'react';

const quotes = [
  "You’re doing better than you think.",
  "One small positive thought in the morning can change your whole day.",
  "Your mental health is a priority. Take care of it 💙",
  "It’s okay to ask for help. You’re not alone.",
  "Progress is progress, no matter how small.",
  "Breathe. You got this.",
  "Healing is not linear, and that’s okay.",
  "You are enough. You always were.",
  "Your story is still being written.",
  "You’ve survived 100% of your bad days so far."
];

const todayIndex = new Date().getDate() % quotes.length;
const quoteOfTheDay = quotes[todayIndex];

function MotivationalQuote() {
  return (
    <div className="  transition-colors duration-300">
      <h3 className="text-lg font-semibold mb-1 text-base-content">💬 Quote of the Day</h3>
      <p className="text-sm italic text-base-content opacity-70">"{quoteOfTheDay}"</p>
    </div>
  );
}

export default MotivationalQuote;


