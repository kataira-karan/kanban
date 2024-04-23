import Header from "./Header";
import { DataContext } from "../Context/DataContext";
import { useState } from "react";
import Column from "./Column";

const Board = () => {
  const list = [
    {
      id: 1,
      task: "Wake Up",
      status: 1,
    },
    {
      id: 2,
      task: "learn Context API",
      status: 2,
    },
    {
      id: 3,
      task: "Pass JOSN data to board",
      status: 3,
    },
  ];

  const [columns, setcolumns] = useState([]);
  const [taskList, settaskList] = useState([]);

  const [data, setdata] = useState(list);

  const createNewColumn = () => {
    const c = { id: generateId(), title: `Columns ${columns.length + 1}` };
    console.log();
    setcolumns([...columns, c]);
    console.log(columns);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 100001);
  };

  // FILTER TASKS BASED ON THE
  const filterTask = () => {};

  return (
    <DataContext.Provider value={{ data, setdata, taskList, settaskList }}>
      <div className="h-screen w-screen bg-blue-500 ">
        <Header></Header>
        <div className="flex justify-center align-center mt-36 ">
          {columns.map((c) => {
            return <Column col={c} key={c.id}></Column>;
          })}

          <button onClick={createNewColumn}>Add Column</button>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Board;
