import React from "react";
import Activity from "./Activity";
import Header from "./Header";

const Board = () => {
  return (
    <div className="h-screen w-screen bg-blue-500 ">
      <Header></Header>
      <div className="flex justify-center align-center mt-36 ">
        <Activity></Activity>
        <Activity></Activity>
        <Activity></Activity>
        <Activity></Activity>
      </div>
    </div>
  );
};

export default Board;
