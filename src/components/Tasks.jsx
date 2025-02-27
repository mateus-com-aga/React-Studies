/** @format */

import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  return (
    <ul className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.completed && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
