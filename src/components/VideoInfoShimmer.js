import React from "react";

const VideoInfoShimmer = () => {
  return (
    <div className="w-full h-56 flex flex-col gap-4 mt-4">
      <div className="bg-gray-300 w-full h-8"></div>
      <p className="w-3/4 h-8 bg-gray-300"></p>
      <div className="flex justify-between">
        <p className="w-1/2 h-6 bg-gray-300"></p>
        <div className="flex gap-8">
          <p className="w-10 h-10 mb-2 bg-gray-300 rounded-full"></p>
          <p className="w-10 h-10 mb-2 bg-gray-300 rounded-full"></p>
          <p className="w-10 h-10 mb-2 bg-gray-300 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoShimmer;
