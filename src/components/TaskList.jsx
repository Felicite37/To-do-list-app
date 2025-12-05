import { Droppable, Draggable } from "react-beautiful-dnd";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-full max-w-md"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`flex justify-between items-center bg-white p-3 mb-3 rounded shadow-md transition-all
                    ${snapshot.isDragging ? "bg-green-100 scale-105" : ""}`}
                >
                  <span
                    onClick={() => toggleComplete(task.id)}
                    className={`cursor-pointer flex items-center space-x-2 ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.completed && (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    )}
                    <span>{task.text}</span>
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
