import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { useState } from "react";

const PatientForm = () => {
  const [fullName, setFullName] = useInput("");
  const [passportId, setPassportId] = useInput("");
  const [phoneNumber, setPhoneNumber] = useInput("");
  const [email, setEmail] = useInput("");
  const [birthDate, setBirthDate] = useInput("");
  const [age, setAge] = useInput("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useInput("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        name: fullName,
        passport_id: passportId,
        phone: phoneNumber,
        email: email,
        birth_date: birthDate,
        age: age,
        address: address,
        gender: gender,
      })
    );

    const res = await fetch("http://192.168.29.220:9000/api/user/patient", {
      method: "POST",
      body: JSON.stringify({
        name: fullName,
        passport_id: passportId,
        phone: phoneNumber,
        email: email,
        birth_date: birthDate,
        age: age,
        address: address,
        gender: gender,
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
        Add New Patient <span className="grow"></span>{" "}
        <Button onClick={() => navigate(-1)}>Back</Button>
      </ContentHeader>
      <div className="p-10">
        <div className="flex items-center justify-center">
          <div className="w-[300px]">Full Name:</div>
          <input
            type="text"
            value={fullName}
            placeholder="Full Name"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setFullName}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[300px]">Password:</div>
          <input
            type="text"
            value={passportId}
            placeholder="Passport ID"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setPassportId}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[300px]">Phone Number:</div>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setPhoneNumber}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[300px]">Email:</div>
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setEmail}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[300px]">Birth Date::</div>
          <div className="flex justify-between w-[520px] gap-4">
            <input
              type="date"
              value={birthDate}
              placeholder="Birth date"
              className="border-b m-2 grow p-4 bg-[#f4f4f4]"
              onChange={setBirthDate}
              required
            />
            <input
              type="number"
              value={age}
              placeholder="Age"
              className="border-b m-2 w-[150px] p-4 bg-[#f4f4f4]"
              onChange={setAge}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-[300px]">Gender:</div>
          <div className="flex justify-start w-[500px] gap-7">
            <label class="gender-option">
              <input
                type="radio"
                name="gender"
                checked={gender === "M"}
                value="M"
                onClick={() => setGender("M")}
              />
              Male
            </label>
            <label class="gender-option">
              <input
                type="radio"
                name="gender"
                checked={gender === "F"}
                value="F"
                onClick={() => setGender("F")}
              />
              Female
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Address:</div>
          <input
            type="text"
            value={address}
            placeholder="Address"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setAddress}
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

export default PatientForm;
