import React, { useState } from "react";
import "./StudentForm.css";


const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        selectedGrade: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            name: "",
            email: "",
            password: "",
            selectedGrade: "",
            gender: "",
        });
    };

    return (
        <div className="main">
            <h2 className="heading">Student Form</h2>
            <form className="form" onSubmit={handleSubmit}>

        {/*-------------------------------------------- Name Input --------------------------------------------*/}
                <label className="label" type="text">Name:</label>
                <input
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    className="input"
                />

        {/*-------------------------------------------- Email Input --------------------------------------------*/}
                <label className="label" type="email">Email:</label>
                <input
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input"
                />

        {/*-------------------------------------------- Password Input --------------------------------------------*/}
                <label className="label" type="password">Password:</label>
                <input
                    onChange={handleChange}
                    value={formData.password}
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    className="input"
                />

        {/*-------------------------------------------- Select Grade --------------------------------------------*/}
                <label className="label" type="gradeSelect">Select your grade:</label>
                <select
                    name="selectedGrade"
                    value={formData.selectedGrade}
                    onChange={handleChange}
                    className="select"
                >
                    <option value="">Select</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>

        {/*-------------------------------------------- Gender Radio Buttons --------------------------------------------*/}
                <div className="radioGroup">
                    <label className="label">Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            checked={formData.gender === "male"}
                            className="radio"
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            checked={formData.gender === "female"}
                            className="radio"
                        />
                        Female
                    </label>
                </div>

        {/*-------------------------------------------- Submit Button --------------------------------------------*/}
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
























// setFormData is a function provided by the useState hook to update the state variable formData.
// (prevState) or (prevData) is a parameter name conventionally used to represent the previous state or data (formData in this case).
// Inside setFormData, you provide a function that receives prevState as an argument.
// This function returns a new state object based on prevState, spreading its properties (...prevState) and updating the property corresponding to name with the new value.