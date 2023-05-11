import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="grow w-full flex justify-stretch items-stretch">
      {children}
    </div>
  );
};

export default MainContainer;
