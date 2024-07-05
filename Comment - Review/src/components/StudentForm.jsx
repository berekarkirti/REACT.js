import React, { useState } from "react";
import "./StudentForm.css";


const StudentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password,
            selectedGrade,
            gender,
        };
        console.log(userData);

        setName("");
        setEmail("");
        setPassword("");
        setSelectedGrade("");
        setGender("");
    };

    const handleGradeChange = (e) => {
        setSelectedGrade(e.target.value);
    };

    return (
        <div className="main">
            <h2 className="heading">Student Form</h2>
            <form className="form" onSubmit={handleSubmit}>

        {/*-------------------------------------------- Name --------------------------------------------*/}
                <label className="label" type="text">Name:</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    className="input"
                />

        {/*-------------------------------------------- Email --------------------------------------------*/}
                <label className="label" type="email">Email:</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input"
                />

        {/*-------------------------------------------- Password --------------------------------------------*/}
                <label className="label" type="password">Password:</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    className="input"
                />

        {/*-------------------------------------------- Select your grade --------------------------------------------*/}
                <label className="label" type="gradeSelect">Select your grade:</label>
                <select
                    id="gradeSelect"
                    value={selectedGrade}
                    onChange={handleGradeChange}
                    className="select"
                >
                    <option value="">Select</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>

        {/*-------------------------------------------- Gender --------------------------------------------*/}
                <div className="radioGroup">
                    <label className="label">Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "male"}
                            className="radio"
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "female"}
                            className="radio"
                        />
                        Female
                    </label>
                </div>

        {/*-------------------------------------------- Submit --------------------------------------------*/}
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
