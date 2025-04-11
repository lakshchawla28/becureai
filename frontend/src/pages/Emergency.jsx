import React from 'react';

function Emergency() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-10  flex flex-col items-center gap-10">
      
      {/* HELP ME BUTTON */}
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-2xl font-semibold text-cyan-400 mb-4">Emergency Help</h1>
        <p className="text-white mb-6">If you’re feeling overwhelmed or need immediate support, click below.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300">
          HELP ME
        </button>
      </div>

      {/* RESOURCES */}
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-3xl text-white">
        <h2 className="text-xl font-semibold text-cyan-400 mb-4">Quick Resources</h2>
        <ul className="space-y-3">
          <li>📞 Suicide Prevention Line – 1800-000-000 (placeholder)</li>
          <li>💬 Mental Health Chat – Available 24/7</li>
          <li>🧠 Local Counselor – yourcare@example.com</li>
        </ul>
      </div>

      {/* GROUNDING TECHNIQUES */}
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-3xl text-white">
        <h2 className="text-xl font-semibold text-cyan-400 mb-4">Calming Techniques</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🖐 Name 5 things you can see</li>
          <li>👂 Name 4 things you can hear</li>
          <li>👃 Name 3 things you can smell</li>
          <li>🤲 Name 2 things you can touch</li>
          <li>👅 Name 1 thing you can taste</li>
        </ul>
      </div>

      {/* QUOTES */}
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-3xl text-white text-center">
        <p className="text-lg italic">"You are not alone. You matter. Breathe slowly, this moment will pass."</p>
      </div>
    </div>
  );
}

export default Emergency;

