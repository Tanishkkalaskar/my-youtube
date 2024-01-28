import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categoryList = [
    "All",
    "Game",
    "Song",
    "Criket",
    "News",
    "Valentines",
    "Cooking",
    "Football",
  ];

  return (
    <div className="flex">
      {categoryList.map((category) => (
        <Button key={category} name={category}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
