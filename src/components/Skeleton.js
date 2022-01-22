import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-500 animate-pulse w-72 h-80 overflow-hidden rounded-md cursor-pointer shadow-md">
        <div className="h-40">

        </div>
    </div>
  );
};

export default Skeleton;
