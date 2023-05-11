import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit } from "../../assets/images";

const Schedule = () => {
  return (
    <div>
      <ContentHeader>
        Schedule List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">#SL</th>
          <th className="border-l p-5">Day</th>
          <th className="border-l p-5">Start Time</th>
          <th className="border-l p-5">End Time</th>
          <th className="border-l p-5">Per Patient Time </th>
          <th className="border-l p-5">Actions </th>
        </tr>
        {Array(12)
          .fill("")
          .map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">1</th>
              <th className="border-l p-5">Monday</th>
              <th className="border-l p-5">08:00:00</th>
              <th className="border-l p-5">17:00:00</th>
              <th className="border-l p-5">10 </th>
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
