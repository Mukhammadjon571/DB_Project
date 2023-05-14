import React,{useState,useEffect} from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit } from "../../assets/images";

const Schedule = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://rustammustafoev.jprq.live/api/e-med/schedule", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);
  return (
    <div>
      <ContentHeader>
        Schedule List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">#SL</th>
          <th className="border-l p-5">Doctor</th>
          <th className="border-l p-5">Day</th>
          <th className="border-l p-5">Start Time</th>
          <th className="border-l p-5">End Time</th>
          <th className="border-l p-5">Per Patient Time </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {
        data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">{i.id}</th>
              <th className="border-l p-5">{i.doctor.name}</th>
              <th className="border-l p-5">{i.day}</th>
              <th className="border-l p-5">{i.from_time}</th>
              <th className="border-l p-5">{i.to_time}</th>
              <th className="border-l p-5">{i.time_per_patient}</th>
              <th className="border-l p-5 flex gap-3">
                <img src={edit} alt="" /> <img src={deleted} alt="" />{" "}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Schedule;
