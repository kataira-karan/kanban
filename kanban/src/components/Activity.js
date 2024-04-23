import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Activity = () => {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <DataContext.Provider value="d">
      <div className="w-64  bg-blue-200 mx-4 py-4 rounded-lg">
        <span className="font-bold pl-4 "> Backlogs </span>

        {/* TASK LIST */}
        <div>
          <ul>
            <li className="my-2 pl-2 py-1.5 mx-2  text-sm font-poppins  transition rounded-md hover:cursor-grab hover:bg-cyan-100 duration-300 ">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mattis congue auctor. Duis ultrices erat eu venenatis
            </li>
            <li className="my-2 pl-2 py-1.5 mx-2  text-sm font-poppins  transition rounded-md hover:cursor-grab hover:bg-cyan-100 duration-300 ">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mattis congue auctor. Duis ultrices erat eu venenatis
            </li>
            <li className="my-2 pl-2 py-1.5 mx-2  text-sm font-poppins  transition rounded-md hover:cursor-grab hover:bg-cyan-100 duration-300 ">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mattis congue auctor. Duis ultrices erat eu venenatis
            </li>
          </ul>
        </div>

        {/* ADD TASK */}

        <div className="px-4">
          <form>
            <div className="">
              <input
                className="p-2  rounded-md w-full text-xs "
                type="text"
                placeholder="add task"
              />{" "}
            </div>
          </form>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Activity;
