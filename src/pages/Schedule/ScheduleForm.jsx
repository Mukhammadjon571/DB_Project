import React from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";


const ScheduleForm = () => {
   // Inputni valuelarini boshqaradi, har bittasiga alohida yoziladi
//    const [fullName, setFullName] = useInput("");
// multiple data useInput
    // input fullname and surname
    const [day, setDay] = useInput("");
    const [from_time, setFromTime] = useInput("");
    const [to_time, setToTime] = useInput("");
    const [perPatientTime, setPerPatientTime] = useInput("");
    const [visibility, setVisibility] = useInput("");


    // input phone number

   //   redirect funcksiya
   const navigate = useNavigate();
 
   //   Submit funcsiya
   const onSubmit = async (e) => {
     // page reload bomasligiga funksiya
     e.preventDefault();
    //  Zapros
     const res = await fetch("http://192.168.29.220:9000/api/e-med/schedule", {
       method: "POST",
       body: JSON.stringify({
         data:{
          day: day,
          from_time: from_time,
          to_time: to_time,
          time_per_patient: perPatientTime,
          doctor: 1,
         },
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
       {/* title kerak bob qolsa shu component dan foydalanasiz */}
       <ContentHeader>
         Add Schedule <span className="grow"></span>{" "}
         <Button onClick={() => navigate(-1)}>Back</Button>
       </ContentHeader>
       {/* Buyogi inputlar */}
       {/* Hohlasez padding berasiz, p-[son] */}
       <div className="p-10">
        <label>Day:</label>
        
        <div>
        <label>
          <input type="checkbox" name="day" value="Monday"/>
            Monday
            </label>
          <label>
            <input type="checkbox" name="day" value="Tuesday" />
            Tuesday
          </label>
            <label>
            <input type="checkbox" name="day" value="Wednesday" />
            Wednesday
          </label>
            <br />
            <label>
            <input type="checkbox" name="day" value="Thursday" />
            Thursday
          </label>
            <label>
            <input type="checkbox" name="day" value="Friday" />
            Friday
          </label>
            <label>
            <input type="checkbox" name="day" value="Saturday" />
            Saturday
          </label>
            <br />
          <label>
            <input type="checkbox" name="day" value="Sunday" />
            Sunday
          </label>
        </div>
        <br />
        <label>
          Set Time:
          <input type="time" name="from_time" />
          <input type="time" name="to_time" />
        </label>
        <br />

        <label>
          Time per patient:
          <input type="number" name="time_per_patient" />
        </label>
        <br />
        <label>
          Visibility:
          <input type="radio" name="visibility" value="yes" />
          Yes
          <input type="radio" name="visibility" value="no" />
          No
        </label>
        <br />

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

export default ScheduleForm;
