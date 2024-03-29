import React from "react";

const MaincontainerShimmer = () => {
  const arr = Array.from({ length: 36 }, (_, index) => index + 1);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {arr.map((value) => {
        return (
          <div key={value} className="w-72 h-56">
            <div className="bg-gray-300 w-full h-24"></div>
            <div>
              <h4 className="w-full h-4 bg-gray-300 my-2"></h4>
              <p className="w-3/4 h-4 mb-2 bg-gray-300"></p>
              <p className="w-1/4 h-4 mb-2 bg-gray-300"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MaincontainerShimmer;
