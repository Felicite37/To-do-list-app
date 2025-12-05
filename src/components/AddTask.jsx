import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 w-full max-w-md">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="p-3 border rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600 flex items-center"
      >
        <PlusCircleIcon className="w-6 h-6" />
      </button>
    </form>
  );
}
