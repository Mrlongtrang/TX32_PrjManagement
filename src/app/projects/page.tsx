"use client";

import React, { useState } from "react";

interface Task {
  id: string;
  title: string;
  assignee: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const JiraBoardPage: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "task1", title: "Set up project structure", assignee: "TA" },
        { id: "task2", title: "Integrate backend APIs", assignee: "TA" },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        { id: "task3", title: "Create login UI", assignee: "NN" },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      tasks: [
        { id: "task6", title: "Perform integration tests", assignee: "JN" },
        { id: "task7", title: "Fix UI bugs", assignee: "TA" },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        { id: "task4", title: "Research design options", assignee: "MN" },
        { id: "task5", title: "Implement user registration", assignee: "TA" },
      ],
    },
  ]);

  const [newTaskInput, setNewTaskInput] = useState<{ [key: string]: string }>({});
  const [showInputBox, setShowInputBox] = useState<{ [key: string]: boolean }>({});

  const handleAddTask = (columnId: string) => {
    if (newTaskInput[columnId]?.trim()) {
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === columnId
            ? {
                ...col,
                tasks: [
                  ...col.tasks,
                  { id: `task${Date.now()}`, title: newTaskInput[columnId], assignee: "Unassigned" },
                ],
              }
            : col
        )
      );
      setNewTaskInput((prev) => ({ ...prev, [columnId]: "" }));
      setShowInputBox((prev) => ({ ...prev, [columnId]: false }));
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-6 space-y-6">
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-xl font-semibold">Project Board</h1>
      </header>

      <div className="grid grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-bold text-lg mb-4">{column.title}</h2>
            <div className="space-y-4">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-gray-100 rounded shadow flex justify-between items-center"
                >
                  <span className="font-medium">{task.title}</span>
                  <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm font-semibold">
                    {task.assignee}
                  </span>
                </div>
              ))}
            </div>
            {showInputBox[column.id] ? (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="New task title"
                  value={newTaskInput[column.id] || ""}
                  onChange={(e) => setNewTaskInput((prev) => ({ ...prev, [column.id]: e.target.value }))}
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={() => handleAddTask(column.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                  Add Task
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowInputBox((prev) => ({ ...prev, [column.id]: true }))}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                Create Issue
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JiraBoardPage;



