import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, view } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  // Malumotni saqlash usestate bilan bo'ladi
  const [data, setData] = useState();

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    fetch("https://someapi.com", {
      method: "GET",
      headers: { auth: "ss" },
    })
      .then((res) => (res.ok ? res.json() : Error("")))
      .then((malumot) => setData(malumot));
  }, []);

  return (
    <div>
      <ContentHeader>
        Appointment List <span className="grow"></span>{" "}
        <NavLink to="add">
          <Button>Add</Button>
        </NavLink>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Appointment ID</th>
          <th className="border-l p-5">Appointment Name</th>
          <th className="border-l p-5">Phone Number</th>
          <th className="border-l p-5">Time </th>
          <th className="border-l p-5">Email </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {Array(12)
          .fill("") // shuni orniga data.map() qilasiz, men fake 12 array length yasagandim
          .map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">d123 
              {/* {i.name } bolishi mumkin */}
              </th>
              <th className="border-l p-5">Davinchi</th>
              <th className="border-l p-5">995995324</th>
              <th className="border-l p-5">8:30</th>
              <th className="border-l p-5">davinchi222@gmail.com</th>
              <th className="border-l p-5 flex gap-3">
                <img src={view} alt="" /> <img src={deleted} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Appointment;
