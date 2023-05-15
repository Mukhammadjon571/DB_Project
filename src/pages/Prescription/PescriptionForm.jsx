import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const PerscriptionForm = () => {
    const [patientId, setPatientId] = useInput("");
    const [patientName, setPatientName] = useInput("");
    const [phoneNumber, setPhoneNumber] = useInput("");
    const [birthDate, setBirthDate] = useInput("");
    const [age, setAge] = useInput("");
    const [gender, setGender] = useInput("");
    const [patientCC, setPatientCC] = useInput("");
    const [patientWeight, setPatientWeight] = useInput("");
    const [patientBP, setPatientBP] = useInput("");
    const [temperature, setTemperature] = useInput("");
    const [history, setHistory] = useInput("");
    const [OExamination, setOExamination] = useInput("");
    const [pD, setPD] = useInput("");
    const [type, setType] = useInput("");
    const [medicineName , setMedicineName] = useInput("");
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

        const res = await fetch("http://192.168.29.220:9000/api/e-med/prescription", {
            method:"POST",
            body: JSON.stringify({
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
                Add Prescription <span className="grow"></span>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </ContentHeader>
            <div className="p-10">
                <input
                    type="text"
                    placeholder="Patient ID"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={patientId}
                    onChange={setPatientId}
                />
                <input
                    type="text"
                    placeholder="Patient Name"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={patientName}
                    onChange={setPatientName}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />
                <input
                    type="text"
                    placeholder="Birth Date"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={birthDate}
                    onChange={setBirthDate}
                />
                <input
                    type="text"
                    placeholder="Age"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={age}
                    onChange={setAge}
                />
                <label class="gender-option">
                    <input type="radio" name="gender" checked={gender === 'M'}  value="M" onClick={()=>setGender("M")}/>
                    Male
                </label>
                
                <label class="gender-option">
                    <input type="radio" name="gender" checked={gender === 'F'}  value="F" onClick={()=>setGender("F")}/>
                    Female
                </label>
                
                <label class="gender-option">
                    <input type="radio" name="gender" checked={gender === 'O'}  value="O" onClick={()=>setGender("O")}/>
                    Others
                </label>
                <br />
                <input
                    type="text"
                    placeholder="Patient CC"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={patientCC}
                    onChange={setPatientCC}
                />
                <input
                    type="text"
                    placeholder="Patient Weight"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={patientWeight}
                    onChange={setPatientWeight}
                />
                <input
                    type="text"
                    placeholder="Patient BP"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={patientBP}
                    onChange={setPatientBP}
                />
                <input
                    type="text"
                    placeholder="Temperature"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={temperature}
                    onChange={setTemperature}
                />
                <br />
                <input
                    type="text"
                    placeholder="History"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={history}
                    onChange={setHistory}
                />
                <input
                    type="text"
                    placeholder="OExamination"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={OExamination}
                    onChange={setOExamination}
                />
                <input
                    type="text"
                    placeholder="PD"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={pD}
                    onChange={setPD}
                />
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
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={type}
                    onChange={setType}
                />
                <input
                    type="text"
                    placeholder="Medicine Name"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={medicineName}
                    onChange={setMedicineName}
                />
                <input
                    type="text"
                    placeholder="Mg/Mi"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={mgMI}
                    onChange={setMgMI}
                />
                <input
                    type="text"
                    placeholder="Dose"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={dose}
                    onChange={setDose}
                />
                <input
                    type="text"
                    placeholder="Days"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={days}
                    onChange={setDays}
                />
                <input
                    type="text"
                    placeholder="Comments"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={comments}
                    onChange={setComments}
                />
                <br />
                <textarea
                    type="text"
                    placeholder="Over All Comments"
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                    value={overAllComments}
                    onChange={setOverAllComments}
                />
                <br />
                <div className="border-2 border-gray-300 rounded-md p-2 w-full">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="test"
                    >
                        Test
                    </label>
                    <input
                        type="text"
                        placeholder="Test Name"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        value={testName}
                        onChange={setTestName}
                    />
                    <input
                        type="text"
                        placeholder="Test Result"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        value={testDescription}
                        onChange={testDescription}
                    />
                    </div>
                    <div className="border-2 border-gray-300 rounded-md p-2 w-full">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Advice"
                    >
                        Active
                    </label>
                    <input
                        type="text"
                        placeholder="Advice"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        value={advice}
                        onChange={setAdvice}
                    />
                    </div>
                    <button type="reset" className="bg-red-300 text-white p-2 rounded-md">
                        Reset
                    </button>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
    )
    
}

export default PerscriptionForm;