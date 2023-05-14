import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Item from "./components/item";
import { dashIcon,chat, chat1, check1, email, email1, healthInsurance, logo, medicalRecords, patient, prescription } from "../../assets/images";
import { ApexChart } from "../../components/ui/Chart";

const Dashboard = () => {
  const patients = ()=>{
    fetch('http:///api/user/patients')
  }
  return (
    <div>
      <ContentHeader>Dashboard</ContentHeader>
      <div className="grid grid-cols-4 gap-8 p-20">
        <Item
          count={}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={logo} alt="" />}
          desc={"Today Patient"}
        />
        <Item
          count={16}
          icon={<img src={medicalRecords} alt="" />}
          desc={"Today Appointment"}
        />
        <Item
          count={16}
          icon={<img src={healthInsurance} alt="" />}
          desc={"New Appointment"}
        />
        <Item
          count={16}
          icon={<img src={patient} alt="" />}
          desc={"Total Appointment"}
        />
        <Item
          count={16}
          icon={<img src={prescription} alt="" />}
          desc={"Today Prescription"}
        />
        <Item
          count={16}
          icon={<img src={check1} alt="" />}
          desc={"Total Prescription"}
        />
        <Item
          count={16}
          icon={<img src={chat} alt="" />}
          desc={"Total SMS"}
        />
        <Item
          count={16}
          icon={<img src={chat1} alt="" />}
          desc={"Today SMS"}
        />
        <Item
          count={16}
          icon={<img src={chat1} alt="" />}
          desc={"Custom SMS"}
        />
        <Item
          count={16}
          icon={<img src={email1} alt="" />}
          desc={"Auto SMS"}
        />
        <Item
          count={16}
          icon={<img src={email} alt="" />}
          desc={"Sent Total Email"}
        />
      </div>
      <div className="p-10 grid grid-cols-2 gap-10">
        <ApexChart />
        <ApexChart />
      </div>
    </div>
  );
};

export default Dashboard;
