import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="h-12 text-md px-4 py-2 my-4 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
