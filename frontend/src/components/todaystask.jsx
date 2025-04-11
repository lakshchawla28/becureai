import React, { useState } from "react";

const tasks = [
  { text: "Drink water", icon: "💧" },
  { text: "5-min meditation", icon: "🧘‍♂️" },
  { text: "Write a journal", icon: "📓" },
];

function TodaysTasks() {
  const [completed, setCompleted] = useState([]);

  const toggleTask = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="">
      <h3 className="text-lg font-semibold mb-3 text-base-content">Today's Tasks</h3>
      <ul className="space-y-1 text-base-content">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={`flex items-center gap-1 cursor-pointer p-1 rounded-md transition-all duration-200 ${
              completed.includes(index)
                ? "bg-green-500/20 line-through text-green-500"
                : "hover:bg-gray-100 dark:hover:bg-[#2b3b50]"
            }`}
          >
            <span className="text-xl">{task.icon}</span>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodaysTasks;




