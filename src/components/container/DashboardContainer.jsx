import React from "react";
import Sidebar from "../../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import ContentContainer from "./ContentContainer";

const DashboardContainer = () => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </div>
  );
};

export default DashboardContainer;
