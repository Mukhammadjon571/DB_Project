import React from "react";
import Sidebar from "../../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import { useNavigate } from "react-router-dom";

const DashboardContainer = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) navigate("/login");
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
