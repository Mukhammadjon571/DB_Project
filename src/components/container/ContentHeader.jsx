import React from "react";

const ContentHeader = ({ children }) => {
  return (
    <div className="h-32 w-full bg-gray-bg pl-10 text-3xl text-primary flex justify-start items-center">
      {children}
    </div>
  );
};

export default ContentHeader;
