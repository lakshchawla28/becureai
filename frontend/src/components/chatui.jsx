import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './chatui.css';

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😞", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
];

function ChatUI({ userName = "Laksh" }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hi ${userName} 👋 \n How do feel today ?`, moodAsked: false },
  ]);
  const [input, setInput] = useState('');
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  const getBotResponse = (userMsg) => {
    if (selectedMood === "Sad" || userMsg.includes("lonely")) {
      return "I'm here for you 💙 Try listening to some calming music or writing down your thoughts.";
    } else if (selectedMood === "Anxious") {
      return "Let’s try a breathing exercise together: inhale 4s, hold 4s, exhale 4s 🌬️";
    } else {
      return "Thank you for sharing. I'm listening.";
    }
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood.label);
    setMessages(prev => [
      ...prev,
      { sender: 'bot', text: `What made you feel ${mood.label.toLowerCase()}? Can you tell me more?` },
    ]);
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4 ml-0 md:ml-64">
      <div className="chat-container w-full max-w-6xl min-h-[500px] flex flex-col justify-between">
        <div className="text-3xl font-bold mb-6 text-center text-cyan-400">BeCure ChatBot</div>

        <ScrollToBottom className="chat-box flex-1 max-h-[400px] overflow-y-auto flex flex-col gap-4 px-2">
  {messages.map((msg, i) => (
    <div key={i} className={`chat-message ${msg.sender}`}>
      <div className="icon">
        {msg.sender === 'bot' ? '🤖' : '👤'}
      </div>
      <div
        className={`chat-bubble ${
          msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'
        }`}
      >
        {msg.text}
      </div>
    </div>
  ))}

  {!selectedMood && (
    <div className="flex flex-col items-center mt-2">
      <div className="flex flex-wrap justify-center gap-4 mb-1">
        {moods.map((mood, i) => (
          <button
            key={i}
            onClick={() => handleMoodClick(mood)}
            className="text-4xl hover:scale-110 transition-transform"
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {/* White line beneath emojis */}
      <div className="h-[1px] w-full bg-white opacity-30 max-w-xs"></div>
    </div>
  )}
</ScrollToBottom>



        {selectedMood && (
          <div className="input-section flex gap-3 pt-4 border-t border-cyan-900 mt-2">
            <input
              type="text"
              placeholder="Type your thoughts..."
              className="input input-bordered w-full text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatUI;


