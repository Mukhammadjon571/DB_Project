import React from "react";
import { userImage } from "../assets/images";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen p-8 pt-20 w-[320px] flex flex-col gap-4">
      <img src={userImage} className="mx-auto mb-6" alt="" />
      <div className="text-2xl flex flex-col gap-4">
        <NavLink
          to={"/dashboard/"}
          className="border-b border-white text-gray-dark"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/dashboard/schedule"}
          className="border-b border-white text-gray-dark"
        >
          Schedule
        </NavLink>
        <NavLink
          to={"/dashboard/patient"}
          className="border-b border-white text-gray-dark"
        >
          Patient
        </NavLink>
        <NavLink
          to={"/dashboard/appointment"}
          className="border-b border-white text-gray-dark"
        >
          Appointment
        </NavLink>
        <NavLink
          to={"/dashboard/prescription"}
          className="border-b border-white text-gray-dark"
        >
          Prescription
        </NavLink>
        <NavLink
          to={"/dashboard/payment"}
          className="border-b border-white text-gray-dark"
        >
          Payment
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
