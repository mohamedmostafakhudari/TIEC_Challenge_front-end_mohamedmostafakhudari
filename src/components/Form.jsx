import clsx from "clsx";
import React from "react";
import Button from "@/components/Button";
import { IoMdClose } from "react-icons/io";
const Form = ({ className, modalOpen, onAdd, onEdit, onClose, type }) => {
  const [taskInput, setTaskInput] = React.useState({
    title: "",
    desc: "",
    status: "",
  });
  function handleChange(e) {
    console.log(e.target);
    setTaskInput({
      ...taskInput,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (type === "edit") {
      onEdit(taskInput);
    } else {
      onAdd(taskInput);
    }
  }
  return (
    <form
      action="post"
      className={clsx(
        "flex flex-col gap-12 bg-white p-8 delay-300 duration-300 ease-in-out",
        modalOpen ? "scale-100" : "scale-0",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <div
        className="w-fit cursor-pointer p-4 pl-0 text-red-700"
        onClick={() => onClose()}
      >
        <IoMdClose className="text-4xl" />
      </div>
      <h3 className="text-center text-3xl font-bold text-red-500">
        {type === "add" ? "Add A New Task" : "Edit Task"}
      </h3>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="font-head text-xl font-bold text-blue-600"
        >
          Task Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Task Title"
          value={taskInput.title}
          onChange={handleChange}
          className="bg-neutral-300 px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="desc"
          className="font-head text-xl font-bold text-blue-600"
        >
          Task Description
        </label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Task Title"
          value={taskInput.desc}
          onChange={handleChange}
          className="bg-neutral-300 px-4 py-2 focus:outline-none"
        />
      </div>
      <fieldset className="">
        <legend className="font-head text-xl font-bold text-blue-600">
          Current Status
        </legend>
        <div className="ml-4 mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="not started"
              name="status"
              value="not started"
              onChange={handleChange}
            />
            <label htmlFor="not started" className="text-lg font-bold">
              Not Started
            </label>
          </div>{" "}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="in progress"
              name="status"
              value="in progress"
              onChange={handleChange}
            />
            <label htmlFor="in progress" className="text-lg font-bold">
              In Progress
            </label>
          </div>{" "}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="finished"
              name="status"
              value="finished"
              onChange={handleChange}
            />
            <label htmlFor="finished" className="text-lg font-bold">
              Finished
            </label>
          </div>{" "}
        </div>
      </fieldset>
      <button className="rounded-md bg-blue-600 py-4 text-2xl font-bold text-white">
        {type === "edit" ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
