import React from 'react';

const reminders = [
  { title: 'Take medicine', time: '9:00 AM', status: 'Pending' },
  { title: 'Go for a walk', time: '6:30 PM', status: 'Completed' },
  { title: 'Drink water', time: 'Every 2 hrs', status: 'Pending' },
];

function Reminders() {
  return (
    <>
    <div className="min-h-screen pt-24 px-4 pb-10  flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-3xl text-cyan-400 font-semibold mb-8">YOUR REMINDERS</h1>

      {/* Reminder List */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[rgba(255,255,255,0.05)] backdrop-blur-md text-white p-4 rounded-xl shadow-lg"
          >
            <div>
              <h2 className="text-lg font-semibold">{reminder.title}</h2>
              <p className="text-sm text-gray-300">{reminder.time}</p>
            </div>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                reminder.status === 'Completed'
                  ? 'bg-green-600'
                  : 'bg-yellow-600'
              }`}
            >
              {reminder.status}
            </span>
          </div>
        ))}
      </div>

      {/* Add Reminder Box (UI only) */}
      <div className="w-full max-w-3xl mt-10 bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Add New Reminder</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Reminder title"
            className="bg-transparent border border-cyan-400 rounded-lg px-4 py-2 text-white placeholder:text-gray-400"
          />
          <input
            type="time"
            className="bg-transparent border border-cyan-400 rounded-lg px-4 py-2 text-white"
          />
          <button
            type="button"
            className="self-start bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg"
          >
            Add Reminder
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Reminders;

