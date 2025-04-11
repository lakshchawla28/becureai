import React, { useState } from 'react'
import './RandomFact.css'

const facts = [
  "Laughter reduces stress and boosts your immune system.",
  "Spending time in nature can improve your mood.",
  "Deep breathing calms your nervous system.",
  "Gratitude can rewire your brain for positivity.",
  "Listening to music you love boosts dopamine levels.",
  "Journaling helps process emotions and reduce anxiety.",
  "Your body releases happy hormones when you smile—even if you fake it!",
  "Small breaks during work increase productivity and focus.",
  "A tidy space often leads to a tidy mind.",
  "Drinking enough water improves mental clarity."
]

function RandomFact() {
  const [factIndex, setFactIndex] = useState(0)

  const handleNext = () => {
    const next = Math.floor(Math.random() * facts.length)
    setFactIndex(next)
  }

  return (
    <div className=" animate-fadeInUp transition-all duration-300">
      <h3 className="text-lg font-semibold mb-1">🧠 Random Fact</h3>
      <p className="text-sm italic mb-3 opacity-80">{facts[factIndex]}</p>
      <button
        onClick={handleNext}
        className="text-sm px-4 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 dark:text-white"
      >
        🔄 Show Another Fact
      </button>
    </div>
  )
}

export default RandomFact

