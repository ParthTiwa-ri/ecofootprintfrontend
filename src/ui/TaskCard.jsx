import React, { useState } from "react";

function TaskCard({ title, disabled, description, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    alert("20 Coins Added");
    onComplete(); // Call the onComplete function passed from the parent component
  };

  return (
    <div
      className={`bg-white p-2 w-[15rem] h-auto rounded-xl drop-shadow-xl flex flex-col gap-5 items-start hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 justify-between ${
        disabled || isCompleted ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <span className="bg-transparent border border-green-800 rounded-md p-1 text-green-800">
        Task 1
      </span>
      <h2 className="text-2xl font-bold text-green-800">{title}</h2>
      <div className="space-y-5">
        <h2 className="text-md font-bold text-black">{description}</h2>
        <button
          className="bg-green-800 text-white rounded-full p-2 w-full"
          disabled={disabled || isCompleted}
          onClick={handleComplete}
        >
          Complete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
