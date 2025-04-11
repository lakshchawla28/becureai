import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-6 px-4 md:px-10 mt-10 bg-transparent shadow-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-[#00796b]">BeCure AI</h2>
          <p className="text-sm">You're not alone. We're here for you.</p>
          <p className="text-xs mt-1 text-gray-500">“Mental wellness is a journey — not a destination.”</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00796b]" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="hover:text-[#00796b]" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="hover:text-[#00796b]" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#00796b]" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs flex items-center gap-1 text-[#00796b] hover:underline"
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 mt-4 pt-3 text-center text-xs text-gray-600">
        Made with <Heart size={14} className="inline text-red-500" /> by <span className="font-medium text-[#00796b]">Team ALPHA</span> | &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
