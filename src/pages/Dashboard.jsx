import { useState } from "react";

export default function Dashboard() {
  // GET LOGGED IN USER
  const admin = JSON.parse(localStorage.getItem("studentUser"));

  // GET CURRENT HOUR
  const hour = new Date().getHours();

  // GREETING
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Math Assignment",
      description: "Finish chapter 5 and 6 exercises",
      priority: "High",
      status: "Pending",
    },

    {
      id: 2,
      title: "Practice React Hooks",
      description: "Complete useState and useEffect exercises",
      priority: "Medium",
      status: "Completed",
    },
  ]);

  // Add Task
  const handleAddTask = () => {
    if (!title || !description) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority: "Medium",
      status: "Pending",
    };

    setTasks([newTask, ...tasks]);

    setTitle("");
    setDescription("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Status
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task,
      ),
    );
  };

  // Stats
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  return (
    <div className="p-5 bg-gray-100 h-screen overflow-hidden flex flex-col">
      {/* Top Section */}
      <div className="flex gap-5 mb-5">
        <div className="flex-1 bg-indigo-50 rounded-2xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hello, {greeting} {admin?.name || "Student"} 👋
          </h1>

          <p className="text-gray-600">
            You have {pendingTasks} pending tasks today.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white rounded-2xl p-6 w-32 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">{tasks.length}</h2>

            <p className="text-gray-500 mt-2">All Tasks</p>
          </div>

          <div className="bg-white rounded-2xl p-6 w-32 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-yellow-500">
              {pendingTasks}
            </h2>

            <p className="text-gray-500 mt-2">Pending</p>
          </div>

          <div className="bg-white rounded-2xl p-6 w-32 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-green-600">
              {completedTasks}
            </h2>

            <p className="text-gray-500 mt-2">Completed</p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex gap-5 flex-1 overflow-hidden">
        {/* Add Task */}
        <div className="bg-white rounded-2xl p-6 shadow-sm w-[350px]">
          <h2 className="text-2xl font-semibold mb-5">Add New Task</h2>

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-indigo-500"
          />

          <textarea
            rows="5"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleAddTask}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
          >
            + Add Task
          </button>
        </div>

        {/* Tasks */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Tasks</h2>
          </div>

          <div className="overflow-y-auto flex-1 pr-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border border-gray-200 rounded-xl p-5 mb-4"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h3>

                <p className="text-gray-500 mt-2">{task.description}</p>

                <div className="flex items-center justify-between mt-5">
                  {/* Status */}
                  <span
                    className={`px-4 py-1 rounded-full text-sm ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleStatus(task.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Toggle
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
