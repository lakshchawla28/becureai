import React, { useEffect, useState } from 'react';
import { Home, Bot, Info, Moon, Sun, User, Settings, LogOut } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) {
      const storedName = localStorage.getItem('name') || 'User';
      setUser({ name: storedName });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setUser(null);
    window.location.reload(); // Optional: refresh to reset UI
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg bg-base-100 bg-opacity-95 backdrop-blur-lg' : 'bg-base-100 bg-opacity-80 backdrop-blur-md'
    }`}>
      <div className="navbar px-4 lg:px-10">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg rounded-box w-52 bg-base-200">
              <li><a href="/"><Home className="w-4 h-4" /> Home</a></li>
              <li><a href="/ChatPage"><Bot className="w-4 h-4" /> ChatBot</a></li>
              <li><a href="/Resources">📁 Resources</a></li>
              <li><a href="/About"><Info className="w-4 h-4 text-white-500" /> About</a></li>
            </ul>
          </div>
          <a className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            🧠 BECURE AI
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li><a href="/"><Home className="w-4 h-4" /> Home</a></li>
            <li><a href="/ChatPage"><Bot className="w-4 h-4" /> ChatBot</a></li>
            <li><a href="/Resources">📁 Resources</a></li>
            <li><a href="/About"><Info className="w-4 h-4 text-white-500" /> About</a></li>
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end flex gap-4 items-center">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <Sun className="swap-off w-6 h-6 text-yellow-500" />
            <Moon className="swap-on w-6 h-6 text-purple-600" />
          </label>

          {/* Auth Section */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={`https://ui-avatars.com/api/?name=${user.name}`} alt="User Avatar" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-200 rounded-box w-48">
                <li><a><User className="w-4 h-4" /> Profile</a></li>
                <li><a><Settings className="w-4 h-4" /> Settings</a></li>
                <li>
                  <a className="text-error" onClick={handleLogout}>
                    <LogOut className="w-4 h-4" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => document.getElementById('auth_modal')?.showModal()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;


