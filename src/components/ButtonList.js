import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const ButtonList = () => {
  const categoryList = [
    "All",
    "Game",
    "Songs",
    "Education",
    "Travel",
    "Science",
    "Web",
    "Cricket",
    "News",
    "Live",
    "Cooking",
    "Football",
    "Animation",
    "Bollywod",
    "Marathi",
    "Dubai",
    "Ram",
    "iphone",
  ];

  return (
    <div className="flex my-5 gap-4 overflow-x-scroll">
      {categoryList.map((category) => (
        <Button key={category} name={category}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
