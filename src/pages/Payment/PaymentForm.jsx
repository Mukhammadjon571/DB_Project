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
                type: type
            })
        });

        if (res.ok) {
            const data = await res.json();
            navigate(-1);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <ContentHeader>
                Transaction <span className="grow"></span>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </ContentHeader>
            <div className="p-10">
                <input
                    type="text"
                    value={businessEmail}
                    placeholder="Business Email"
                    className="border-b p-2 m-2"
                    onChange={setBusinessEmail}
                    required
                />
                <input
                    type="text"
                    value={amount}
                    placeholder="Amount"
                    className="border-b p-2 m-2"
                    onChange={setAmount}
                    required
                />
                <input
                    type="text"
                    value={type}
                    placeholder="Type"
                    className="border-b p-2 m-2"
                    onChange={setType}
                    required
                />
                <button type="reset" className="bg-red-300 text-white p-2 rounded-md">
                    Reset
                </button>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default PaymentForm;
