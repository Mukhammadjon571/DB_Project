import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const PatientForm = () => {
    const [fullName, setFullName] = useInput("");
    const [passportId, setPassportId] = useInput("");
    const [phoneNumber, setPhoneNumber] = useInput("");
    const [email, setEmail] = useInput("");
    const [birthDate, setBirthDate] = useInput("");
    const [age, setAge] = useInput("");
    const [gender, setGender] = useInput("");
    const [address, setAddress] = useInput("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(JSON.stringify({
            name: fullName,
            passport_id: passportId,
            phone: phoneNumber,
            email: email,
            birth_date: birthDate,
            age: age,
            address: address,
            gender:gender,
        }));

        const res = await fetch("https://rustammustafoev.jprq.live/api/user/patient", {
            method:"POST",
            body: JSON.stringify({
                name: fullName,
                passport_id: passportId,
                phone: phoneNumber,
                email: email,
                birth_date: birthDate,
                age: age,
                address: address,
                gender:gender,
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
                <Button onClick={() => navigate(-1)}>Ortga</Button>
            </ContentHeader>
            <div className="p-10">
                <input
                    type="text"
                    value={fullName}
                    placeholder="Full Name"
                    className="border-b p-2 m-2"
                    onChange={setFullName}
                    required
                />
                <input
                    type="text"
                    value={passportId}
                    placeholder="Passport ID"
                    className="border-b p-2 m-2"
                    onChange={setPassportId}
                    required
                />
                <input
                    type="text"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    className="border-b p-2 m-2"
                    onChange={setPhoneNumber}
                    required
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    className="border-b p-2 m-2"
                    onChange={setEmail}
                    required
                />
                <input
                    type="text"
                    value={birthDate}
                    placeholder="Birth date"
                    className="border-b p-2 m-2"
                    onChange={setBirthDate}
                    required
                />
                <input
                    type="text"
                    value={age}
                    placeholder="Age"
                    className="border-b p-2 m-2"
                    onChange={setAge}
                    required
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
                <input
                    type="text"
                    value={address}
                    placeholder="Address"
                    className="border-b p-2 m-2"
                    onChange={setAddress}
                    required
                />
            </div>
            <div className="p-10">
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};

export default PatientForm;

                    
