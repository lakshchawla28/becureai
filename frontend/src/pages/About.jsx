import React from 'react'

function About() {
  return (
    <div className="min-h-screen px-6 py-24 flex flex-col items-center text-white ">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">About This Project</h1>

      <p className="max-w-3xl text-center text-gray-300 leading-relaxed">
        This mental wellness app was built with a simple intention — to be a soft space in a loud world.
        <br /><br />
        In a time where everyone seems connected, yet so many feel unheard, I wanted to create something that listens — truly listens.
        Whether it’s tracking moods, having an AI-powered conversation, or just letting someone breathe without being judged — this platform aims to be your companion in the background.
      </p>

      <h2 className="text-2xl font-semibold text-cyan-300 mt-16 mb-4">About Me</h2>
      <p className="max-w-2xl text-center text-gray-400">
        Hi, I’m Laksh — a learner, builder, and someone who believes that code can do more than just solve problems... it can heal, support, and uplift too.
        <br /><br />
        This project is not just a bunch of components, APIs, and logic. It’s a reflection of what I believe in — that technology should serve humanity.
        <br />
        I hope this platform helps someone, somewhere, feel a little less alone.
      </p>

      <p className="text-sm text-gray-500 mt-16 text-center italic">
        "Healing doesn't mean the damage never existed. It means the damage no longer controls your life."
      </p>
    </div>
  )
}

export default About

