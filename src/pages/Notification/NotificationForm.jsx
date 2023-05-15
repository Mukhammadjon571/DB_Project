import { useInput,useState} from "../../hooks/useInput";
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
        const res = await fetch("http://192.168.29.220:9000/api/e-med/notification" , {
          
          method: "POST",
          body: JSON.stringify({
            
          }),
        });
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
            <input
              type="text"
              value={receiver}
              placeholder="Receiver"
              className="border-b p-2 m-2"
              onChange={setReceiver}
              required
            />
            <input
              type="text"
              value={provider}
              placeholder="Provider"
              className="border-b p-2 m-2"
              onChange={setProvider}
              required
            />
            {/* <input
              type="text"
              value={message}
              placeholder="Message"
              className="border-b p-2 m-2"
              onChange={setMessage}
              required
            /> */}
            <textarea
              value={message}
              placeholder="Message"
              className="border-b p-2 m-2"
              onChange={setMessage}
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
      )
    };
    
    export default NotificationForm;