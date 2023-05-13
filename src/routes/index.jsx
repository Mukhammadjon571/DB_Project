import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardContainer from "../components/container/DashboardContainer";
import Schedule from "../pages/Schedule";
import Patient from "../pages/Patient";
import Prescription from "../pages/Prescription";
import Appointment from "../pages/Appointment";
import Payment from "../pages/Payment";
import AppointmentForm from "../pages/Appointment/AppointmentForm";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<DashboardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="patient" element={<Patient />} />
        <Route path="prescription" element={<Prescription />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="appointment/add" element={<AppointmentForm />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default Router;
