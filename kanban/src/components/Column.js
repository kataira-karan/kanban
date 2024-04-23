import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useState } from "react";

const Column = ({ col }) => {
  const { data, setdata, taskList, settaskList } = useContext(DataContext);

  console.log(taskList);

  const [task, settask] = useState("");

  const generateId = () => {
    return Math.floor(Math.random() * 100001);
  };

  const addTask = (e) => {
    e.preventDefault();
    let t = {
      id: generateId(),
      task,
      columnId: col.id,
    };
    settaskList([...taskList, t]);
    settask("");
  };

  return (
    <div className="w-64  bg-blue-200 mx-4 py-4 rounded-lg">
      <span className="font-bold pl-4 "> {col.title} </span>

      {/* TASK LIST  */}
      {/* TASK OBJECT HAS A COLUMN ID , AND IT IS COMPARED WITH COL ID FROM THE PROP TO DISPLAY TASKS */}

      <div>
        <ul>
          {taskList.map((t) => {
            return t.columnId === col.id ? (
              <li
                key={t.id}
                className="flex justify-between my-2 px-2 py-1.5 mx-2  text-sm font-poppins  transition rounded-md hover:cursor-grab hover:bg-cyan-100 duration-300 "
              >
                <span> {t.task}</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4  "
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ) : null;
          })}
        </ul>
      </div>

      {/* ADD TASK */}

      <div className="px-4 mx-4 hover:border-2 border-green-400 rounded-lg">
        <form>
          <div className="flex justify-center align-middle items-center p-2  rounded-md w-full text-xs">
            <input
              value={task}
              onChange={(e) => settask(e.target.value)}
              className="p-2  bg-transparent rounded-md w-full text-xs focus:border-none "
              type="text"
              placeholder="add task"
            />{" "}
            <button onClick={(e) => addTask(e)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Column;
