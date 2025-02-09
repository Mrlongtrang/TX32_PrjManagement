"use client";

import React, { useState } from "react";

interface Task {
  id: string;
  title: string;
  status: string;
}

interface Tasks {
  [key: string]: Task[];
}

const JiraBacklogPage: React.FC = () => {
  const [expandedEpics, setExpandedEpics] = useState<{ [key: string]: boolean }>({
    epic1: true,
    epic2: true,
  });

  const [tasks, setTasks] = useState<Tasks>({
    epic1: [
      { id: "task1", title: "Set up project structure", status: "DONE" },
      { id: "task2", title: "Integrate backend APIs", status: "TODO" },
      { id: "task3", title: "Create login UI", status: "TESTING" },
    ],
    epic2: [
      { id: "task4", title: "Build dashboard overview", status: "IN PROGRESS" },
      { id: "task5", title: "Test Google login API", status: "TESTING" },
      { id: "task6", title: "Fix navigation bugs", status: "TODO" },
    ],
  });

  const [newTask, setNewTask] = useState<{ [key: string]: string }>({});

  const toggleEpic = (epicId: string) => {
    setExpandedEpics((prev) => ({
      ...prev,
      [epicId]: !prev[epicId],
    }));
  };

  const taskStatusOptions = ["TODO", "IN PROGRESS", "TESTING", "DONE"];

  const updateTaskStatus = (epicId: string, taskId: string, newStatus: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks[epicId]?.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ) || [];
      return { ...prevTasks, [epicId]: updatedTasks };
    });
  };

  const addNewTask = (epicId: string) => {
    if (newTask[epicId]?.trim()) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [epicId]: [
          ...prevTasks[epicId],
          { id: `task${Date.now()}`, title: newTask[epicId], status: "TODO" },
        ],
      }));
      setNewTask((prev) => ({ ...prev, [epicId]: "" }));
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-6">
        <h1 className="text-xl font-semibold">Backlog</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Epic</button>
      </header>

      <div className="space-y-6">
        {Object.entries(tasks).map(([epicId, epicTasks]) => (
          <div key={epicId} className="bg-white shadow-md rounded-lg">
            <button
              onClick={() => toggleEpic(epicId)}
              className="w-full text-left p-4 font-bold text-lg bg-gray-200 rounded-t-lg hover:bg-gray-300"
            >
              {epicId}
            </button>
            {expandedEpics[epicId] && (
              <div className="p-4">
                <div className="space-y-4">
                  {epicTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center p-4 bg-gray-100 rounded shadow"
                    >
                      <span className="font-medium">{task.title}</span>
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(epicId, task.id, e.target.value)}
                        className={`px-2 py-1 rounded text-sm font-semibold focus:outline-none border ${
                          task.status === "DONE"
                            ? "bg-green-200 text-green-700"
                            : task.status === "IN PROGRESS"
                            ? "bg-yellow-200 text-yellow-700"
                            : task.status === "TESTING"
                            ? "bg-blue-200 text-blue-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {taskStatusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex space-x-2">
                  <input
                    type="text"
                    placeholder="New task title"
                    value={newTask[epicId] || ""}
                    onChange={(e) =>
                      setNewTask((prev) => ({ ...prev, [epicId]: e.target.value }))
                    }
                    className="flex-1 p-2 border rounded"
                  />
                  <button
                    onClick={() => addNewTask(epicId)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JiraBacklogPage;

