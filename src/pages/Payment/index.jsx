import React from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";

const Payment = () => {
  return (
    <div>
      <ContentHeader>
        Payment List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Patient ID</th>
          <th className="border-l p-5">Appointment ID</th>
          <th className="border-l p-5">Email Address</th>
          <th className="border-l p-5">Amount </th>
          <th className="border-l p-5">Date </th>
        </tr>
        {Array(12)
          .fill("")
          .map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">d123</th>
              <th className="border-l p-5">zh01</th>
              <th className="border-l p-5">davinchi222@gmail.com</th>
              <th className="border-l p-5">120000</th>
              <th className="border-l p-5 flex gap-3">
                {new Date().toLocaleDateString()}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Payment;
