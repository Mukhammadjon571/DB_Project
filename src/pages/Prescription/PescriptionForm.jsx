import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";
import { useState } from "react";

const PerscriptionForm = () => {
  const [patientId, setPatientId] = useInput("");
  const [patientName, setPatientName] = useInput("");
  const [phoneNumber, setPhoneNumber] = useInput("");
  const [birthDate, setBirthDate] = useInput("");
  const [age, setAge] = useInput("");
  const [gender, setGender] = useState("");
  const [patientCC, setPatientCC] = useInput("");
  const [patientWeight, setPatientWeight] = useInput("");
  const [patientBP, setPatientBP] = useInput("");
  const [temperature, setTemperature] = useInput("");
  const [history, setHistory] = useInput("");
  const [OExamination, setOExamination] = useInput("");
  const [pD, setPD] = useInput("");
  const [type, setType] = useInput("");
  const [medicineName, setMedicineName] = useInput("");
  const [mgMI, setMgMI] = useInput("");
  const [dose, setDose] = useInput("");
  const [days, setDays] = useInput("");
  const [comments, setComments] = useInput("");
  const [overAllComments, setOverAllComments] = useInput("");
  const [testName, setTestName] = useInput("");
  const [testDescription, setTestDescription] = useInput("");
  const [advice, setAdvice] = useInput("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://192.168.29.220:9000/api/e-med/prescription",
      {
        method: "POST",
        body: JSON.stringify({}),
      }
    );
    if (res.ok) {
      const data = await res.json();
      navigate(-1);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <ContentHeader>
        Add Prescription <span className="grow"></span>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </ContentHeader>
      <div className="p-10">
        <div className="flex flex-wrap gap-4 pb-6 border-b border-[#f4f4f4]">
            
          <input
            type="text"
            placeholder="Patient ID"
            className="border-b border-gray-300 bg-[#f4f4f4] p-3"
            value={patientId}
            onChange={setPatientId}
          />
          <input
            type="text"
            placeholder="Patient Name"
            className="border-b border-gray-300 bg-[#f4f4f4] p-3"
            value={patientName}
            onChange={setPatientName}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border-b border-gray-300 bg-[#f4f4f4] p-3"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <input
            type="date"
            placeholder="Birth Date"
            className="border-b border-gray-300 bg-[#f4f4f4] p-3"
            value={birthDate}
            onChange={setBirthDate}
          />
          <input
            type="number"
            placeholder="Age"
            className="border-b border-gray-300 bg-[#f4f4f4] p-3"
            value={age}
            onChange={setAge}
          />
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
        <br />
        <div className="flex flex-wrap pb-6 border-b border-[#f4f4f4]">
          <input
            type="text"
            placeholder="Patient CC"
            className="border-b bg-[#f4f4f4] m-2 border-[#f4f4f4] p-2"
            value={patientCC}
            onChange={setPatientCC}
          />
          <input
            type="text"
            placeholder="Patient Weight"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={patientWeight}
            onChange={setPatientWeight}
          />
          <input
            type="text"
            placeholder="Patient BP"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={patientBP}
            onChange={setPatientBP}
          />
          <input
            type="text"
            placeholder="Temperature"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={temperature}
            onChange={setTemperature}
          />
          <br />
          <input
            type="text"
            placeholder="History"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={history}
            onChange={setHistory}
          />
          <input
            type="text"
            placeholder="OExamination"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={OExamination}
            onChange={setOExamination}
          />
          <input
            type="text"
            placeholder="PD"
            className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
            value={pD}
            onChange={setPD}
          />
        </div>
        <br />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="medicine"
        >
          Medicine
        </label>
        <input
          type="text"
          placeholder="Type"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={type}
          onChange={setType}
        />
        <input
          type="text"
          placeholder="Medicine Name"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={medicineName}
          onChange={setMedicineName}
        />
        <input
          type="text"
          placeholder="Mg/Mi"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={mgMI}
          onChange={setMgMI}
        />
        <input
          type="text"
          placeholder="Dose"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={dose}
          onChange={setDose}
        />
        <input
          type="text"
          placeholder="Days"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={days}
          onChange={setDays}
        />
        <input
          type="text"
          placeholder="Comments"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={comments}
          onChange={setComments}
        />
        <br />
        <textarea
          type="text"
          placeholder="Over All Comments"
          className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
          value={overAllComments}
          onChange={setOverAllComments}
        />
        <br />
        <div className="flex gap-4">
          <div className="border border-[#f2f2f2] grow m-2 border-gray-300 p-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="test"
            >
              Test
            </label>
            <input
              type="text"
              placeholder="Test Name"
              className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
              value={testName}
              onChange={setTestName}
            />
            <input
              type="text"
              placeholder="Test Result"
              className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
              value={testDescription}
              onChange={testDescription}
            />
          </div>
          <div className="border border-[#f2f2f2] grow m-2 border-gray-300 p-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Advice"
            >
              Active
            </label>
            <input
              type="text"
              placeholder="Advice"
              className="border-b bg-[#f4f4f4] m-2 border-gray-300 p-2"
              value={advice}
              onChange={setAdvice}
            />
          </div>
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

export default PerscriptionForm;
