import { useInput, useState } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const NotificationForm = () => {
  const [receiver, setReceiver] = useInput("");
  const [provider, setProvider] = useInput("");
  const [message, setMessage] = useInput("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // page reload bomasligiga funksiya
    e.preventDefault();
    // Zapros
    const res = await fetch(
      "http://192.168.29.220:9000/api/e-med/notification",
      {
        method: "POST",
        body: JSON.stringify({}),
      }
    );
    // response ishladimi tekshirish
    if (res.ok) {
      const data = await res.json();
      // bu sizga kerak bomasa kerak srazu redirect qilasiz
      navigate(-1); // bitta orqaga
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <ContentHeader>
        Notification <span className="grow"></span>{" "}
        <Button onClick={() => navigate(-1)}>Back</Button>
      </ContentHeader>
      <div className="p-10">
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">receiver:</div>
          <input
            type="text"
            value={receiver}
            placeholder="Receiver"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setReceiver}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Provider:</div>
          <input
            type="text"
            value={provider}
            placeholder="Provider"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setProvider}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">message:</div>
          <textarea
            type="text"
            value={message}
            placeholder="Provider"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setMessage}
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

export default NotificationForm;
