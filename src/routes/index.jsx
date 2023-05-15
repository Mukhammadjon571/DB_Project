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
import PatientForm from "../pages/Patient/PatientForm";
import Notification from "../pages/Notification";
import PaymentForm from "../pages/Payment/PaymentForm";
import NotificationForm from "../pages/Notification/NotificationForm";
import ScheduleForm from "../pages/Schedule/ScheduleForm";
import PerscriptionForm from "../pages/Prescription/PescriptionForm";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<DashboardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="schedule/add" element={<ScheduleForm />} />
        <Route path="patient" element={<Patient />} />
        <Route path="notification" element={<Notification />} />
        <Route path="notification/add" element={<NotificationForm />} />
        <Route path="patient/add" element={<PatientForm />} />
        <Route path="prescription" element={<Prescription />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="appointment/add" element={<AppointmentForm />} />
        <Route path="prescription/add" element={<PerscriptionForm />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/add" element={<PaymentForm />} />

      </Route>
    </Routes>
  );
};

export default Router;
