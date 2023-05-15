import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const PaymentForm = () => {
  const [businessEmail, setBusinessEmail] = useInput("");
  const [amount, setAmount] = useInput("");
  const [type, setType] = useInput("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://192.168.29.220:9000/api/e-med/payment", {
      method: "POST",
      body: JSON.stringify({
        businessEmail: businessEmail,
        amount: amount,
        type: type,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      navigate(-1);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <ContentHeader>
        Transaction <span className="grow"></span>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </ContentHeader>
      <div className="p-10">
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Address:</div>
          <input
            type="text"
            value={businessEmail}
            placeholder="Business Email"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setBusinessEmail}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Amount:</div>
          <input
            type="text"
            value={amount}
            placeholder="Amount"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setAmount}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Type:</div>
          <input
            type="text"
            value={type}
            placeholder="Type"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setType}
            required
          />
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            type="reset"
            className="bg-red-300 text-white rounded-md p-3 bg-[orange] px-6"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-3 px-6 bg-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
