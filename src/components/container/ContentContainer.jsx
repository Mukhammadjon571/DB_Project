import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="grow bg-white rounded-tl-xl rounded-bl-xl">{children}</div>
  );
};

export default ContentContainer;
