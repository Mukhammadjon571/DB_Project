import React from "react";

const Item = ({ count, desc, icon }) => {
  return (
    <div className="w-full h-20 bg-primary text-gray-text flex justify-between p-4 items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">{count}</h1>
        <p className="text-base text-gray-dark">{desc}</p>
      </div>
      {icon}
    </div>
  );
};

export default Item;
