export default function Tasks() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Main Content */}

      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Tasks</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Task
        </button>
      </header>

      {/* Task List */}
      <div className="p-6 space-y-4">
        {/* Task Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Complete Design Mockups</h2>
            <p className="text-sm text-gray-500">Due: Jan 15, 2025</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
              In Progress
            </span>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>

        {/* Another Task Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Update Documentation</h2>
            <p className="text-sm text-gray-500">Due: Jan 20, 2025</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
              Pending
            </span>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>

        {/* Another Task Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Team Meeting Preparation</h2>
            <p className="text-sm text-gray-500">Due: Jan 25, 2025</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
              Overdue
            </span>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
