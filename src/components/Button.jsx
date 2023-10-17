import clsx from "clsx";
import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-md p-4 px-6 text-lg font-bold text-white",
        label === "Edit" ? "bg-blue-600" : "bg-red-600",
      )}
    >
      {label}
    </button>
  );
};

export default Button;
