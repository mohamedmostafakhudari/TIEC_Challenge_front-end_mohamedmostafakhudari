import React from "react";
import { BiPlus } from "react-icons/bi";
const AddTaskBox = ({ onAdd }) => {
  return (
    <div className="relative grid min-h-[24rem] basis-[48%] place-items-center bg-white p-6 py-12 text-center shadow-md shadow-black/30">
      <div className="cursor-pointer p-4" onClick={onAdd}>
        <BiPlus className="text-6xl" />
      </div>
    </div>
  );
};

export default AddTaskBox;
