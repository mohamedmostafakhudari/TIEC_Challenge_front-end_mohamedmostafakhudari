import { useState } from "react";
import Tasks from "@/components/Tasks";
import Form from "@/components/Form";
import clsx from "clsx";

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "not started",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "in progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "finished",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "finished",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "in progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Task Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non. Ullamcorper eget nulla facilisi etiam.",
    status: "not started",
  },
];

function App() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState("");
  const [tasks, setTasks] = useState(initialTasks);

  function handleAdd(taskData) {
    const newTask = {
      id: crypto.randomUUID(),
      ...taskData,
    };
    setTasks([...tasks, newTask]);
    setAddModalOpen(false);
  }
  function handleEdit(taskData) {
    const task = tasks.find((task) => {
      return task.id === id;
    });
    const newTasks = tasks.map((task) => {
      if (task.title === id) {
        return {
          id,
          ...taskData,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }
  function handleDelete(id) {
    console.log("deleted");
    const newTasks = tasks.filter((task) => {
      console.log(task.id, id);
      return task.id !== id;
    });
    console.log(newTasks);
    setTasks(newTasks);
  }
  return (
    <div className="">
      <Tasks
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onOpenAddModal={() => setAddModalOpen(true)}
        setCurrentTaskId={setCurrentTaskId}
      />
      <div
        className={clsx(
          "absolute inset-0 grid place-items-center bg-black/30 duration-300 ease-in-out",
          addModalOpen || editModalOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <Form
          className={"absolute w-[36rem]"}
          type={"add"}
          modalOpen={addModalOpen}
          onAdd={handleAdd}
          onClose={() => setAddModalOpen(false)}
        />
        <Form
          className={"w-[36rem]"}
          type={"edit"}
          modalOpen={editModalOpen}
          onEdit={(taskInput) => handleEdit(taskInput)}
          onClose={() => setEditModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
