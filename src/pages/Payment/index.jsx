import React,{useState,useEffect} from "react";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { deleted, edit, view } from "../../assets/images";

const Payment = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // bu page ochilsa ishga tushadigan funksiya
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("https://rustammustafoev.jprq.live/api/e-med/payment/history/", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.results))
  }, []);
  
  return (
    <div>
      <ContentHeader>
        Payment List <span className="grow"></span> <Button>Add</Button>
      </ContentHeader>
      <table className="border w-full" border>
        <tr className="border-b">
          <th className="border-l p-5">Patient ID</th>
          <th className="border-l p-5">Patient Name</th>
          <th className="border-l p-5">Email Address</th>
          <th className="border-l p-5">Amount</th>
          <th className="border-l p-5">Currency</th>
          <th className="border-l p-5">Date </th>
        </tr>
        {
        data.map((i) => (
            <tr className="border-b">
              <th className="border-l p-5">{i.patient.id}</th>
              <th className="border-l p-5">{i.patient.name}</th>
              <th className="border-l p-5">{i.patient.email}</th>
              <th className="border-l p-5">{i.amount}</th>
              <th className="border-l p-5">{i.currency_type}</th>
              <th className="border-l p-5 flex gap-3">
                {i.created_at.slice(0,10)}
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Payment;
