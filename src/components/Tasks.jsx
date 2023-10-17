import React from "react";
import Task from "@/components/Task";
import AddTaskBox from "@/components/AddTaskBox";

const Tasks = ({ tasks, onOpenEditModal, onDelete, onOpenAddModal }) => {
  return (
    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
      <AddTaskBox onAdd={onOpenAddModal} />
      {tasks.map(({ id, title, desc, status }) => (
        <Task
          key={id}
          title={title}
          desc={desc}
          status={status}
          onOpenEditModal={onOpenEditModal}
          onDelete={(e) => onDelete(id)}
          className={""}
        />
      ))}
    </div>
  );
};

export default Tasks;
