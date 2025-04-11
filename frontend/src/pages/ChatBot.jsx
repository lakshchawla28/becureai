import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import ChatUI from '../components/chatui';

function ChatBot() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar2 />

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-22 left-4 z-50 bg-transparent border border-cyan-400 text-cyan-300 px-3 py-1 rounded-md hover:scale-105 transition duration-300"
      >
        {showSidebar ? '← Hide' : '☰ Guidelines'}
      </button>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-28 left-0 h-full w-64 bg-transparent text-sm p-5 transition-transform duration-500 z-40 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold text-cyan-400 mb-4">Guidelines</h2>
        <ul className="space-y-3 text-gray-200">
          <li>🌸 Keep your thoughts short and clear.</li>
          <li>💬 You can talk about your day, feelings, or ask for help.</li>
          <li>🤖 This bot is here to listen — not to judge.</li>
          <li>⭐ Avoid sharing sensitive or personal details.</li>
          <li>🌿 Be honest — this is your safe space.</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-32 px-8 text-center">
        

        {/* Placeholder */}
        <div className="w-full flex justify-center">
  <ChatUI userName="Laksh" />
</div>

        {/* Motivation Quote */}
        <p className="text-sm text-gray-400 italic mt-24">
          "Every small step you take toward healing counts, even if no one sees it but you."
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ChatBot;






