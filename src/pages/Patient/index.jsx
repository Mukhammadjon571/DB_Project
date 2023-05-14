import React, {useEffect,useState} from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Patient = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://rustammustafoev.jprq.live/api/user/patient", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);
  return (
    <div>
      <ContentHeader>
        Patient List <span className="grow"></span>{" "}<NavLink to="add">
          <Button>Add</Button>
        </NavLink>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Patient ID</th>
          <th className="border-l p-5">Patient Name</th>
          <th className="border-l p-5">Phone Number</th>
          <th className="border-l p-5">Email Address </th>
          <th className="border-l p-5">Birth Date </th>
          <th className="border-l p-5">Gender </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {
        data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">{i.id}</th>
              <th className="border-l p-5">{i.name}</th>
              <th className="border-l p-5">{i.phone}</th>
              <th className="border-l p-5">{i.email}</th>
              <th className="border-l p-5">{i.birth_date}</th>
              <th className="border-l p-5">{i.gender}</th>
              <th className="border-l p-5 flex gap-3">
                <img src={edit} alt="" /> <img src={deleted} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Patient;
