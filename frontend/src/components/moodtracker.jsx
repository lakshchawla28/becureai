import React, { useState } from 'react';
import './MoodTracker.css';

const moods = [
  { emoji: "😄", label: "Happy", message: "Good to hear that from you!" },
  { emoji: "😐", label: "Neutral", message: "Stay balanced, you're doing great!" },
  { emoji: "😞", label: "Sad", message: "Talk with BeCure AI, I'm here for you 💙" },
  { emoji: "😡", label: "Angry", message: "Take a deep breath, it helps." },
  { emoji: "😰", label: "Anxious", message: "Let’s calm those nerves together." },
];

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [sparkles, setSparkles] = useState([]);

  const handleMoodClick = (mood) => {
    const audio = new Audio('/pop.mp3');
    audio.play();
    setSelectedMood(mood);

    const sparkle = { id: Date.now() };
    setSparkles((prev) => [...prev, sparkle]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 1000);
  };

  return (
    <div className="flip-container animate-float w-60 h-60 relative">
      <div className={`flipper ${selectedMood ? 'flipped' : ''}`}>
        {/* Front Side: Emoji Only */}
        <div className="front relative bg-white dark:bg-[#1f2a38] text-black dark:text-white rounded-[50%] p-6 shadow-2xl border border-base-300 transition-all duration-300 
hover:shadow-[0_0_40px_20px_rgba(0,204,255,0.4)] flex flex-col items-center justify-start">
  <h3 className="text-lg font-bold text-base-content mb-2 mt-1">How do you feel?</h3>

  <div className="flex-1 w-full flex flex-wrap justify-center items-center gap-4 mt-2">
    {moods.map((mood, i) => (
      <button
        key={i}
        onClick={() => handleMoodClick(mood)}
        className="text-4xl hover:scale-125 transition-transform duration-200"
        title={mood.label}
      >
        {mood.emoji}
      </button>
    ))}
  </div>

          {/* Sparkles */}
          {sparkles.map((s) => (
            <div key={s.id} className="sparkle"></div>
          ))}
        </div>

        {/* Back Side: Mood Message */}
        <div className="back flex items-center justify-center bg-gradient-to-br from-primary/40 to-secondary/30 rounded-[50%] text-base-content text-center p-6 border border-base-300">
          <div>
            <h3 className="text-lg font-bold mb-2">You feel {selectedMood?.label}</h3>
            <p className="text-sm">{selectedMood?.message}</p>
            <button
              className="mt-4 text-xs underline hover:text-primary"
              onClick={() => setSelectedMood(null)}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;






