import React from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const AppointmentForm = () => {
  // Inputni valuelarini boshqaradi, har bittasiga alohida yoziladi
  const [fullName, setFullName] = useInput("");
  //   redirect funcksiya
  const navigate = useNavigate();

  //   Submit funcsiya
  const onSubmit = async (e) => {
    // page reload bomasligiga funksiya
    e.preventDefault();
    // Zapros
    const res = await fetch("https://lore.com/122" + 12, {
      headers: {
        auth: "bearer",
      },
      method: "POST",
      body: JSON.stringify({
        nimadur: fullName,
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
        <Button>Kertti</Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
