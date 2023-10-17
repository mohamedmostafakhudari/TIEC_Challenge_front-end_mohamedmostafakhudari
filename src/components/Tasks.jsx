import React from "react";
import Task from "@/components/Task";
import AddTaskBox from "@/components/AddTaskBox";

const Tasks = ({
  tasks,
  setCurrentTaskId,
  onEdit,
  onDelete,
  onOpenAddModal,
}) => {
  return (
    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
      <AddTaskBox onAdd={onOpenAddModal} />
      {tasks.map(({ id, title, desc, status }) => (
        <Task
          key={id}
          title={title}
          desc={desc}
          status={status}
          onEdit={() => {
            onOpenEditModal();
            setCurrentTaskId(id);
          }}
          onDelete={(e) => onDelete(id)}
          setCurrentTaskId={setCurrentTaskId}
          className={""}
        />
      ))}
    </div>
  );
};

export default Tasks;
