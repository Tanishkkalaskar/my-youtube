import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveCategory } from "../utils/VideosSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((store) => store.videos.activeCategory);
  const style = activeCategory === name ? "bg-black text-white" : "bg-gray-200";

  const handleCategorySelection = () => {
    dispatch(updateActiveCategory(name));
  };

  return (
    <div>
      <button
        className={
          style +
          " h-12 text-sm lg:text-md px-2 lg:px-4 lg:py-2 mt-4 rounded-lg"
        }
        onClick={handleCategorySelection}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
