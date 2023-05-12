import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";

const Prescription = () => {
  return (
    <div>
      <ContentHeader>
        Prescription List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Patient Name</th>
          <th className="border-l p-5">Patient ID</th>
          <th className="border-l p-5">Phone Number</th>
          <th className="border-l p-5">Gender </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {Array(12)
          .fill("")
          .map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">Davinchi</th>
              <th className="border-l p-5">zh01</th>
              <th className="border-l p-5">995995324</th>
              <th className="border-l p-5">Female</th>
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
