import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChatContainer from '../components/chatcontainer';
import MoodTracker from '../components/moodtracker';
import TodaysTasks from '../components/todaystask';
import RandomFact from '../components/randomfact';
import MotivationalQuote from '../components/motivationalquote';
import BreathingAnimation from '../components/breathinganimation';

function Home() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', loginData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
      document.getElementById('auth_modal').close();
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', registerData);
      alert(res.data.message);
      document.getElementById('auth_modal').close();
      // Optional: auto-login after register
      const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
        email: registerData.email,
        password: registerData.password
      });
      localStorage.setItem('token', loginRes.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="relative min-h-screen pt-28 px-4 flex flex-col items-center transition-all duration-300 text-gray-800 dark:text-gray-200">
      <div className="flex-grow relative z-10">
        <div className="w-full max-w-6xl mb-8 text-left pl-4">
          <h1 className="text-4xl font-bold">Welcome to BeCure AI</h1>
          <p className="text-gray-200 mt-1">Your wellness journey starts here...</p>
        </div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-between items-start">
            <div className="hidden lg:block w-[220px]">
              <BreathingAnimation />
            </div>
            <div className="flex-grow">
              <ChatContainer />
            </div>
            <div className="mt-6 lg:mt-0">
              <MoodTracker />
            </div>
          </div>
        </div>

        {/* 🔐 Hide Button After Login */}
        {!isLoggedIn && (
          <div className="w-full max-w-6xl mt-6 pr-4 flex justify-end">
            <button
              className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => document.getElementById('auth_modal').showModal()}
            >
              Get Started →
            </button>
          </div>
        )}

        <div className="w-full max-w-6xl mt-10 flex flex-col lg:flex-row flex-wrap gap-6 justify-between items-start">
          <div className="w-full lg:w-[220px]">
            <TodaysTasks />
          </div>
          <div className="flex-1 min-w-[260px]">
            <RandomFact />
          </div>
          <div className="flex-1 min-w-[260px]">
            <MotivationalQuote />
          </div>
        </div>

        <button className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-lg z-50 transition">
          Need Help?
        </button>
      </div>

      {/* Auth Modal */}
      <dialog id="auth_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#1e293b] text-white rounded-xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Welcome to BeCure AI 👋</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-white">✕</button>
            </form>
          </div>

          {/* Tabs */}
          <div className="tabs tabs-boxed bg-[#334155] mb-6 text-white">
            <a
              className="tab w-1/2 tab-active"
              onClick={() => {
                document.getElementById('loginForm').classList.remove('hidden');
                document.getElementById('registerForm').classList.add('hidden');
              }}
            >
              Login
            </a>
            <a
              className="tab w-1/2"
              onClick={() => {
                document.getElementById('registerForm').classList.remove('hidden');
                document.getElementById('loginForm').classList.add('hidden');
              }}
            >
              Register
            </a>
          </div>

          {/* Login Form */}
          <div id="loginForm">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="input input-bordered w-full mb-3 bg-white dark:bg-[#475569] dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="input input-bordered w-full mb-3 bg-white dark:bg-[#475569] dark:text-white"
            />
            <button className="btn btn-primary w-full" onClick={handleLogin}>
              Login
            </button>
          </div>

          {/* Register Form */}
          <div id="registerForm" className="hidden">
            <input
              type="text"
              placeholder="Full Name"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              className="input input-bordered w-full mb-3 bg-white dark:bg-[#475569] dark:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              className="input input-bordered w-full mb-3 bg-white dark:bg-[#475569] dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              className="input input-bordered w-full mb-3 bg-white dark:bg-[#475569] dark:text-white"
            />
            <button className="btn btn-success w-full" onClick={handleRegister}>
              Create Account
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Home;






