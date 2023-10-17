import clsx from "clsx";
import React from "react";
import Button from "@/components/Button";
const Task = ({ title, desc, status, onAdd, onEdit, onDelete, className }) => {
  const statusColor =
    status === "not started"
      ? "bg-red-700"
      : status === "in progress"
      ? "bg-yellow-500"
      : "bg-green-500";
  return (
    <div
      className={clsx(
        "relative flex flex-col bg-white p-6 py-12 text-center shadow-md shadow-black/30",
        className,
      )}
    >
      <div className="absolute inset-x-0 -bottom-1 top-0 -z-10 bg-gradient-to-r from-orange-600 to-violet-300"></div>
      <div
        className={clsx(
          "absolute left-6 top-6 aspect-square w-3 rounded-full",
          statusColor,
        )}
      ></div>
      <div className="flex-1">
        <h2 className="py-4 font-head text-3xl text-red-500">{title}</h2>
        <p className="mx-auto max-w-[42ch] text-slate-700">{desc}</p>
      </div>
      <div className="mt-10 flex justify-center gap-4">
        <Button label={"Edit"} onClick={onEdit} />
        <Button label={"Delete"} onClick={onDelete} />
      </div>
    </div>
  );
};

export default Task;
