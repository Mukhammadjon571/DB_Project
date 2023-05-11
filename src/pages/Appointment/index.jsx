import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";

const Appointment = () => {
  return (
    <div>
      <ContentHeader>
        Appointment List <span className="grow"></span> <Button>Add</Button>
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
          .fill("")
          .map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">d123</th>
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
