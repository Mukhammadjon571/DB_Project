import React, {useState} from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Item from "./components/item";
import {
  dashIcon,
  chat,
  chat1,
  check1,
  email,
  email1,
  healthInsurance,
  logo,
  medicalRecords,
  patient,
  prescription,
} from "../../assets/images";
import { ApexChart } from "../../components/ui/Chart";
import { useAuth } from "../../hooks";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { token, user } = useAuth();

  const getData = async () => {
    const res = await fetch("jprw/lice", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const data = await data.json();
      setData(data);
    }
  };
  return (
    <div>
      <ContentHeader>Dashboard</ContentHeader>
      <div className="grid grid-cols-4 gap-8 p-20">
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={0}
          icon={<img src={logo} alt="" />}
          desc={"Today Patient"}
        />
        <Item
          count={0}
          icon={<img src={medicalRecords} alt="" />}
          desc={"Today Appointment"}
        />
        <Item
          count={0}
          icon={<img src={healthInsurance} alt="" />}
          desc={"New Appointment"}
        />
        <Item
          count={0}
          icon={<img src={patient} alt="" />}
          desc={"Total Appointment"}
        />
        <Item
          count={0}
          icon={<img src={prescription} alt="" />}
          desc={"Today Prescription"}
        />
        <Item
          count={0}
          icon={<img src={check1} alt="" />}
          desc={"Total Prescription"}
        />
        <Item count={0} icon={<img src={chat} alt="" />} desc={"Total SMS"} />
        <Item count={0} icon={<img src={chat1} alt="" />} desc={"Today SMS"} />
        <Item count={0} icon={<img src={chat1} alt="" />} desc={"Custom SMS"} />
        <Item count={0} icon={<img src={email1} alt="" />} desc={"Auto SMS"} />
        <Item
          count={0}
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
