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
     const res = await fetch("https://rustammustafoev.jprq.live/api/e-med/schedule", {
       headers: {
         auth: "bearer",
       },
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
         Forma <span className="grow"></span>{" "}
         <Button onClick={() => navigate(-1)}>Ortga</Button>
       </ContentHeader>
       {/* Buyogi inputlar */}
       {/* Hohlasez padding berasiz, p-[son] */}
       <div className="p-10">
         <input
           type="text"
           value={fullName}
           placeholder="Nimadur"
           className="border-b p-2 m-2"
           onChange={setFullName}
           // majburiy qilsez boladi [required]
           required
         />
         <input
           type="text"
           value={fullName}
           placeholder="Nimadur"
           className="border-b p-2 m-2"
           onChange={setFullName}
         />
         <input
           type="text"
           value={fullName}
           placeholder="Nimadur"
           className="border-b p-2 m-2"
           onChange={setFullName}
         />
         <Button>Submit</Button>
       </div>
     </form>
   );
}

export default ScheduleForm;
