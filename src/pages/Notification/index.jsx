import React,{useEffect, useState } from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Notification = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://192.168.29.220:9000/api/e-med/notification", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);

  const deleteData = async(id)=>{
    const res = await fetch('dsadas' + id,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    var requestOptions = {
      method: 'GET',
    };
    fetch("http://192.168.29.220:9000/api/e-med/notification", requestOptions)
    .then(response => response.json())
    .then(result => setData(result.results))

  } 
  
  return (
    <div>
      <ContentHeader>
        SMS List <span className="grow"></span>{" "}<NavLink to="add">
          <Button>Add</Button>
        </NavLink>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
        <th className="border-l p-5">Receiver</th>
          <th className="border-l p-5">Provider</th>
          <th className="border-l p-5">Date Time</th>
          <th className="border-l p-5">Messages</th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {
        data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">{i.doctor.name}</th>
              <th className="border-l p-5">{i.patient.name}</th>
              <th className="border-l p-5">{i.created_at}</th>
              <th className="border-l p-5">{i.message_content}</th>
              <th className="border-l p-5 flex gap-3">
                <img src={edit} alt="" /> <img src={deleted} onClick={()=>deleteData(i.id)} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Notification;
