import React, { useState } from "react";
export  function TaskManagerPage(){
export default function Projects() {
    const TaskManagerPage: React.FC = () => {
      const [timers, setTimers] = useState<{ [key: string]: number }>({
        task1: 1800, // Example: 30 minutes in seconds
        task2: 1200, // Example: 20 minutes in seconds
        task3: 600, // Example: 10 minutes in seconds
      });
    
      const handleTimerChange = (taskId: string, adjustment: number) => {
        setTimers((prev) => ({
          ...prev,
          [taskId]: Math.max(prev[taskId] + adjustment, 0), // Prevent negative time
        }));
      };
    
      const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
      };
    
      return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-xl font-bold border-b border-gray-700">Task Manager</div>
            <nav className="flex-1 mt-4">
              <ul>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Tasks</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Projects</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Teams</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
              </ul>
            </nav>
          </aside>
    
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Tasks</h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
            </header>
    
            {/* Task List */}
            <div className="p-6 space-y-4">
              {/* Task Card */}
              {Object.entries(timers).map(([taskId, time]) => (
                <div
                  key={taskId}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold text-lg">Task {taskId}</h2>
                    <p className="text-sm text-gray-500">Adjustable Timer</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded">
                      {formatTime(time)}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTimerChange(taskId, -60)}
                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        -1 min
                      </button>
                      <button
                        onClick={() => handleTimerChange(taskId, 60)}
                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        +1 min
                      </button>
                    </div>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
}
}
