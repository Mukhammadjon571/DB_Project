import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Item from "./components/item";
import { dashIcon } from "../../assets/images";
import { ApexChart } from "../../components/ui/Chart";

const Dashboard = () => {
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
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
        />
        <Item
          count={16}
          icon={<img src={dashIcon} alt="" />}
          desc={"Total Patient"}
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
