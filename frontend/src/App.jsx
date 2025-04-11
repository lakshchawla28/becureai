import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import ChatBot from './pages/ChatBot';
import Profile from './pages/Profile';
import About from './pages/About';
import ChartPage from './pages/ChartPage';
import Reminders from './pages/Reminders';
import Emergency from './pages/Emergency';
import Resources from './pages/Resources';

function App() {
  const location = useLocation();
  const isChatPage = location.pathname === '/ChatPage';
  const isProfilePage = location.pathname === '/Profile';
  const isChartPage = location.pathname === '/ChartPage';

  return (
    <div className="relative flex flex-col min-h-screen text-white">

      {/* Background video and overlay only if NOT on /Profile */}
      {!isProfilePage && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1] brightness-[0.3]"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="fixed inset-0 bg-gradient-to-b from-[#1f2a38]/80 to-transparent z-[-1]" />
        </>
      )}

      {/* Navbar */}
      {!isChatPage && !isProfilePage && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatPage" element={<ChatBot />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/ChartPage" element={<ChartPage />} />
        <Route path="/ChatBot" element={<ChatBot />} />
        <Route path="/Reminders" element={<Reminders />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Resources" element={<Resources />} />
        
      </Routes>

      {/* Footer */}
      {!isChatPage && !isProfilePage && !isChartPage && <Footer />}
    </div>
  );
}

export default App;















