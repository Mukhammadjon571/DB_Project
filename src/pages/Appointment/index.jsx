import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  // // Malumotni saqlash usestate bilan bo'ladi
  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://192.168.29.220:9000/api/e-med/appointment", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);

  return (
    <div>
      <ContentHeader>
        Appointment List <span className="grow"></span>{" "}
        
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Appointment ID</th>
          <th className="border-l p-5">Patient Name</th>
          <th className="border-l p-5">Doctor Name</th>
          <th className="border-l p-5">Phone Number</th>
          <th className="border-l p-5">Start Time </th>
          <th className="border-l p-5">Finish Time </th>
          <th className="border-l p-5">Email </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {
          // shuni orniga data.map() qilasiz, men fake 12 array length yasagandim
          data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">
              {/* {i.name } bolishi mumkin */}
              {i.id }
              </th>
              <th className="border-l p-5">{i.patient.name}</th>
              <th className="border-l p-5">{i.doctor.name}</th>
              <th className="border-l p-5">{i.patient.phone_number}</th>
              <th className="border-l p-5">{i.scheduled_at.from}</th>
              <th className="border-l p-5">{i.scheduled_at.to}</th>
              <th className="border-l p-5">{i.patient.email}</th>
              <th className="border-l p-5 flex gap-3">
                <img src={edit} alt="" /> <img src={deleted} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Appointment;
