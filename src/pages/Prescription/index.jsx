import React,{useEffect, useState } from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";

const Prescription = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://rustammustafoev.jprq.live/api/e-med/appointment", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);
  
  return (
    <div>
      <ContentHeader>
        Prescription List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
        <th className="border-l p-5">Patient ID</th>
          <th className="border-l p-5">Patient Name</th>
          <th className="border-l p-5">Phone Number</th>
          <th className="border-l p-5">Gender </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {
        data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">{i.id}</th>
              <th className="border-l p-5">{i.name}</th>
              <th className="border-l p-5">995995324</th>
              <th className="border-l p-5">{i.patient.gender}</th>
              <th className="border-l p-5 flex gap-3">
                <img src={view} alt="" /> <img src={deleted} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Prescription;
