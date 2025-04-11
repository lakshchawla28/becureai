import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Profile() {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-32 text-white px-6 pb-20 bg-[#0f172a]">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-10 top-20 px-5 py-2 border border-cyan-400 text-cyan-300 rounded-md shadow-lg hover:scale-105 hover:shadow-cyan-500 transition-all duration-300 neon-glow"
      >
        ← Back
      </button>

      {/* Layout: Progress | Avatar | Stats */}
      <div className="flex items-center justify-center mt-10 gap-24 flex-wrap">

        {/* Progress Bars */}
        <div className="space-y-5 text-white">
          <div>
            <p className="text-sm mb-1">Conversation Handling</p>
            <progress className="progress progress-success w-56" value="70" max="100" />
          </div>
          <div>
            <p className="text-sm mb-1">Mood Detection</p>
            <progress className="progress progress-success w-56" value="40" max="100" />
          </div>
          <div>
            <p className="text-sm mb-1">User Memory</p>
            <progress className="progress progress-success w-56" value="10" max="100" />
          </div>
          <div>
            <p className="text-sm mb-1">Emergency Response</p>
            <progress className="progress progress-success w-56" value="90" max="100" />
          </div>
          <div>
            <p className="text-sm mb-1">Mental Analysis</p>
            <progress className="progress progress-success w-56" value="60" max="100" />
          </div>
        </div>

        {/* Avatar */}
        <div className="avatar mt-6">
          <div className="w-44 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        {/* AI Stats */}
        <div className="stats shadow-lg bg-[#1f2937] hover:shadow-[0_0_40px_20px_rgba(0,204,255,0.4)] text-cyan-200">
          <div className="stat">
            <div className="stat-title text-cyan-400">AI Conversations</div>
            <div className="stat-value text-white">7,843</div>
            <div className="stat-desc text-cyan-300">This month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-cyan-400">Active Users</div>
            <div className="stat-value text-white">1,257</div>
            <div className="stat-desc text-cyan-300">↗︎ 32% growth</div>
          </div>

          <div className="stat">
            <div className="stat-title text-cyan-400">Mood Sessions</div>
            <div className="stat-value text-white">532</div>
            <div className="stat-desc text-cyan-300">AI mental wellness</div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md mt-16 bg-[#1e293b] rounded-xl p-6 shadow-md shadow-cyan-500/10">
        {/* Username */}
        <label className="block text-cyan-300 mb-2 text-lg">Username</label>
        <div className="relative mb-4">
          <input
            type="text"
            required
            placeholder="Enter username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-cyan-500 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <p className="text-sm text-gray-400 mt-1">
            Must be 3 to 30 characters containing only letters, numbers or dash
          </p>
        </div>

        {/* Bio */}
        <label htmlFor="bio" className="block text-cyan-300 mb-2 text-lg">Your Bio</label>
        <textarea
          id="bio"
          className="textarea textarea-bordered w-full h-32 bg-[#0f172a] text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none rounded-lg p-3 placeholder:text-gray-400"
          placeholder="Tell us something about yourself..."
        ></textarea>
        <p className="text-sm text-gray-400 mt-1">Optional</p>
      </div>


      {/* Motivational Quote */}
      <div className="mt-20 text-center text-sm text-gray-400 px-6 max-w-xl">
        "Your present circumstances don’t determine where you can go; they merely determine where you start."
      </div>



      <Footer />
    </div>
  )
}

export default Profile








